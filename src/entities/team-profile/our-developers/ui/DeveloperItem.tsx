import { PortableText } from '@portabletext/react';
import RichTextComponents from '@shared/lib/RichTextComponents';
import { ClientSideRoute } from '@shared/lib/ClientSideRoute';
import { Author } from '@shared/ui-types';
import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';

type DeveloperItemProps = {
  developer: Author;
};

function DeveloperItem({ developer }: DeveloperItemProps) {
  return (
    <div className="flex p-5 bg-dark-white-bg mt-5">
      <div className="w-20 h-20">
        <div className="object-contain relative w-[75px] h-[75px] md:w-[100px] md:h-[100px]">
          <ClientSideRoute route={`/blog/author/${developer.slug.current}`}>
            <Image
              fill
              src={urlFor(developer.image.asset._ref).url()}
              alt={`${developer.name} profile image`}
              className="rounded-full"
            />
          </ClientSideRoute>
        </div>
      </div>
      <div className="ml-6 md:ml-12">
        <ClientSideRoute route={`/blog/author/${developer.slug.current}`}>
          <div className="md:mt-4 font-medium text-xl">{developer.name}</div>
        </ClientSideRoute>
        <div className="mt-3 text-orange-main">{developer.authorTag.title}</div>
        <div className="hidden md:block mt-2.5 text-gray-pg">
          <PortableText value={developer.bio} components={RichTextComponents} />
        </div>
      </div>
    </div>
  );
}

export default DeveloperItem;
