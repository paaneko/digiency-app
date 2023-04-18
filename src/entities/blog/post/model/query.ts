import { groq } from 'next-sanity';

const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->{
      ...,
      authorTag->,
    },
    categories[]->,
    "comments": *[
      _type == 'comments' &&
      references(^._id) &&
      approved == true
    ] | order(_createdAt desc)
  }
`;
export default query;
