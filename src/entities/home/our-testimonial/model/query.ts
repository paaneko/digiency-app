import { groq } from 'next-sanity';

const reviewListQuery = groq`
  *[_type == 'homeSettings' && !(_id in path('drafts.**'))][0] {
  ourTestimonial[]->{
    name,
    body,
    specialization,
    image,
  },
}
`;
export default reviewListQuery;
