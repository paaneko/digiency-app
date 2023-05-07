import { groq } from 'next-sanity';

const authorRelatedPostsQuery = groq`
*[ _type == 'post' && author->slug.current == $slug && !(_id in path("drafts.**"))] {
  _id,
  "createdAt": _createdAt,
  title,
  description,
  "slug": slug.current,
  "mainImage": mainImage.asset._ref,
  categories->{
    title,
    _id,
  },
  "author": author->{
    "slug": slug.current,
    name,
    "tag": authorTag->title,
    _id,
  },
}
`;

export default authorRelatedPostsQuery;
