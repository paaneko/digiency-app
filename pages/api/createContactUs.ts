import sanityClient from '@shared/lib/sanity.client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function createComment(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, mobile, subject, body } = JSON.parse(req.body);

  await sanityClient
    .create({
      _type: 'contactUs',
      mobile,
      name,
      subject,
      email,
      body,
    })
    .catch((err) => {
      return res.status(500).json({ message: `Couldn't submit application`, err });
    });

  return res.status(200).json({ message: `Application submitted` });
}
