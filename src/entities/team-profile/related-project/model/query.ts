import { groq } from 'next-sanity';

const teamRelatedProjectsQuery = groq`
*[ _type == 'project' && team->slug.current == $slug && !(_id in path("drafts.**"))] {
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

export default teamRelatedProjectsQuery;
