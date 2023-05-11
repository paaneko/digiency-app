import Image from 'next/image';
import { ClientSideRoute } from '@shared/lib/ClientSideRoute';
import { Slug } from '@shared/ui-types';

type PostInfoProps = {
  createdAt: string;
  authorName: string | undefined;
  authorSlug: Slug | undefined;
};

export function PostInfo({ createdAt, authorName, authorSlug }: PostInfoProps) {
  return (
    <div className="flex text-[10px] text-gray-pg justify-around py-5 md:py-10">
      <div className="flex">
        <Image width={24} height={24} src="/timer.svg" alt="timer-icon" />
        <div className="ml-3.5 text-base md:text-xl font-medium">
          {new Date(createdAt).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </div>
      </div>
      <div className="hidden md:flex">
        <ClientSideRoute route={`/${authorSlug?.current}`}>
          <div className="flex">
            <Image width={24} height={24} src="/person.svg" alt="person-icon" />
            <div className="ml-3.5 text-xl font-medium">{authorName}</div>
          </div>
        </ClientSideRoute>
      </div>
    </div>
  );
}

export default PostInfo;
