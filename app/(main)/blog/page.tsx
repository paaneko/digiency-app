'use client';

// TODO Implement Prewiew on enother page
// import { previewData } from 'next/headers';
// import PreviewSuspense from '@shared/lib/PreviewSuspense';
// import PreviewBlogCardList from '@entities/blog/feed/ui/PreviewBlogCardList';
// import blogListQuery from '@entities/blog/feed/model/query';
// import { BlogSideBar } from '@widgets/blog-sidebar';
import { InstantSearch } from 'react-instantsearch-hooks-web';
import { FeedCardItem } from '@entities/blog/feed/ui/FeedCardItem';
import algoliasearch from 'algoliasearch';
import { BlogSideBar } from '@widgets/blog-sidebar';
import InfiniteHits from '@shared/lib/InfinityHits';
import { useBlogHeroContext } from '@widgets/blog-hero/model/useBlogHeroContext';
import { useEffect } from 'react';
// import client from '../../../src/shared/lib/sanity.client';

export default function Blog() {
  const { setHeroTitle } = useBlogHeroContext();
  useEffect(() => {
    setHeroTitle('Our Blog');
  }, [setHeroTitle]);
  // if (previewData()) {
  //   return (
  //     <div />
  // <PreviewSuspense
  //   fallback={
  //     <div role="status">
  //       <p className="text-center text-lg animate-pulse text-orange-main py-[500px]">Loading Preview Data</p>
  //     </div>
  //   }
  // >
  //   <div className="flex mt-[120px]">
  //     <div className="flex-1 bg-white">
  //       <PreviewBlogCardList query={blogListQuery} />
  //     </div>
  //     <div className="w-[370px]">
  //       <BlogSideBar />
  //     </div>
  //   </div>
  // </PreviewSuspense>
  //   );
  // }

  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID!,
    process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_KEY!
  );

  return (
    <InstantSearch searchClient={searchClient} indexName="Digiency">
      <div className="flex mt-[120px] justify-between">
        <InfiniteHits hitComponent={FeedCardItem} />
        <div className="w-[370px]">
          <BlogSideBar />
        </div>
      </div>
    </InstantSearch>
  );
}
