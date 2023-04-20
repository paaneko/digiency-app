import algoliasearch from 'algoliasearch';
import sanityClient from '@shared/lib/sanity.client';
import indexer from 'sanity-algolia';
import { NextApiRequest, NextApiResponse } from 'next';
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';

export const algolia = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_KEY!
);

export const POST_PROJECTION = `
{
  _type,
  _rev,
  "objectID": _id,
  _createdAt,
  title,
  description,
  categories->{
    title,
    _id,
  },
  "tags": author->{
    authorTag->{
      title,
        _id,
    },
  },
  author->{
    name,
      _id
  },
}
`;

const secret = process.env.NEXT_PUBLIC_SANITY_SECRET!;

async function readBody(readable: any) {
  const chunks = [];
  // eslint-disable-next-line no-restricted-syntax
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const vercelHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const signature = req.headers[SIGNATURE_HEADER_NAME];
  const body = await readBody(req);
  if (!isValidSignature(body, <string>signature, secret)) {
    res.status(401).json({ success: false, message: 'Invalid signature' });
    return;
  }
  const jsonBody = JSON.parse(body);

  const index = algolia.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX!);

  const sanityAlgolia = indexer(
    {
      post: {
        index,
        projection: POST_PROJECTION,
      },
    },
    (document) => document
  );

  // eslint-disable-next-line consistent-return
  return sanityAlgolia
    .webhookSync(sanityClient, jsonBody)
    .then(() => {
      res.status(200).send('ok');
    })
    .catch(() => {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Something went wrong' }),
      };
    });
};

export default vercelHandler;
