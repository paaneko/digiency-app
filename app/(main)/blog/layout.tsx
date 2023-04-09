import { BlogSideBar } from '@widgets/blog-sidebar';
import { BlogHero } from '@widgets/blog-hero/ui';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
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
              <div className="flex-1 bg-white">{children}</div>
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
