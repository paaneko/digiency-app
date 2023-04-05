import { BlogHero } from '@widgets/blog-hero';
import { BlogSideBar } from '@widgets/blog-sidebar';
import { BlogCardList } from '@entities/blog/blog-card-list';
import { previewData } from 'next/headers';
import PreviewSuspense from '@shared/lib/PreviewSuspense';
import { groq } from 'next-sanity';
import PreviewBlogCardList from '@entities/blog/blog-card-list/PreviewBlogCardList';
import * as console from 'console';
import client from '../../../src/shared/lib/sanity.client';

const blogListQuery = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

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
        <main>
          <div className="">
            <section className="bg-dark-white-bg">
              <div className="pt-[220px] pb-[100px]">
                <BlogHero />
              </div>
            </section>
            <section>
              <div className="container">
                <div className="flex mt-[120px]">
                  <div className="flex-1 bg-white">
                    <PreviewBlogCardList query={blogListQuery} />
                  </div>
                  <div className="w-[370px]">
                    <BlogSideBar />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </PreviewSuspense>
    );
  }

  const blogData = await client.fetch(blogListQuery);

  console.log('Start Console log');
  console.log(blogData);
  return (
    <main>
      <div className="">
        <section className="bg-dark-white-bg">
          <div className="pt-[220px] pb-[100px]">
            <BlogHero />
          </div>
        </section>
        <section>
          <div className="container">
            <div className="flex mt-[120px]">
              <div className="flex-1 bg-white">
                <BlogCardList blogCards={blogData} />
              </div>
              <div className="w-[370px]">
                <BlogSideBar />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
