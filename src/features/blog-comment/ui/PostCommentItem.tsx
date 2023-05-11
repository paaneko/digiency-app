'use client';

import Image from 'next/image';
import { Comment } from '@shared/ui-types';

type PostCommentItemProps = {
  commentItem: Comment;
};

function PostCommentItem({ commentItem }: PostCommentItemProps) {
  return (
    <div className="flex py-5">
      <div className="w-[80px] h-[80px] flex-shrink-0 mr-5">
        <div className="object-contain relative w-full h-full">
          <Image fill className="rounded-md" src="/comment_image.png" alt="latest-post-avatar" />
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <div className="font-semibold text-xl md:text-2xl text-orange-main">{commentItem.name}</div>
          <div className="hidden md:block">
            {new Date(commentItem._createdAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            })}
          </div>
        </div>
        <div className="font-medium text-gray-pg mt-1 md:mt-4">{commentItem.body}</div>
      </div>
    </div>
  );
}
export default PostCommentItem;
