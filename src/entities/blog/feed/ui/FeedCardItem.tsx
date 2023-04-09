import { BlogPost } from '@shared/ui-types';
import Image from 'next/image';
import { OrangeButton } from '@shared/ui/buttons/orange-button';
import urlFor from '@shared/lib/urlFor';
import { ClientSideRoute } from '@shared/lib/ClientSideRoute';
import { PostInfo } from '@shared/ui/post-info';

type Props = {
  post: BlogPost;
};

export function FeedCardItem({ post }: Props) {
  return (
    <div className="w-[770px] bg-white rounded-lg pb-[60px]">
      <ClientSideRoute route={`/blog/p/${post.slug.current}`}>
        <div className="flex space-x-2 hover:scale-105 transition-transform duration-200 ease-out cursor-pointer">
          <Image className="rounded-lg" width={770} height={400} src={urlFor(post.mainImage).url()} alt={post.title} />
        </div>
      </ClientSideRoute>
      <div className="px-5">
        <PostInfo createdAt={post._createdAt} authorName={post.author.name} commentCount={9} />
        <div className="font-semibold text-[31px] mb-6">{post.title}</div>
        <div className="my-[25px] text-gray-pg line-clamp-3">{post.description}</div>
        <ClientSideRoute route={`/blog/p/${post.slug.current}`}>
          <div className="mb-5 mt-10 flex justify-start">
            <OrangeButton label="Read More" />
          </div>
        </ClientSideRoute>
      </div>
    </div>
  );
}

export default FeedCardItem;
