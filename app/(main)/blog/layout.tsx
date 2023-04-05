import { BlogHero } from '@widgets/blog-hero/ui';
import { BlogHeroContextProvider } from '@widgets/blog-hero/model/useBlogHeroContext';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <BlogHeroContextProvider>
        <div className="">
          <section className="bg-dark-white-bg">
            <div className="pt-[220px] pb-[100px]">
              <BlogHero />
            </div>
          </section>
          <section>
            <div className="container"> {children}</div>
          </section>
        </div>
      </BlogHeroContextProvider>
    </main>
  );
}
