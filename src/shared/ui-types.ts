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
