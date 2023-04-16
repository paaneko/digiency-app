'use client';

import { BlogPost } from '@shared/ui-types';
import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import { PostInfo } from '@shared/ui/post-info';
import { PortableText } from '@portabletext/react';
import RichTextComponents from '@shared/lib/RichTextComponents';
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
      <div className="relative w-full h-[670px] mt-10 mx-auto ">
        <Image className="object-contain" fill src={urlFor(post.mainImage).url()} alt={post.title} />
      </div>
      <div className="px-24">
        <PostInfo createdAt={post._createdAt} authorName={post.author.name} commentCount={9} />
      </div>
      <div className="mx-8 text-gray-pg">
        <PortableText value={post.body} components={RichTextComponents} />
      </div>
      <div className="flex p-5 bg-dark-white-bg mt-20">
        <div className="w-20 h-20">
          <div className="object-contain relative w-[100px] h-[100px]">
            <Image fill src={urlFor(post.author.image).url()} alt={post.author.name} className="rounded-full" />
          </div>
        </div>
        <div className="ml-12 ">
          <div className="mt-4 font-medium text-xl">{post.author.name}</div>
          <div className="mt-3 text-orange-main">Graphic Designer</div>
          <div className="mt-2.5 text-gray-pg">
            <PortableText value={post.author.bio} components={RichTextComponents} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostItem;