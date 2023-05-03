export type AuthorRelatedItemType = {
  title: string;
  slug: string;
  mainImage: string;
  description: string;
  categories: {
    title: string;
  };
  author: {
    name: string;
    slug: string;
    tag: string;
  };
  createdAt: string;
};
