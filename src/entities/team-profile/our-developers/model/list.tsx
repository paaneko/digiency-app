import DeveloperItem from '@entities/team-profile/our-developers/ui/DeveloperItem';
import { Author } from '@shared/ui-types';

type DeveloperListProps = {
  developerList: Author[];
};

function DeveloperList({ developerList }: DeveloperListProps) {
  return (
    <div>
      <div className="text-center text-2xl font-semibold mb-16 mt-5">Team members</div>
      {developerList.map((item) => (
        <DeveloperItem developer={item} />
      ))}
    </div>
  );
}

export default DeveloperList;
