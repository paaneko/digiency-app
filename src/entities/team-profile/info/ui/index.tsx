'use client';

import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import RichTextComponents from '@shared/lib/RichTextComponents';
import { PortableText } from '@portabletext/react';
import { useBlogHeroContext } from '@widgets/blog-hero/model/useBlogHeroContext';
import useTeamProfileInfoQuery from '@entities/team-profile/info/api/useTeamProfileQuery';
import TeamProfileInfoQuery from '@entities/team-profile/info/model/query';

type TeamItemProps = {
  slug: string;
};

function TeamItem({ slug }: TeamItemProps) {
  const { setHeroTitle } = useBlogHeroContext();
  const { data, isLoading, error } = useTeamProfileInfoQuery(TeamProfileInfoQuery, slug);

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
        <div className="mb-4 mt-1.5 flex flex-wrap ">
          <div className="flex items-center">
            <span className="font-medium">Tech Stack: </span>
          </div>
          {data.members.map((author) => (
            <span className="px-2 py-1.5 bg-orange-main rounded-full text-white ml-2 mb-3">
              {author.authorTag.title}
            </span>
          ))}
        </div>
        <PortableText value={data.bio} components={RichTextComponents} />
      </div>
    </div>
  );
}

export default TeamItem;
