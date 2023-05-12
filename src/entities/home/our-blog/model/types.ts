import { Image, Slug } from '@shared/ui-types';

type OurBlogItemType = {
  mainImage: Image;
  description: string;
  title: string;
  author: {
    name: string;
    slug: Slug;
  };
  createdAt: string;
  slug: Slug;
};

export default OurBlogItemType;
