'use client';

// import { LatestPostList } from '@entities/blog/side-bar/latest-post-list';
// import { CategoriesList } from '@entities/blog/side-bar/categories-list';
// import { TagList } from '@entities/blog/side-bar/tag-list';

import { SearchBox } from 'react-instantsearch-hooks-web';
import CategoryFilter from '@entities/blog/side-bar/categories-list';
import LatestPostList from '@entities/blog/side-bar/latest-post-list/model';

export function BlogSideBar() {
  return (
    <div>
      <div className="">
        <SearchBox />
        <LatestPostList />
        <CategoryFilter attribute="categories.title" />
        <CategoryFilter attribute="tag.title" />
      </div>
    </div>
  );
}

export default BlogSideBar;
