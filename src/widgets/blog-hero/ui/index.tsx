// TODO create logic of breadscrumbs

'use client';

import { useBlogHeroContext } from '@widgets/blog-hero/model/useBlogHeroContext';

export function BlogHero() {
  const { heroTitle } = useBlogHeroContext();
  return (
    <div className="text-center container">
      <div className="font-bold text-5xl mb-5">{heroTitle}</div>
    </div>
  );
}

export default BlogHero;
