import { groq } from 'next-sanity';

const authorRelatedProjectsQuery = groq`
*[ _type == 'project' && $slug in team->members[]->slug.current && !(_id in path("drafts.**"))] {
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

export default authorRelatedProjectsQuery;
