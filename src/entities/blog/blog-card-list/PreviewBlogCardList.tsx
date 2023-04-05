'use client';

import usePreview from '@shared/lib/sanity.preview';
import { BlogCardList } from '@entities/blog/blog-card-list/index';

type Props = {
  query: string;
};

export default function PreviewBlogCardList({ query }: Props) {
  const previewBlogCards = usePreview(null, query);
  return <BlogCardList blogCards={previewBlogCards} />;
}
