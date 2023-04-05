'use client';

import { latestPostList } from '@shared/ui-config';
import { LatestPostItem } from '@entities/blog/latest-post-item';

// TODO remove suppression

export function LatestPostList() {
  return (
    <div>
      <div className="py-10 px-5 shadow-div my-6">
        <div className="font-medium text-2xl">Latest Posts</div>
        {latestPostList.map((post, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <LatestPostItem key={i} img={post.img} refLink={post.refLink} label={post.label} />
        ))}
      </div>
    </div>
  );
}

export default LatestPostList;
