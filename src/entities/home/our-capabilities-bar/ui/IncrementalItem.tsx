import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface IncrementalItemProps {
  num: number;
}

function IncrementalItem({ num }: IncrementalItemProps) {
  const count = useMotionValue(0);

  const rounded = useTransform(count, Math.round);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animate(count, num, { duration: 5 });
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [count, num]);
  return (
    <motion.div ref={ref} className="font-semibold text-2xl md:text-3xl xl:text-5xl text-center">
      {rounded}
    </motion.div>
  );
}

export default IncrementalItem;
