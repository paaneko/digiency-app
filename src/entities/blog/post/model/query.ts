import { groq } from 'next-sanity';

const query = groq`
  *[_type in ["post", "project"] && slug.current==$slug][0] {
  ...,
  author->{
    ...,
    authorTag->,
  },
  team->{
    ...,
    tag->,
  },
  categories->,
  "comments": *[
    _type == 'comments' &&
    references(^._id) &&
    approved == true
  ] | order(_createdAt desc)
}
`;
export default query;
