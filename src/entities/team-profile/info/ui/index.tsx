'use client';

import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import RichTextComponents from '@shared/lib/RichTextComponents';
import { PortableText } from '@portabletext/react';
import { useBlogHeroContext } from '@widgets/blog-hero/model/useBlogHeroContext';
import useTeamProfileInfoQuery from '@entities/team-profile/info/api/useTeamProfileQuery';
import TeamProfileInfoQuery from '@entities/team-profile/info/model/query';
import DeveloperList from '@entities/team-profile/our-developers/model/list';

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
    <div>
      <div className="py-10 flex flex-col md:flex-row">
        <div className="relative min-w-[270px] max-h-[270px] min-h-[270px] md:min-w-[350px] xl:min-w-[400px] md:min-h-[350px] md:max-h-[350px] xl:min-h-[400px] xl:max-h-[400px]">
          <Image
            className="object-cover object-center"
            fill
            src={urlFor(data.image.asset._ref).url()}
            alt={`${data.slug.current} image`}
          />
        </div>
        <div className="md:ml-10">
          <div className="hidden mb-4 mt-1.5 md:flex flex-wrap ">
            <div className="flex items-center">
              <span className="font-medium">Tech Stack: </span>
            </div>
            {data.members.map((author) => (
              <span className="px-2 py-1.5 bg-orange-main rounded-full text-white ml-2 mb-3">
                {author.authorTag.title}
              </span>
            ))}
          </div>
          <div className="mt-6 text-center md:text-left md:mt-0 ">
            <PortableText value={data.bio} components={RichTextComponents} />
          </div>
        </div>
      </div>
      <DeveloperList developerList={data.members} />
    </div>
  );
}

export default TeamItem;
