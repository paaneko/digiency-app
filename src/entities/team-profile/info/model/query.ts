import { groq } from 'next-sanity';

const TeamProfileInfoQuery = groq`
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

export default TeamProfileInfoQuery;
