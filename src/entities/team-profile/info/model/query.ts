import { groq } from 'next-sanity';

const teamProfileInfoQuery = groq`
*[_type == 'team' && slug.current==$slug][0] {
  bio,
  image,
  name,
  slug,
  tag,
  members[]->{
  slug,
  bio,
  image,
  name,
  authorTag->{
    title,
  },
  },
}
`;

export default teamProfileInfoQuery;
