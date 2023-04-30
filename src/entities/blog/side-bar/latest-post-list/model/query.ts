import { groq } from 'next-sanity';

const query = groq`
  *[_type in ["post", "project"] && !(_id in path('drafts.**'))]| order(_createdAt desc) [0...5] {
  slug,
  title,
  "mainImage": mainImage.asset._ref,
}
`;
export default query;
