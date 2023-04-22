import Image from 'next/image';

type PostInfoProps = {
  createdAt: string;
  authorName: string | undefined;
  commentCount: number;
};

export function PostInfo({ createdAt, authorName, commentCount }: PostInfoProps) {
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
      <div className="flex">
        <Image width={24} height={24} src="/person.svg" alt="person-icon" />
        <div className="ml-3.5 text-xl font-medium">{authorName}</div>
      </div>
      <div className="flex">
        <Image width={24} height={24} src="/message-circle.svg" alt="message-circle-icon" />
        <div className="ml-3.5 text-xl font-medium">{commentCount} Comment</div>
      </div>
    </div>
  );
}

export default PostInfo;
