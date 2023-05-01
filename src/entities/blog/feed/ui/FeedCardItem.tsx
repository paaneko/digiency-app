'use client';

import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import { Slug } from 'sanity';

type AlgoliaHitProps = {
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
    _highlightResult: {
      author: {
        name: {
          value: string;
        };
      };
      description: {
        value: string;
      };
      title: {
        value: string;
      };
    };
  };
};

export function FeedCardItem({ hit }: AlgoliaHitProps) {
  if (hit.nbHits < 0) {
    return <div>No results</div>;
  }

  return (
    <div className="mb-12 max-w-[700px] flex items-center justify-between">
      <div>
        <div>
          <span
            dangerouslySetInnerHTML={{ __html: hit._highlightResult.author.name.value }}
            className="font-medium cursor-pointer hover:"
          />{' '}
          in <span className="font-medium text-orange-main ">{hit.categories.title}</span>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }}
          className="font-semibold text-xl mt-2"
        />
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
    // <div className="w-[770px] bg-white rounded-lg pb-[60px]">
    //   <ClientSideRoute route={`/blog/p/${hit.slug}`}>
    //     <div className="flex space-x-2 hover:scale-105 transition-transform duration-200 ease-out cursor-pointer">
    //       <Image className="rounded-lg" width={770} height={400} src={urlFor(hit.mainImage).url()} alt={hit.title} />
    //     </div>
    //   </ClientSideRoute>
    //   <div className="px-5">
    //     <PostInfo
    //       createdAt={hit.createdAt}
    //       authorName={hit.author.name}
    //       authorSlug={hit.author.slug}
    //       commentCount={9}
    //     />
    //     <div className="font-semibold text-[31px] mb-6">{hit.title}</div>
    //     <div className="my-[25px] text-gray-pg line-clamp-3">{hit.description}</div>
    //     <ClientSideRoute route={`/blog/p/${hit.slug}`}>
    //       <div className="mb-5 mt-10 flex justify-start">
    //         <OrangeButton label="Read More" />
    //       </div>
    //     </ClientSideRoute>
    //   </div>
    // </div>
  );
}

export default FeedCardItem;
