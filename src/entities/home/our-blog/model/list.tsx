'use client';

import { OurBlogItem } from '@entities/home/our-blog/ui';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import OurBlogItemType from '@entities/home/our-blog/model/types';

interface OurBlogListProps {
  data: OurBlogItemType[];
}

function OurBlogList({ data }: OurBlogListProps) {
  const [currentWidth, setCurrentWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setCurrentWidth(ref.current.scrollWidth - ref.current.offsetWidth);
    }
  }, [data]);

  return (
    <div ref={ref} className="cursor-grab overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -currentWidth }}
        whileTap={{ cursor: 'grabbing' }}
        className="flex justify-between mt-[60px]"
      >
        {data.map((card) => (
          <motion.div>
            <OurBlogItem
              mainImage={card.mainImage}
              description={card.description}
              title={card.title}
              author={card.author}
              createdAt={card.createdAt}
              slug={card.slug}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default OurBlogList;
