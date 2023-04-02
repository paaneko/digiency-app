import SearchBlog from '@features/blog/search';
import { LatestPostList } from '@entities/blog/latest-post-list';
import { CategoriesList } from '@entities/blog/categories-list';
import { TagList } from '@entities/blog/tag-list';

export function BlogSideBar() {
  return (
    <div>
      <div className="">
        <SearchBlog />
        <LatestPostList />
        <CategoriesList />
        <TagList />
      </div>
    </div>
  );
}

export default BlogSideBar;
