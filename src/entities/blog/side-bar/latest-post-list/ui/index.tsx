'use client';

import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import { ClientSideRoute } from '@shared/lib/ClientSideRoute';
// TODO replace a to next js <Link />

export type LatestPostItemType = {
  slug: {
    current: string;
  };
  title: string;
  mainImage: string;
};

export function LatestPostItem({ slug, title, mainImage }: LatestPostItemType) {
  return (
    <div>
      <ClientSideRoute route={`/blog/p/${slug.current}`}>
        <div className="flex my-[30px] items-center" id={slug.current}>
          <Image className="mr-4" width={60} height={60} src={urlFor(mainImage).url()} alt="latest-blog-avatar" />
          <div className="max-w-[251px] font-medium text-xl">{title}</div>
        </div>
      </ClientSideRoute>
    </div>
  );
}

export default LatestPostItem;
