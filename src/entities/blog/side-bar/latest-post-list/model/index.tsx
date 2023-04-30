'use client';

import { LatestPostItem, LatestPostItemType } from '@entities/blog/side-bar/latest-post-list/ui';
import client from '@shared/lib/sanity.client';
import query from '@entities/blog/side-bar/latest-post-list/model/query';
import { useEffect, useState } from 'react';

function LatestPostList() {
  const [data, setData] = useState<LatestPostItemType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const latestPostsData: LatestPostItemType[] = await client.fetch(query);
      setData(latestPostsData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className="py-10 px-5 shadow-div my-6">
        <div className="font-medium text-2xl">Latest Posts</div>
        {data.map((post) => (
          // eslint-disable-next-line react/no-array-index-key
          <LatestPostItem title={post.title} mainImage={post.mainImage} slug={post.slug} />
        ))}
      </div>
    </div>
  );
}

export default LatestPostList;
