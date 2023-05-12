import Image from 'next/image';
import { ReviewType } from '@entities/home/our-testimonial/model/types';
import urlFor from '@shared/lib/urlFor';

type ReviewProps = {
  review: ReviewType;
};

export function Review({ review }: ReviewProps) {
  return (
    <div className="w-[270px] h-[300px] md:w-[370px] h-[270px] p-[25px] bg-white rounded-lg flex-col justify-between inline-flex">
      <div>
        <div className="flex justify-center md:block">
          <div className="flex space-x-2">
            <Image draggable={false} width={20} height={20} src="/star.svg" alt="star" />
            <Image draggable={false} width={20} height={20} src="/star.svg" alt="star" />
            <Image draggable={false} width={20} height={20} src="/star.svg" alt="star" />
            <Image draggable={false} width={20} height={20} src="/star.svg" alt="star" />
            <Image draggable={false} width={20} height={20} src="/star.svg" alt="star" />
          </div>
        </div>
        <div className="mt-6 inline-block text-gray-pg line-clamp-4 w-[220px] md:w-[320px] text-center md:text-left">
          {review.body}
        </div>
      </div>
      <div className="flex justify-center md:justify-between">
        <Image
          width={50}
          height={50}
          className="hidden md:block rounded-full"
          src={urlFor(review.image.asset._ref).url()}
          alt={`${review.name} image for review}`}
        />
        <div className="">
          <div className="font-medium text-xl text-orange-main text-center md:text-left">{review.name}</div>
          <div className="text-sm text-gray-pg font-light text-center">{review.specialization}</div>
        </div>
        <Image className="hidden md:block" width={44} height={35} src="/rewiew-commas.svg" alt="review-commas" />
      </div>
    </div>
  );
}

export default Review;
