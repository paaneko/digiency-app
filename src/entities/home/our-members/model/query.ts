import { groq } from 'next-sanity';

const ourMemberListQuery = groq`
*[_type == 'author' && !(_id in path('drafts.**'))][0..7] {
  _id,
  image,
  "authorTag": authorTag->title,
  bio,
  name,
  slug,
}
`;
export default ourMemberListQuery;
