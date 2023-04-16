import PostCommentItem from '@features/blog-comment/ui/PostCommentItem';
import { Comment } from '@shared/ui-types';

type PostCommentListProps = {
  comments: Comment[];
};

function PostCommentList({ comments }: PostCommentListProps) {
  return (
    <div className="mt-5">
      {comments.map((comment) => (
        <PostCommentItem commentItem={comment} />
      ))}
    </div>
  );
}

export default PostCommentList;
