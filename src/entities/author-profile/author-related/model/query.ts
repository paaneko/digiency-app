import { groq } from 'next-sanity';

export const relatedPostsQuery = groq`
*[ _type == 'post' && author->slug.current == $authorSlug] {
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

export const relatedProjectsQuery = groq`
*[ _type == 'project' && $authorSlug in team->members[]->slug.current] {
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
  "author": team->{
    "slug": slug.current,
    name,
    "tag": tag->title,
    _id,
  },
}
`;
