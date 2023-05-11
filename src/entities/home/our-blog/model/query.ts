import { groq } from 'next-sanity';

const reviewListQuery = groq`
*[_type == 'post' && !(_id in path('drafts.**'))][0..9] {
  mainImage,
  description,
  "createdAt": _createdAt,
  title,
  "author": author->{
    name,
    slug,
  },
  slug,
}
`;
export default reviewListQuery;
