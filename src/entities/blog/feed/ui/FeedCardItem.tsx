'use client';

import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import { ClientSideRoute } from '@shared/lib/ClientSideRoute';
import FeedCardItemType from '@entities/blog/feed/model/types';

type AlgoliaHitProps = {
  hit: FeedCardItemType;
};

export function FeedCardItem({ hit }: AlgoliaHitProps) {
  // TODO TRY TO ADD NO RESULTS HANDLER
  if (hit.nbHits < 0) {
    return <div>No results</div>;
  }

  return (
    <div className="mb-12 max-w-[700px] flex items-center justify-between">
      <div>
        <div>
          <ClientSideRoute route={`/blog/${hit.type === 'post' ? 'author' : 'team'}/${hit.author.slug.current}`}>
            <span
              dangerouslySetInnerHTML={{ __html: hit._highlightResult.author.name.value }}
              className="text-sm md:text-base md:font-medium cursor-pointer "
            />
          </ClientSideRoute>{' '}
          in <span className="text-sm md:text-base md:font-medium text-orange-main ">{hit.categories.title}</span>
        </div>
        <ClientSideRoute route={`/blog/p/${hit.slug}`}>
          <div
            dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }}
            className="w-[228px] md:w-full line-clamp-2 md:line-clamp-3 font-semibold md:text-xl mt-2"
          />
        </ClientSideRoute>
        <div
          dangerouslySetInnerHTML={{ __html: hit._highlightResult.description.value }}
          className="hidden md:display-webkit-box line-clamp-2 text-gray-pg pt-1"
        />
        <div className="pt-2">
          <span className="text-sm md:text-base">
            {new Date(hit.createdAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <span className="px-2 hidden md:inline-block">·</span>
          <span className="py-1 px-2.5 text-sm bg-dark-white-bg rounded-full hidden md:inline-block">
            {hit.tag.title}
          </span>
        </div>
      </div>
      <div className="max-w-[100px] h-[100px] md:min-w-[200px] md:h-[134px] ml-5">
        <Image
          className="w-full h-full object-cover object-center"
          width={200}
          height={134}
          src={urlFor(hit.mainImage).url()}
          alt={hit.title}
        />
      </div>
    </div>
  );
}

export default FeedCardItem;
