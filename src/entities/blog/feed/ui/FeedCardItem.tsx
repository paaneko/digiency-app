'use client';

import Image from 'next/image';
import { OrangeButton } from '@shared/ui/buttons/orange-button';
import urlFor from '@shared/lib/urlFor';
import { ClientSideRoute } from '@shared/lib/ClientSideRoute';
import { PostInfo } from '@shared/ui/post-info';
import { Slug } from 'sanity';

type Props = {
  hit: {
    slug: string;
    title: string;
    description: string;
    mainImage: string;
    tag: {
      title: string;
    };
    categories: {
      title: string;
    };
    author: {
      name: string;
      slug: Slug;
    };
    createdAt: string;
    objectID: string;
    nbHits: number;
  };
};

export function FeedCardItem({ hit }: Props) {
  if (hit.nbHits < 0) {
    return <div>No results</div>;
  }

  return (
    <div className="w-[770px] bg-white rounded-lg pb-[60px]">
      <ClientSideRoute route={`/blog/p/${hit.slug}`}>
        <div className="flex space-x-2 hover:scale-105 transition-transform duration-200 ease-out cursor-pointer">
          <Image className="rounded-lg" width={770} height={400} src={urlFor(hit.mainImage).url()} alt={hit.title} />
        </div>
      </ClientSideRoute>
      <div className="px-5">
        <PostInfo
          createdAt={hit.createdAt}
          authorName={hit.author.name}
          authorSlug={hit.author.slug}
          commentCount={9}
        />
        <div className="font-semibold text-[31px] mb-6">{hit.title}</div>
        <div className="my-[25px] text-gray-pg line-clamp-3">{hit.description}</div>
        <ClientSideRoute route={`/blog/p/${hit.slug}`}>
          <div className="mb-5 mt-10 flex justify-start">
            <OrangeButton label="Read More" />
          </div>
        </ClientSideRoute>
      </div>
    </div>
  );
}

export default FeedCardItem;
