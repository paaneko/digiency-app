'use client';

// TODO create onscroll effects (change color to white)
import { useCycle, motion } from 'framer-motion';
import { useRef } from 'react';
import useDimensions from '@widgets/header/model/useDimensions';
import MenuNavigation from '@widgets/header/model/MenuNavigation';
import MenuToggle from '@widgets/header/ui/MenuToggle';
import Link from 'next/link';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 200px 56px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className="flex font-medium justify-between items-center py-8 bg-dark-white-bg">
      <div className="text-2xl md:text-3xl xl:text-4xl flex py-1">
        <p className="text-orange-main">Digi</p>ency
      </div>
      <div className="hidden md:flex xl:text-xl md:space-x-4 xl:space-x-6">
        <Link href="/">
          <div className="hover:text-orange-main cursor-pointer duration-500">Home</div>
        </Link>
        <div className="hover:text-orange-main cursor-pointer duration-500">About Us</div>
        <div className="hover:text-orange-main cursor-pointer duration-500">Services</div>
        <div className="hover:text-orange-main cursor-pointer duration-500">Portfolio</div>
        <Link href="/blog">
          <div className="hover:text-orange-main cursor-pointer duration-500">Blog</div>
        </Link>
        <div className="hover:text-orange-main cursor-pointer duration-500">Contact Us</div>
      </div>
      <div className="md:hidden">
        <motion.nav
          className="absolute top-0 right-0 bottom-0 w-[300px]"
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
        >
          <motion.div className="fixed top-0 right-0  bottom-0 w-[250px] bg-orange-main" variants={sidebar} />
          <MenuNavigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
    </div>
  );
}

export default Header;
