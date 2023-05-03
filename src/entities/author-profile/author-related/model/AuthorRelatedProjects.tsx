'use client';

import useRelatedQuery from '@entities/author-profile/author-related/api/useRelatedQuery';
import AuthorRelatedItem from '@entities/author-profile/author-related/ui/AuthorRelatedItem';
import { relatedProjectsQuery } from '@entities/author-profile/author-related/model/query';

type AuthorRelatedProjectsProps = {
  slug: string;
};

function AuthorRelatedProjects({ slug }: AuthorRelatedProjectsProps) {
  const { data, isLoading, error } = useRelatedQuery(relatedProjectsQuery, slug);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Something went wrong try later</div>;
  }
  return (
    <div>
      <div className="font-semibold text-3xl">Also take part in this projects: </div>
      {data?.map((post) => (
        <AuthorRelatedItem item={post} />
      ))}
    </div>
  );
}

export default AuthorRelatedProjects;
