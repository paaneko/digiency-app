'use client';

import { BlogPost } from '@shared/ui-types';
import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import { PostInfo } from '@shared/ui/post-info';
import { PortableText } from '@portabletext/react';
import richTextComponents from '@shared/lib/richTextComponents';
import { useBlogHeroContext } from '@widgets/blog-hero/model/useBlogHeroContext';
import { useEffect } from 'react';

type Props = {
  post: BlogPost;
};

export function PostItem({ post }: Props) {
  const { setHeroTitle } = useBlogHeroContext();
  useEffect(() => {
    setHeroTitle(post.title);
  }, [post.title, setHeroTitle]);

  return (
    <section>
      <div className="">
        <Image width={770} height={400} src={urlFor(post.mainImage).url()} alt={post.title} />
      </div>
      <div className="pl-6 pr-14">
        <PostInfo createdAt={post._createdAt} authorName={post.author.name} commentCount={9} />
      </div>
      <div className="ml-3 mr-6 text-gray-pg">
        {/* TODO FIXME */}
        {/* @ts-ignore */}
        <PortableText value={post.body} components={richTextComponents} />
      </div>
    </section>
  );
}

export default PostItem;
