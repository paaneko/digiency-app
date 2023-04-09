import { groq } from 'next-sanity';

const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->,
  }
`;
export default query;
