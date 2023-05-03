import { groq } from 'next-sanity';

const AuthorProfileInfoQuery = groq`
*[_type == 'author' && slug.current==$authorSlug][0] {
  ...,
  "authorTag": authorTag->,
  "relatedPosts": *[
    _type == 'post' &&
    author->slug.current == $authorSlug
  ] {
    _id,
  },
  "relatedTeams": *[
    _type == 'team' && $authorSlug in members[]->slug.current && !(_id in path("drafts.**"))
  ] {
    "slug": slug.current,
    name,
  }
}
`;

export default AuthorProfileInfoQuery;
