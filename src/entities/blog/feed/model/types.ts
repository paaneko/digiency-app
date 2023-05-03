import { Slug } from '@shared/ui-types';

type FeedCardItemType = {
  slug: string;
  title: string;
  description: string;
  mainImage: string;
  tag: {
    title: string;
  };
  categories: {
    title: string;
  };
  author: {
    name: string;
    slug: Slug;
  };
  type: string;
  createdAt: string;
  objectID: string;
  nbHits: number;
  _highlightResult: {
    author: {
      name: {
        value: string;
      };
    };
    description: {
      value: string;
    };
    title: {
      value: string;
    };
  };
};

export default FeedCardItemType;
