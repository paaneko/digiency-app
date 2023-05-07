import { Author } from '@shared/ui-types';

interface Team {
  slug: string;
  name: string;
}
export interface AuthorProfileInfoType extends Author {
  relatedTeams: Team[];
}
