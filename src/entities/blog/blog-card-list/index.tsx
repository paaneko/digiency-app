import { BlogCardItem } from '@entities/blog/blog-card-item';
import { blogCardList } from '@shared/ui-config';

export function BlogCardList() {
  return (
    <div>
      {blogCardList.map((blog) => (
        <BlogCardItem
          img={blog.img}
          label={blog.label}
          time={blog.time}
          author={blog.author}
          comments_count={blog.comments_count}
          title={blog.title}
        />
      ))}
    </div>
  );
}

export default BlogCardList;
