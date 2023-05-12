'use client';

import RelatedItem from '@shared/ui/RelatedItem';
import { AuthorRelatedItemType } from '@shared/types';

type AuthorRelatedProjectsProps = {
  data: AuthorRelatedItemType[];
};

function AuthorRelatedProjects({ data }: AuthorRelatedProjectsProps) {
  return (
    <div className="flex flex-col items-center mt-12 xl:m-0">
      <div className="font-semibold text-center xl:text-left text-xl md:text-2xl xl:text-3xl">
        Also take part in this projects:{' '}
      </div>
      {data?.map((post) => (
        <RelatedItem item={post} />
      ))}
    </div>
  );
}

export default AuthorRelatedProjects;
