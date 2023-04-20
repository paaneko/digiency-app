import { PostItem } from '@entities/blog/post/ui';
import client from '@shared/lib/sanity.client';
import query from '@entities/blog/post/model/query';
import { BlogPost } from '@shared/ui-types';
import PostComment from '@features/blog-comment';

type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  const post: BlogPost = await client.fetch(query, { slug });
  // TODO FIXME normal loading
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PostItem post={post} />
      {post && <PostComment postId={post._id} comments={post.comments} />}
    </>
  );
}

export default Post;
