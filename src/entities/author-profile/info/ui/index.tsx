'use client';

import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import RichTextComponents from '@shared/lib/RichTextComponents';
import { PortableText } from '@portabletext/react';
import { useBlogHeroContext } from '@widgets/blog-hero/model/useBlogHeroContext';
import { ClientSideRoute } from '@shared/lib/ClientSideRoute';
import { AuthorProfileInfoType } from '@entities/author-profile/info/model/types';

type AuthorItemProps = {
  data: AuthorProfileInfoType;
};

function AuthorItem({ data }: AuthorItemProps) {
  const { setHeroTitle } = useBlogHeroContext();

  setHeroTitle(data.name);
  return (
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
        <div className="hidden mb-4 mt-1.5 md:flex flex-wrap">
          <span className="font-medium">Tech Stack: </span>
          <span className="px-2 py-1.5 bg-orange-main rounded-full text-white ml-2">{data.authorTag.title}</span>
        </div>
        <div className="hidden mb-4 mt-1.5 md:flex flex-wrap">
          <span className="font-medium">Is part of the: </span>
          {data.relatedTeams.map((team) => (
            <ClientSideRoute route={`/blog/team/${team.slug}`}>
              <span className="px-2 py-1.5 bg-orange-main rounded-full text-white ml-2">{team.name}</span>
            </ClientSideRoute>
          ))}
        </div>
        <div className="mt-6 text-center md:text-left md:mt-0 ">
          <PortableText value={data.bio} components={RichTextComponents} />
        </div>
      </div>
    </div>
  );
}

export default AuthorItem;
