import AuthorItem from '@entities/author-profile/info/ui';
import AuthorRelatedPosts from '@entities/author-profile/related-posts/model/list';
import AuthorRelatedProjects from '@entities/author-profile/related-projects/model/list';
import { groq } from 'next-sanity';
import { BlogPost } from '@shared/ui-types';
import sanityClient from '@shared/lib/sanity.client';
// import { AuthorRelatedItemType } from '@shared/types';
import authorRelatedPostsQuery from '@entities/author-profile/related-posts/model/query';
import { AuthorRelatedItemType } from '@shared/types';
import authorRelatedProjectsQuery from '@entities/author-profile/related-projects/model/query';
import { AuthorProfileInfoType } from '@entities/author-profile/info/model/types';
import authorProfileInfoQuery from '@entities/author-profile/info/model/query';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;

export async function generateStaticParams() {
  const isrQuery = groq`
  *[_type == "author"] {
    slug
  }
  `;
  const slugs: BlogPost[] = await sanityClient.fetch(isrQuery);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function AuthorPage({ params: { slug } }: Props) {
  const relatedPosts = await sanityClient.fetch<AuthorRelatedItemType[]>(authorRelatedPostsQuery, { slug });
  const relatedProjects = await sanityClient.fetch<AuthorRelatedItemType[]>(authorRelatedProjectsQuery, { slug });
  const authorProfile = await sanityClient.fetch<AuthorProfileInfoType>(authorProfileInfoQuery, { slug });

  return (
    <div className="mb-28">
      <AuthorItem data={authorProfile} />
      <div className="flex flex-col xl:flex-row md:justify-between mt-10">
        <AuthorRelatedPosts data={relatedPosts} />
        <div className="border-orange-main border-r-2" />
        <AuthorRelatedProjects data={relatedProjects} />
      </div>
    </div>
  );
}

export default AuthorPage;
