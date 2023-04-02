import { BlogHero } from '@widgets/blog-hero';
import { BlogSideBar } from '@widgets/blog-sidebar';
import { BlogCardList } from '@entities/blog/blog-card-list';

export default function Blog() {
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
                <BlogCardList />
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
