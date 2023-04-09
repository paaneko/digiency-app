import { PostItem } from '@entities/blog/post/ui';
import client from '@shared/lib/sanity.client';
import query from '@entities/blog/post/model/query';
import { BlogPost } from '@shared/ui-types';

type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  const post: BlogPost = await client.fetch(query, { slug });

  return <PostItem post={post} />;
}

export default Post;
