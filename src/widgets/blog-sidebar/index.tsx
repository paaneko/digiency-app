import SearchBlog from '@features/blog/search';
import { LatestPostList } from '@entities/blog/side-bar/latest-post-list';
import { CategoriesList } from '@entities/blog/side-bar/categories-list';
import { TagList } from '@entities/blog/side-bar/tag-list';

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
