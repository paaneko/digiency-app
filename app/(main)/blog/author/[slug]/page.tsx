import AuthorItem from '@entities/author-profile/info/ui';
import AuthorRelatedPosts from '@entities/author-profile/related-posts/model/list';
import AuthorRelatedProjects from '@entities/author-profile/related-projects/model/list';

type Props = {
  params: {
    slug: string;
  };
};

async function AuthorPage({ params: { slug } }: Props) {
  return (
    <div className="mb-28">
      <AuthorItem slug={slug} />
      <div className="flex flex-col xl:flex-row md:justify-between mt-10">
        <AuthorRelatedPosts slug={slug} />
        <div className="border-orange-main border-r-2" />
        <AuthorRelatedProjects slug={slug} />
      </div>
    </div>
  );
}

export default AuthorPage;
