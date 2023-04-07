import { groq } from 'next-sanity';

const blogListQuery = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc) 
`;
export default blogListQuery;
