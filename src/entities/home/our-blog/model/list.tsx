'use client';

import { OurBlogItem } from '@entities/home/our-blog/ui';
import useOurBlogListQuery from '@entities/home/our-blog/api/useOurBlogListQuery';
import ourBlogListQuery from '@entities/home/our-blog/model/query';

function OurBlogList() {
  const { data, isLoading, error } = useOurBlogListQuery(ourBlogListQuery);

  if (isLoading) {
    return <div className="my-60">Loading ...</div>;
  }

  if (error) {
    return <div className="my-60">Error occurred </div>;
  }
  return (
    <div className="flex justify-between mt-[60px]">
      {data.map((card) => (
        <OurBlogItem
          mainImage={card.mainImage}
          description={card.description}
          title={card.title}
          author={card.author}
          createdAt={card.createdAt}
          slug={card.slug}
        />
      ))}
    </div>
  );
}

export default OurBlogList;
