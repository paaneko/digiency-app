import TeamItem from '@entities/team-profile/info/ui';
import TeamRelatedProjects from '@entities/team-profile/related-project/model/list';

type Props = {
  params: {
    slug: string;
  };
};

async function AuthorPage({ params: { slug } }: Props) {
  return (
    <div className="mb-28">
      <TeamItem slug={slug} />
      <div className="mt-10 flex justify-center">
        <TeamRelatedProjects slug={slug} />
      </div>
    </div>
  );
}

export default AuthorPage;
