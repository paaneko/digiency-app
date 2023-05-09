import PostCommentList from '@features/blog-comment/ui/PostCommentList';
import PostCommentForm from '@features/blog-comment/ui/PostCommentForm';
import { Comment } from '@shared/ui-types';

type PostCommentProps = {
  postId: string;
  comments: Comment[];
};

function PostComment({ comments, postId }: PostCommentProps) {
  return (
    <div className="my-32">
      <div className="border border-orange-main mt-5" />
      <PostCommentForm postId={postId} />
      <div className="border border-orange-main mt-10" />
      <PostCommentList comments={comments} />
    </div>
  );
}

export default PostComment;
