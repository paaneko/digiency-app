import Image from 'next/image';
import { BlogCardType } from '@shared/ui-types';
import { OrangeButtton } from '@shared/ui/buttons/orange-button';

export function BlogCardPreview({ img, author, label, time, comments_count, title }: BlogCardType) {
  return (
    <div className="w-[370px] p-[15px] bg-white rounded-lg">
      <div className="flex space-x-2">
        <Image className="rounded-lg" width={340} height={255} src={img} alt={label} />
      </div>
      <div className="font-medium text-[20px] my-3.5">{label}</div>
      <div className="flex text-[10px] justify-between ">
        <div className="flex">
          <Image width={14} height={14} src="timer.svg" alt="timer-icon" />
          <div className="ml-1">{time}</div>
        </div>
        <div className="flex">
          <Image width={14} height={14} src="person.svg" alt="person-icon" />
          <div className="ml-1">{author}</div>
        </div>
        <div className="flex">
          <Image width={14} height={14} src="message-circle.svg" alt="message-circle-icon" />
          <div className="ml-1">{comments_count} Comment</div>
        </div>
      </div>
      <div className="my-[25px] text-gray-pg">{title}</div>
      <div className="mb-5 mt-2">
        <OrangeButtton label="Read More" />
      </div>
    </div>
  );
}

export default BlogCardPreview;
