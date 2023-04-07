'use client';

import usePreview from '@shared/lib/sanity.preview';
import { BlogCardList } from '@entities/blog/feed/ui/FeedCardList';

type Props = {
  query: string;
};

export default function PreviewBlogCardList({ query }: Props) {
  const previewBlogCards = usePreview(null, query);
  return <BlogCardList blogCards={previewBlogCards} />;
}
