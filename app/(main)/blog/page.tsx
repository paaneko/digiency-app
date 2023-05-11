'use client';

// TODO Implement Prewiew on enother page
import { InstantSearch } from 'react-instantsearch-hooks-web';
import { FeedCardItem } from '@entities/blog/feed/ui/FeedCardItem';
import algoliasearch from 'algoliasearch';
import { BlogSideBar } from '@widgets/blog-sidebar';
import InfiniteHits from '@shared/lib/InfinityHits';
import { useBlogHeroContext } from '@widgets/blog-hero/model/useBlogHeroContext';
import { useEffect } from 'react';

export default function Blog() {
  const { setHeroTitle } = useBlogHeroContext();
  useEffect(() => {
    setHeroTitle('Our Blog');
  }, [setHeroTitle]);

  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID!,
    process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_KEY!
  );

  return (
    <InstantSearch searchClient={searchClient} indexName="Digiency">
      <div className="flex flex-col-reverse xl:flex-row mt-[120px] justify-between">
        <InfiniteHits hitComponent={FeedCardItem} />
        <div className="xl:w-[370px]">
          <BlogSideBar />
        </div>
      </div>
    </InstantSearch>
  );
}
