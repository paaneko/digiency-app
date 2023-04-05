import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from '@shared/lib/sanity.client';

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}
const usePreview = definePreview({ projectId, dataset, onPublicAccessOnly });

export default usePreview;
