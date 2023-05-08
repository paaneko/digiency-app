import Image from 'next/image';
import ReviewType from '@entities/home/our-testimonial/model/types';
import urlFor from '@shared/lib/urlFor';

type ReviewProps = {
  review: ReviewType;
};

export function Review({ review }: ReviewProps) {
  return (
    <div className="w-[370px] h-[270px] p-[25px] bg-white rounded-lg flex-col justify-between inline-flex">
      <div>
        <div className="flex space-x-2">
          <Image width={20} height={20} src="/star.svg" alt="star" />
          <Image width={20} height={20} src="/star.svg" alt="star" />
          <Image width={20} height={20} src="/star.svg" alt="star" />
          <Image width={20} height={20} src="/star.svg" alt="star" />
          <Image width={20} height={20} src="/star.svg" alt="star" />
        </div>
        <div className="mt-[25px] text-gray-pg line-clamp-4">{review.body}</div>
      </div>
      <div className="flex justify-between">
        <Image
          width={50}
          height={50}
          className="rounded-full"
          src={urlFor(review.image.asset._ref).url()}
          alt={`${review.name} image for review}`}
        />
        <div className="">
          <div className="font-medium text-xl text-orange-main">{review.name}</div>
          <div className="text-sm text-gray-pg font-light">{review.specialization}</div>
        </div>
        <Image width={44} height={35} src="/rewiew-commas.svg" alt="review-commas" />
      </div>
    </div>
  );
}

export default Review;
