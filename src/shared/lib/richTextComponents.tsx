import Image from 'next/image';
import urlFor from '@shared/lib/urlFor';
import Link from 'next/link';

const richTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto ">
          <Image className="object-contain" src={urlFor(value).url()} alt="Blog Post Image" fill />
        </div>
      );
    },
    list: {
      bullet: ({ children }: any) => <ul>{children}</ul>,
      number: ({ children }: any) => <ol>{children}</ol>,
    },
    block: {
      h1: ({ children }: any) => <h1>{children}</h1>,
      h2: ({ children }: any) => <h2>{children}</h2>,
      h3: ({ children }: any) => <h3>{children}</h3>,
      h4: ({ children }: any) => <h4>{children}</h4>,
      blockquote: ({ children }: any) => <blockquote>{children}</blockquote>,
    },
    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
        return (
          <Link href={value.href} rel={rel}>
            {children}
          </Link>
        );
      },
    },
  },
};

export default richTextComponents;
