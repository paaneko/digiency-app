'use client';

import ReviewItem from '@entities/home/our-testimonial/ui';
import useReviewListQuery from '@entities/home/our-testimonial/api/useReviewListQuery';
import reviewListQuery from '@entities/home/our-testimonial/model/query';

function ReviewList() {
  const { data, isLoading, error } = useReviewListQuery(reviewListQuery);

  if (isLoading) {
    return <div className="my-60">Loading ...</div>;
  }

  if (error) {
    return <div className="my-60">Error occurred </div>;
  }

  return (
    <div className="flex justify-between mt-[60px]">
      {data.ourTestimonial.map((item) => (
        <ReviewItem review={item} />
      ))}
    </div>
  );
}

export default ReviewList;
