'use client';

import sanityClient from '@shared/lib/sanity.client';

export default async function deletePostsWithRef(postId: string) {
  try {
    // Fetch the "comments" documents related to the specified "post" document
    const comments = await sanityClient.fetch(`*[_type == 'comments' && post._ref == '${postId}']`);
    //
    // // Delete the fetched "comments" documents one by one
    await Promise.all(comments.map((comment: any) => sanityClient.delete(comment._id)));

    // Delete the specified "post" document
    await sanityClient.delete(postId);

    console.log('Successfully deleted the post and its comments.');
  } catch (error) {
    console.error(error);
  }
}
