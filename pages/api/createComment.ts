import sanityClient from '@shared/lib/sanity.client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function createComment(req: NextApiRequest, res: NextApiResponse) {
  const { _id, name, email, body } = JSON.parse(req.body);

  await sanityClient
    .create({
      _type: 'comments',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      body,
    })
    .catch((err) => {
      return res.status(500).json({ message: `Couldn't submit comment`, err });
    });

  return res.status(200).json({ message: `Comment submitted` });
}
