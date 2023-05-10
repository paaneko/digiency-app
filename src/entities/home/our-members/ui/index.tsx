import OurMemberItemType from '@entities/home/our-members/model/types';
import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import { ClientSideRoute } from '@shared/lib/ClientSideRoute';
import { OrangeButton } from '@shared/ui/buttons/orange-button';
import RichTextComponents from '@shared/lib/RichTextComponents';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

function OurMemberItem({ name, image, authorTag, slug, bio }: OurMemberItemType) {
  return (
    <div className="shadow-div pb-4 md:min-w-[270px] xl:min-w-[370px] xl:block">
      <div className="relative w-[270px] h-[250px] md:w-[270px] md:h-[150px] xl:w-[370px] xl:h-[250px]">
        <Link className="block md:hidden" href={`/blog/author/${slug.current}`}>
          <Image
            draggable={false}
            className="object-cover object-center"
            fill
            src={urlFor(image.asset._ref).url()}
            alt={`photo of ${name}`}
          />
        </Link>
        <div className="hidden md:block">
          <Image
            draggable={false}
            className="object-cover object-center"
            fill
            src={urlFor(image.asset._ref).url()}
            alt={`photo of ${name}`}
          />
        </div>
      </div>
      <div className="md:flex-col md:flex-grow md:justify-between">
        <div className="mt-6 text-center font-semibold text-2xl">{name}</div>
        <div className="mt-1 text-center text-orange-main">{authorTag}</div>
        <div className="hidden md:flex justify-center">
          <div className="mt-3 text-center text-gray-pg md:w-[240px] xl:w-[340px] line-clamp-5">
            <PortableText components={RichTextComponents} value={bio} />
          </div>
        </div>
        <div className="hidden md:flex justify-center mt-4">
          <ClientSideRoute route={`/blog/author/${slug.current}`}>
            <div className="w-[150px]">
              <OrangeButton label="Profile" />
            </div>
          </ClientSideRoute>
        </div>
      </div>
    </div>
  );
}

export default OurMemberItem;
