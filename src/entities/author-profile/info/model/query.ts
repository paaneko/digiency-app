import { groq } from 'next-sanity';

const authorProfileInfoQuery = groq`
*[_type == 'author' && slug.current==$slug && !(_id in path("drafts.**"))][0] {
  ...,
  "authorTag": authorTag->,
  "relatedPosts": *[
    _type == 'post' &&
    author->slug.current == slug
  ] {
    _id,
  },
  "relatedTeams": *[
    _type == 'team' && $slug in members[]->slug.current && !(_id in path("drafts.**"))
  ] {
    "slug": slug.current,
    name,
  }
}
`;

export default authorProfileInfoQuery;
