import { Image } from '@shared/ui-types';

export type ReviewType = {
  name: string;
  body: string;
  specialization: string;
  image: Image;
};

export type ReviewListQueryType = {
  ourTestimonial: ReviewType[];
};
