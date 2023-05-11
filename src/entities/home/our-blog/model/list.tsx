'use client';

import { OurBlogItem } from '@entities/home/our-blog/ui';
import useOurBlogListQuery from '@entities/home/our-blog/api/useOurBlogListQuery';
import ourBlogListQuery from '@entities/home/our-blog/model/query';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function OurBlogList() {
  const [currentWidth, setCurrentWidth] = useState(0);
  const { data, isLoading, error } = useOurBlogListQuery(ourBlogListQuery);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setCurrentWidth(ref.current.scrollWidth - ref.current.offsetWidth);
    }
  }, [data]);

  if (isLoading) {
    return <div className="my-60">Loading ...</div>;
  }

  if (error) {
    return <div className="my-60">Error occurred </div>;
  }

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
