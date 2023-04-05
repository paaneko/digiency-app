import { BlogPost } from '@shared/ui-types';
import Image from 'next/image';
import { OrangeButtton } from '@shared/ui/buttons/orange-button';
import urlFor from '@shared/lib/urlFor';

type Props = {
  post: BlogPost;
};

export function BlogCardItem({ post }: Props) {
  return (
    <div className="w-[770px] bg-white rounded-lg pb-[60px]">
      <div className="flex space-x-2 hover:scale-105 transition-transform duration-200 ease-out cursor-pointer">
        <Image className="rounded-lg" width={770} height={400} src={urlFor(post.mainImage).url()} alt={post.title} />
      </div>
      <div className="px-5">
        <div className="flex text-[10px] text-gray-pg justify-between py-10">
          <div className="flex">
            <Image width={24} height={24} src="timer.svg" alt="timer-icon" />
            <div className="ml-3.5 text-xl font-medium">
              {new Date(post._createdAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </div>
          </div>
          <div className="flex">
            <Image width={24} height={24} src="person.svg" alt="person-icon" />
            <div className="ml-3.5 text-xl font-medium">{post.author.name}</div>
          </div>
          <div className="flex">
            <Image width={24} height={24} src="message-circle.svg" alt="message-circle-icon" />
            <div className="ml-3.5 text-xl font-medium">{10} Comment</div>
          </div>
        </div>
        <div className="font-semibold text-[31px] mb-6">{post.title}</div>
        <div className="my-[25px] text-gray-pg line-clamp-3">{post.description}</div>
        <div className="mb-5 mt-10">
          <OrangeButtton label="Read More" />
        </div>
      </div>
    </div>
  );
}

export default BlogCardItem;
