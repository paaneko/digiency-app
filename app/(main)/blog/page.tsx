import { previewData } from 'next/headers';
import PreviewSuspense from '@shared/lib/PreviewSuspense';
import PreviewBlogCardList from '@entities/blog/feed/ui/PreviewBlogCardList';
import blogListQuery from '@entities/blog/feed/model/query';
import { FeedCardList } from '@entities/blog/feed/ui/FeedCardList';
import client from '../../../src/shared/lib/sanity.client';

export default async function Blog() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-orange-main py-[500px]">Loading Preview Data</p>
          </div>
        }
      >
        <PreviewBlogCardList query={blogListQuery} />
      </PreviewSuspense>
    );
  }

  const blogData = await client.fetch(blogListQuery);

  return (
    <>
      {/* <div className="py-96">{title}</div> */}
      <FeedCardList blogCards={blogData} />
    </>
  );
}
