import { PostItem } from '@entities/blog/post/ui';
import client from '@shared/lib/sanity.client';
import query from '@entities/blog/post/model/query';
import { BlogPost } from '@shared/ui-types';
import PostComment from '@features/blog-comment';
import { groq } from 'next-sanity';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;

export async function generateStaticParams() {
  const isrQuery = groq`
  *[_type == "post" || _type == "projects"] {
    slug
  }
  `;
  const slugs: BlogPost[] = await client.fetch(isrQuery);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

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
