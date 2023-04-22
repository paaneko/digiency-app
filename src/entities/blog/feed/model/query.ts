import { groq } from 'next-sanity';

const blogListQuery = groq`
  *[(_type == 'post' || _type == 'projects')] | order(_createdAt desc) {
    ...,
    author->,
    categories->,
    team->,
  }
`;
export default blogListQuery;
