import { previewData } from 'next/headers';
import PreviewSuspense from '@shared/lib/PreviewSuspense';
import PreviewBlogCardList from '@entities/blog/feed/ui/PreviewBlogCardList';
import blogListQuery from '@entities/blog/feed/model/query';
import { FeedCardList } from '@entities/blog/feed/ui/FeedCardList';
import { BlogSideBar } from '@widgets/blog-sidebar';
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
        <div className="flex mt-[120px]">
          <div className="flex-1 bg-white">
            <PreviewBlogCardList query={blogListQuery} />
          </div>
          <div className="w-[370px]">
            <BlogSideBar />
          </div>
        </div>
      </PreviewSuspense>
    );
  }

  const blogData = await client.fetch(blogListQuery);

  return (
    <div className="flex mt-[120px]">
      <div className="flex-1 bg-white">
        <FeedCardList blogCards={blogData} />
      </div>
      <div className="w-[370px]">
        <BlogSideBar />
      </div>
    </div>
  );
}
