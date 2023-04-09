import { DefaultDocumentNodeResolver } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';
// import { SanityDocument } from 'sanity';

// Customise this function to show the correct URL based on the current document
// function getPreviewUrl(doc: SanityDocument) {
//   // @ts-ignore
//   return doc?.slug?.current ? `${window.location.host}/${doc.slug.current}` : `${window.location.host}`;
// }

// Import this into the deskTool() plugin
// eslint-disable-next-line import/prefer-default-export
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  // Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `${process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'}/api/preview`,
            // url: (doc: SanityDocument) => getPreviewUrl(doc),
          })
          .title('Preview'),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

export default defaultDocumentNode;
