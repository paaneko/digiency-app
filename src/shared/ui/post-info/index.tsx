import Image from 'next/image';
import { ClientSideRoute } from '@shared/lib/ClientSideRoute';
import { Slug } from '@shared/ui-types';

type PostInfoProps = {
  createdAt: string;
  authorName: string | undefined;
  authorSlug: Slug | undefined;
  commentCount: number;
};

export function PostInfo({ createdAt, authorName, authorSlug, commentCount }: PostInfoProps) {
  return (
    <div className="flex text-[10px] text-gray-pg justify-between py-10">
      <div className="flex">
        <Image width={24} height={24} src="/timer.svg" alt="timer-icon" />
        <div className="ml-3.5 text-xl font-medium">
          {new Date(createdAt).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </div>
      </div>
      <ClientSideRoute route={`/${authorSlug?.current}`}>
        <div className="flex">
          <Image width={24} height={24} src="/person.svg" alt="person-icon" />
          <div className="ml-3.5 text-xl font-medium">{authorName}</div>
        </div>
      </ClientSideRoute>
      <div className="flex">
        <Image width={24} height={24} src="/message-circle.svg" alt="message-circle-icon" />
        <div className="ml-3.5 text-xl font-medium">{commentCount} Comment</div>
      </div>
    </div>
  );
}

export default PostInfo;
