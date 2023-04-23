import { groq } from 'next-sanity';

const blogListQuery = groq`
  *[(_type == 'post' || _type == 'project')] | order(_createdAt desc) {
    ...,
    author->,
    categories->,
    team->{
      ...,
      tag->,
    },
  }
`;
export default blogListQuery;
