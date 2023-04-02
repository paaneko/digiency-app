import { BlogCardType } from '@shared/ui-types';
import Image from 'next/image';
import { OrangeButtton } from '@shared/ui/buttons/orange-button';

export function BlogCardItem({ label, img, time, title, author, comments_count }: BlogCardType) {
  return (
    <div className="w-[770px] bg-white rounded-lg pb-[60px]">
      <div className="flex space-x-2">
        <Image className="rounded-lg" width={770} height={400} src={img} alt={label} />
      </div>
      <div className="px-5">
        <div className="flex text-[10px] text-gray-pg justify-between py-10">
          <div className="flex">
            <Image width={24} height={24} src="timer.svg" alt="timer-icon" />
            <div className="ml-3.5 text-xl font-medium">{time}</div>
          </div>
          <div className="flex">
            <Image width={24} height={24} src="person.svg" alt="person-icon" />
            <div className="ml-3.5 text-xl font-medium">{author}</div>
          </div>
          <div className="flex">
            <Image width={24} height={24} src="message-circle.svg" alt="message-circle-icon" />
            <div className="ml-3.5 text-xl font-medium">{comments_count} Comment</div>
          </div>
        </div>
        <div className="font-semibold text-[31px] mb-6">{label}</div>
        <div className="my-[25px] text-gray-pg">{title}</div>
        <div className="mb-5 mt-10">
          <OrangeButtton label="Read More" />
        </div>
      </div>
    </div>
  );
}

export default BlogCardItem;
