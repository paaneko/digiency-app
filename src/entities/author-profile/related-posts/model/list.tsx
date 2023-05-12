'use client';

import RelatedItem from '@shared/ui/RelatedItem';
// import useRelatedQuery from '@shared/api/useRelatedQuery';
// import authorRelatedPostsQuery from '@entities/author-profile/related-posts/model/query';
import { AuthorRelatedItemType } from '@shared/types';

type AuthorRelatedPostsProps = {
  data: AuthorRelatedItemType[];
};

function AuthorRelatedPosts({ data }: AuthorRelatedPostsProps) {
  // const { data, isLoading, error } = useRelatedQuery(authorRelatedPostsQuery, slug);

  return (
    <div className="flex flex-col items-center">
      <div className="font-semibold text-center xl:text-left text-xl md:text-2xl xl:text-3xl">
        Author of this Posts:{' '}
      </div>
      {data?.map((post) => (
        <RelatedItem item={post} />
      ))}
    </div>
  );
}

export default AuthorRelatedPosts;
