'use client';

import RelatedItem from '@shared/ui/RelatedItem';
import { AuthorRelatedItemType } from '@shared/types';

type AuthorRelatedProjectsProps = {
  data: AuthorRelatedItemType[];
};

function TeamRelatedProjects({ data }: AuthorRelatedProjectsProps) {
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
