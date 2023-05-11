'use client';

import { BlogPost } from '@shared/ui-types';
import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import { PostInfo } from '@shared/ui/post-info';
import { PortableText } from '@portabletext/react';
import RichTextComponents from '@shared/lib/RichTextComponents';
import { useBlogHeroContext } from '@widgets/blog-hero/model/useBlogHeroContext';
import { useEffect } from 'react';
import { ClientSideRoute } from '@shared/lib/ClientSideRoute';

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
      <div className="relative w-full h-[200px] md:h-[400px] xl:h-[600px] mt-10 mx-auto ">
        <Image className="object-cover object-center" fill src={urlFor(post.mainImage).url()} alt={post.title} />
      </div>
      <div className="md:px-24">
        <PostInfo
          createdAt={post._createdAt}
          authorName={post.author?.name ?? post.team?.name}
          authorSlug={post.author?.slug}
        />
      </div>
      <div className="md:mx-8 text-gray-pg">
        <PortableText value={post.body} components={RichTextComponents} />
      </div>
      <div className="flex flex-col md:flex-row justify-center p-5 bg-dark-white-bg mt-20">
        <div className="flex justify-center md:justify-start">
          <div className="object-contain relative w-[100px] h-[100px]">
            <ClientSideRoute
              route={`/blog/${post.author?.name ? 'author' : 'team'}/${
                post.author?.slug.current ?? post.team?.slug.current
              }`}
            >
              <Image
                fill
                src={urlFor(post.author?.image ?? post.team?.image).url()}
                alt={post.author ? post.author.name : post.team?.name || ''}
                className="rounded-full"
              />
            </ClientSideRoute>
          </div>
        </div>
        <div className="md:ml-12 ">
          <ClientSideRoute
            route={`/blog/${post.author?.name ? 'author' : 'team'}/${
              post.author?.slug.current ?? post.team?.slug.current
            }`}
          >
            <div className="text-center md:text-left mt-4 font-medium text-xl">
              {post.author?.name ?? post.team?.name}
            </div>
          </ClientSideRoute>
          <div className="text-center md:text-left mt-3 text-orange-main">
            {post.author?.authorTag.title ?? post.team?.tag.title}
          </div>
          <div className="mt-2.5 text-gray-pg">
            <PortableText
              value={post.author ? post.author.bio : post.team?.bio || []}
              components={RichTextComponents}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostItem;
