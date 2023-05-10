import { Block, Image, Slug } from '@shared/ui-types';

type OurMemberItemType = {
  _id?: string;
  name: string;
  authorTag: string;
  slug: Slug;
  image: Image;
  bio: Block[];
};

export default OurMemberItemType;
