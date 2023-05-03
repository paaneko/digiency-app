import { ClientSideRoute } from '@shared/lib/ClientSideRoute';
import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import { AuthorRelatedItemType } from '@shared/types';

type AuthorRelatedItemProps = {
  item: AuthorRelatedItemType;
};

function AuthorRelatedItem({ item }: AuthorRelatedItemProps) {
  return (
    <div className="mt-12 max-w-[520px] flex items-center justify-between">
      <div>
        <div>
          <span className="font-medium">{item.author.name}</span>
          in <span className="font-medium text-orange-main ">{item.categories.title}</span>
        </div>
        <ClientSideRoute route={`/blog/p/${item.slug}`}>
          <div className="font-semibold mt-2 line-clamp-2">{item.title}</div>
        </ClientSideRoute>
        <div className="line-clamp-2 text-sm text-gray-pg pt-1">{item.description}</div>
        <div className="pt-2">
          <span className="text-xs text-gray-pg">
            {new Date(item.createdAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <span className="px-2">·</span>
          <span className="py-1 px-2.5 text-sm bg-dark-white-bg rounded-full">{item.author.tag}</span>
        </div>
      </div>
      <div className="min-w-[200px] h-[134px] ml-5">
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

export default AuthorRelatedItem;
