import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import Link from 'next/link';
import { PortableTextReactComponents } from '@portabletext/react';

const RichTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto ">
          <Image className="object-contain" src={urlFor(value).url()} alt="Blog Post Image" fill />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-lg ml-5 mt-2 list-decimal">{children}</ol>,
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-2xl md:text-4xl xl:text-5xl text-orange-main py-3 md:py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl md:text-3xl xl:text-4xl text-orange-main py-3 md:py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-3xl xl:text-4xl text-orange-main py-3 md:py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-base md:text-2xl xl:text-3xl text-orange-main py-3 md:py-10 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-orange-main border-l-4 pl-5 py-5 my-5">{children}</blockquote>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <Link
          className="underline decoration-orange-main text-main-bg hover:decoration-gray-pg"
          href={value.href}
          rel={rel}
        >
          {children}
        </Link>
      );
    },
  },
};

export default RichTextComponents;
