import Link from 'next/link';
import menuNavigationItemType from '@widgets/header/model/types';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuNavigationItemProps {
  menuItem: menuNavigationItemType;
}

function MenuNavigationItem({ menuItem }: MenuNavigationItemProps) {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="m-0 p-0 text-white list-none mb-5 flex items-center justify-end cursor-pointer cursor-pointer"
    >
      <Link href={menuItem.link}>{menuItem.title}</Link>{' '}
    </motion.li>
  );
}

export default MenuNavigationItem;
