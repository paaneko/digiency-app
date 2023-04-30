'use client';

// import usePreview from '@shared/lib/sanity.preview';
// import { FeedCardList } from '@entities/blog/feed/ui/FeedCardList';

type Props = {
  query: string;
};

export default function PreviewBlogCardList({ query }: Props) {
  // const previewBlogCards = usePreview(null, query);
  // return <FeedCardList blogCards={previewBlogCards} />;
  return <div>{query}</div>;
}
