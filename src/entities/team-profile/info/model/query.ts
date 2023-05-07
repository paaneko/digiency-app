import { groq } from 'next-sanity';

const TeamProfileInfoQuery = groq`
*[_type == 'team' && slug.current=="team-beta"][0] {
  bio,
  image,
  name,
  slug,
  tag,
  members[]->{
  slug,
    bio,
    name,
    authorTag->{
      title,
    },
  },
}
`;

export default TeamProfileInfoQuery;
