'use client';

// import { BlogPost } from '@shared/ui-types';
// import { FeedCardItem } from '@entities/blog/feed/ui/FeedCardItem';
import { useBlogHeroContext } from '@widgets/blog-hero/model/useBlogHeroContext';
import { useEffect } from 'react';

// type Props = {
//   blogCards: BlogPost[];
// };

export function FeedCardList() {
  const { setHeroTitle } = useBlogHeroContext();
  useEffect(() => {
    setHeroTitle('Our Blog');
  }, [setHeroTitle]);
  return (
    <div className="">
      {/* {blogCards.map((blogPost) => ( */}
      {/*  <FeedCardItem key={blogPost._id} post={blogPost} /> */}
      {/* ))} */}
    </div>
  );
}

export default FeedCardList;
