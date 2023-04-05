import imageUrlBuilder from '@sanity/image-url';
import myConfiguredSanityClient from './sanity.client';

const builder = imageUrlBuilder(myConfiguredSanityClient);

export default function urlFor(source: any) {
  return builder.image(source);
}
