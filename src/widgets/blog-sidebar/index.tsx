'use client';

// import { LatestPostList } from '@entities/blog/side-bar/latest-post-list';
// import { CategoriesList } from '@entities/blog/side-bar/categories-list';
// import { TagList } from '@entities/blog/side-bar/tag-list';

import { SearchBox } from 'react-instantsearch-hooks-web';
import CategoryFilter from '@entities/blog/side-bar/categories-list';
import TagFilter from '@entities/blog/side-bar/tag-list';

export function BlogSideBar() {
  return (
    <div className="">
      <SearchBox />
      <div className="flex justify-between flex-col md:flex-row xl:flex-col ">
        <CategoryFilter attribute="categories.title" />
        <TagFilter attribute="tag.title" />
      </div>
    </div>
  );
}

export default BlogSideBar;
