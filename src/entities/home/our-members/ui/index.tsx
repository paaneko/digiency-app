import OurMemberItemType from '@entities/home/our-members/model/types';
import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import { ClientSideRoute } from '@shared/lib/ClientSideRoute';

function OurMemberItem({ name, image, authorTag, slug }: OurMemberItemType) {
  return (
    <div className="shadow-div xl:pb-3 md:flex md:min-w-[325px] xl:min-w-[270px] xl:block">
      <ClientSideRoute route={`/blog/author/${slug.current}`}>
        <div className="relative md:w-[125px] md:h-[125px] xl:w-[270px] xl:h-[250px]">
          <Image
            draggable={false}
            className="object-cover object-center"
            fill
            src={urlFor(image.asset._ref).url()}
            alt={`photo of ${name}`}
          />
        </div>
      </ClientSideRoute>
      <div className="md:flex-col md:flex-grow md:justify-between">
        <ClientSideRoute route={`/blog/author/${slug.current}`}>
          <div className="mt-6 text-center font-semibold text-xl hover:text-orange-main">{name}</div>
        </ClientSideRoute>
        <div className="mt-3 text-center text-gray-pg ">{authorTag}</div>
      </div>
    </div>
  );
}

export default OurMemberItem;
