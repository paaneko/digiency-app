import { ClientSideRoute } from '@shared/lib/ClientSideRoute';
import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import { AuthorRelatedItemType } from '@shared/types';

type AuthorRelatedItemProps = {
  item: AuthorRelatedItemType;
};

function RelatedItem({ item }: AuthorRelatedItemProps) {
  return (
    <div className="mt-12 w-full xl:max-w-[520px] flex items-center justify-between">
      <div>
        <div>
          <span className="text-sm md:text-base md:font-medium cursor-pointer">{item.author.name}</span> in{' '}
          <span className="text-sm md:text-base md:font-medium text-orange-main">{item.categories.title}</span>
        </div>
        <ClientSideRoute route={`/blog/p/${item.slug}`}>
          <div className="w-[200px] md:w-full line-clamp-2 md:line-clamp-3 font-semibold md:text-xl mt-2">
            {item.title}
          </div>
        </ClientSideRoute>
        <div className="hidden md:display-webkit-box line-clamp-2 text-gray-pg pt-1">{item.description}</div>
        <div className="pt-2">
          <span className="text-sm md:text-base text-gray-pg">
            {new Date(item.createdAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <span className="px-2 hidden md:inline-block">·</span>
          <span className="py-1 px-2.5 text-sm bg-dark-white-bg rounded-full hidden md:inline-block">
            {item.author.tag}
          </span>
        </div>
      </div>
      <div className="max-w-[100px] h-[100px] md:min-w-[200px] md:h-[134px] ml-2 md:ml-5">
        <ClientSideRoute route={`/blog/p/${item.slug}`}>
          <Image
            className="w-full h-full cursor-pointer object-cover object-center"
            width={200}
            height={134}
            src={urlFor(item.mainImage).url()}
            alt={`${item.title} image`}
          />
        </ClientSideRoute>
      </div>
    </div>
  );
}

export default RelatedItem;
