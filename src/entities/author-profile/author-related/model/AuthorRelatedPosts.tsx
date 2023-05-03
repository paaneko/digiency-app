'use client';

import useRelatedQuery from '@entities/author-profile/author-related/api/useRelatedQuery';
import AuthorRelatedItem from '@entities/author-profile/author-related/ui/AuthorRelatedItem';
import { relatedPostsQuery } from '@entities/author-profile/author-related/model/query';

type AuthorRelatedPostsProps = {
  slug: string;
};

function AuthorRelatedPosts({ slug }: AuthorRelatedPostsProps) {
  const { data, isLoading, error } = useRelatedQuery(relatedPostsQuery, slug);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Something went wrong try later</div>;
  }
  return (
    <div>
      <div className="font-semibold text-3xl">Author of this Posts: </div>
      {data?.map((post) => (
        <AuthorRelatedItem item={post} />
      ))}
    </div>
  );
}

export default AuthorRelatedPosts;
