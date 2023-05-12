import TeamItem from '@entities/team-profile/info/ui';
import TeamRelatedProjects from '@entities/team-profile/related-project/model/list';
import { groq } from 'next-sanity';
import { BlogPost } from '@shared/ui-types';
import TeamProfileInfoType from '@entities/team-profile/info/model/types';
import sanityClient from '@shared/lib/sanity.client';
import teamProfileInfoQuery from '@entities/team-profile/info/model/query';
import { AuthorRelatedItemType } from '@shared/types';
import teamRelatedProjectsQuery from '@entities/team-profile/related-project/model/query';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;

export async function generateStaticParams() {
  const isrQuery = groq`
  *[_type == "team"] {
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
  const teamProfile = await sanityClient.fetch<TeamProfileInfoType>(teamProfileInfoQuery, { slug });
  const teamRelated = await sanityClient.fetch<AuthorRelatedItemType[]>(teamRelatedProjectsQuery, { slug });
  return (
    <div className="mb-28">
      <TeamItem data={teamProfile} />
      <div className="mt-10 flex justify-center">
        <TeamRelatedProjects data={teamRelated} />
      </div>
    </div>
  );
}

export default AuthorPage;
