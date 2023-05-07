export type HomeServicesType = {
  img: string;
  label: string;
  titles: string;
  description: string;
};

export type HomePortfolioProjectsType = {
  label: string;
  img: string;
};

export type BlogCardType = {
  img: string;
  label: string;
  time: string;
  author: string;
  comments_count: number;
  title: string;
};

export type HomeContactInfoType = {
  mailUs: {
    icon: string;
    slogan: string;
    label: string;
    first_email: string;
    second_email: string;
  };
  callUs: {
    icon: string;
    slogan: string;
    label: string;
    first_phone: string;
    second_phone: string;
  };
  visitUs: {
    icon: string;
    slogan: string;
    label: string;
    address: string;
  };
};

export type LatestPostCardType = {
  img: string;
  refLink: string;
  label: string;
};

export type CategoryItemType = {
  label: string;
  countCategories: number;
};

export type TagItemType = {
  label: string;
};
export type Base = {
  _createdAt: string;
  _id: string;
  _ref: string;
  _type: string;
  _updatedAt: string;
};

export interface BlogPost extends Base {
  author?: Author | null;
  team?: Team | null;
  body: Block[];
  categories: Category;
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  comments: Comment[];
}

export interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
  authorTag: Tag;
}

export interface Team extends Base {
  bio: Block[];
  image: Image;
  name: string;
  members: Author[];
  slug: Slug;
  tag: Tag;
}

interface Image {
  _type: 'image';
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}

export interface Slug {
  _type: 'slug';
  current: string;
}

interface Block {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface Tag extends Base {
  description: string;
  title: string;
}

export interface MainImage {
  _type: 'string';
  current: string;
}

export interface Title {
  _type: 'string';
  current: string;
}

export interface Comment {
  approved: boolean;
  name: string;
  email: string;
  body: string;
  post: {
    _ref: string;
    _type: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
}
