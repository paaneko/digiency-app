'use client';

import ReviewItem from '@entities/home/our-testimonial/ui';
import { useState } from 'react';
import { wrap } from 'popmotion';
import { AnimatePresence, motion } from 'framer-motion';
import { ReviewType } from '@entities/home/our-testimonial/model/types';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 700 : -700,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 700 : -700,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface ReviewListProps {
  data: ReviewType[];
}

function ReviewList({ data }: ReviewListProps) {
  const [[slide, direction], setPage] = useState([0, 0]);

  const itemIndex = wrap(0, data.length, slide);

  const paginate = (newDirection: number) => {
    setPage([slide + newDirection, newDirection]);
  };

  return (
    <>
      <div className="hidden xl:flex justify-between mt-[60px]">
        {data.map((item) => (
          <ReviewItem review={item} />
        ))}
      </div>
      <div className="block xl:hidden relative flex justify-center items-center mt-12 h-[270px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          {data
            .filter((_, i) => i === itemIndex)
            .map((item) => (
              <motion.div
                className="absolute"
                key={slide}
                custom={direction}
                initial="enter"
                variants={variants}
                animate="center"
                exit="exit"
                transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              >
                <ReviewItem review={item} />
              </motion.div>
            ))}
        </AnimatePresence>
        <motion.div
          whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
          whileTap={{ scale: 0.9 }}
          className="hidden md:block absolute top-[calc(50%-24px)] left-0 cursor-pointer"
          onClick={() => paginate(1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 fill-orange-main"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
          whileTap={{ scale: 0.9 }}
          className="hidden md:block absolute top-[calc(50%-24px)] right-0 cursor-pointer"
          onClick={() => paginate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 fill-orange-main"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </motion.div>
      </div>
    </>
  );
}

export default ReviewList;
