import Image from 'next/image';
import { OrangeButton } from '@shared/ui/buttons/orange-button';
import BlogItem from '@entities/home/our-blog/model/types';
import urlFor from '@shared/lib/urlFor';
import { ClientSideRoute } from '@shared/lib/ClientSideRoute';

export function OurBlogItem({ mainImage, createdAt, title, description, author, slug }: BlogItem) {
  return (
    <div className="w-[370px] p-[15px] bg-white rounded-lg flex-col justify-between inline-flex">
      <div className="flex space-x-2">
        <Image className="rounded-lg" width={340} height={255} src={urlFor(mainImage.asset._ref).url()} alt={title} />
      </div>
      <div className="font-medium text-[20px] my-3.5">{title}</div>
      <div className="flex text-[13px] font-medium justify-around ">
        <div className="flex">
          <Image width={14} height={14} src="timer.svg" alt="timer-icon" />
          <div className="ml-1">
            {new Date(createdAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
        </div>
        <ClientSideRoute route={`blog/author/${author.slug.current}`}>
          <div className="flex">
            <Image width={14} height={14} src="person.svg" alt="person-icon" />
            <div className="ml-1">{author.name}</div>
          </div>
        </ClientSideRoute>
      </div>
      <div className="my-[25px] text-gray-pg line-clamp-5">{description}</div>
      <ClientSideRoute route={`/blog/p/${slug.current}`}>
        <div className="mb-5 mt-2">
          <OrangeButton label="Read More" />
        </div>
      </ClientSideRoute>
    </div>
  );
}

export default OurBlogItem;
