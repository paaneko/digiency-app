import { Image, Slug } from '@shared/ui-types';

type OurBlogItem = {
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

export default OurBlogItem;
