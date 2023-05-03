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
              className="font-medium cursor-pointer hover:"
            />
          </ClientSideRoute>{' '}
          in <span className="font-medium text-orange-main ">{hit.categories.title}</span>
        </div>
        <ClientSideRoute route={`/blog/p/${hit.slug}`}>
          <div
            dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }}
            className="font-semibold text-xl mt-2"
          />
        </ClientSideRoute>
        <div
          dangerouslySetInnerHTML={{ __html: hit._highlightResult.description.value }}
          className="line-clamp-2 text-gray-pg pt-1"
        />
        <div className="pt-2">
          {new Date(hit.createdAt).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
          <span className="px-2">·</span>
          <span className="py-1 px-2.5 text-sm bg-dark-white-bg rounded-full">{hit.tag.title}</span>
        </div>
      </div>
      <div className="min-w-[200px] h-[134px] ml-5">
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
