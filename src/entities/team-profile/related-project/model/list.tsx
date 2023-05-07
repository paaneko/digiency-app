'use client';

import RelatedItem from '@shared/ui/RelatedItem';
import useRelatedQuery from '@shared/api/useRelatedQuery';
import teamRelatedProjectsQuery from '@entities/team-profile/related-project/model/query';

type AuthorRelatedProjectsProps = {
  slug: string;
};

function TeamRelatedProjects({ slug }: AuthorRelatedProjectsProps) {
  const { data, isLoading, error } = useRelatedQuery(teamRelatedProjectsQuery, slug);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Something went wrong try later</div>;
  }
  return (
    <div>
      <div className="font-semibold text-3xl text-center">Projects from this team: </div>
      {data?.map((post) => (
        <RelatedItem item={post} />
      ))}
    </div>
  );
}

export default TeamRelatedProjects;
