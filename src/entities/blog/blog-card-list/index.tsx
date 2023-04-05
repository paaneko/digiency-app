import { BlogCardItem } from '@entities/blog/blog-card-item';
import { BlogPost } from '@shared/ui-types';

type Props = {
  blogCards: BlogPost[];
};

export function BlogCardList({ blogCards }: Props) {
  return (
    <div className="">
      {blogCards.map((blogPost) => (
        <BlogCardItem key={blogPost._id} post={blogPost} />
      ))}
    </div>
  );
}

export default BlogCardList;
