'use client';

import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import RichTextComponents from '@shared/lib/RichTextComponents';
import { PortableText } from '@portabletext/react';
import { useBlogHeroContext } from '@widgets/blog-hero/model/useBlogHeroContext';
import { ClientSideRoute } from '@shared/lib/ClientSideRoute';
import useAuthorProfileInfoQuery from '@entities/author-profile/info/api/useAuthorProfileInfoQuery';
import AuthorProfileInfoQuery from '@entities/author-profile/info/model/query';

type AuthorItemProps = {
  slug: string;
};

function AuthorItem({ slug }: AuthorItemProps) {
  const { setHeroTitle } = useBlogHeroContext();
  const { data, isLoading, error } = useAuthorProfileInfoQuery(AuthorProfileInfoQuery, slug);

  if (isLoading) {
    setHeroTitle('Loading ...');
    return <div className="my-60">Loading ...</div>;
  }

  if (error) {
    setHeroTitle('Error something went wrong');
    return <div className="my-60">Error occurred </div>;
  }

  setHeroTitle(data.name);
  return (
    <div className="py-10 flex">
      <div className="min-w-[400px] min-h-[400px] m">
        <Image
          className="w-full h-full object-cover object-center"
          width={400}
          height={200}
          src={urlFor(data.image.asset._ref).url()}
          alt={`${data.slug.current} image`}
        />
      </div>
      <div className="ml-10">
        <div className="mb-4 mt-1.5">
          <span className="font-medium">Tech Stack: </span>
          <span className="px-2 py-1.5 bg-orange-main rounded-full text-white ml-2">{data.authorTag.title}</span>
        </div>
        <div className="mb-4 mt-1.5">
          <span className="font-medium">Is part of the: </span>
          {data.relatedTeams.map((team) => (
            <ClientSideRoute route={`/blog/team/${team.slug}`}>
              <span className="px-2 py-1.5 bg-orange-main rounded-full text-white ml-2">{team.name}</span>
            </ClientSideRoute>
          ))}
        </div>
        <PortableText value={data.bio} components={RichTextComponents} />
      </div>
    </div>
  );
}

export default AuthorItem;
