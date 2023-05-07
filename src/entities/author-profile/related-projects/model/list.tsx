'use client';

import RelatedItem from '@shared/ui/RelatedItem';
import useRelatedQuery from '@shared/api/useRelatedQuery';
import authorRelatedProjectsQuery from '@entities/author-profile/related-projects/model/query';

type AuthorRelatedProjectsProps = {
  slug: string;
};

function AuthorRelatedProjects({ slug }: AuthorRelatedProjectsProps) {
  const { data, isLoading, error } = useRelatedQuery(authorRelatedProjectsQuery, slug);
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
        <RelatedItem item={post} />
      ))}
    </div>
  );
}

export default AuthorRelatedProjects;
