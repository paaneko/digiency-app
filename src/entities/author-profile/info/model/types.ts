import { Author, Base } from '@shared/ui-types';

interface Team {
  slug: string;
  name: string;
}
export interface AuthorProfileInfoType extends Base, Author {
  relatedTeams: Team[];
}
