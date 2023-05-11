import { motion } from 'framer-motion';
import menuNavigationItemType from '@widgets/header/model/types';
import MenuNavigationItem from '@widgets/header/ui/MenuNavigationItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuConfig: menuNavigationItemType[] = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About Us',
    link: '/',
  },
  {
    title: 'Services',
    link: '/',
  },
  {
    title: 'Portfolio',
    link: '/',
  },
  {
    title: 'Blog',
    link: '/blog',
  },
  {
    title: 'Contact Us',
    link: '/',
  },
];

function MenuNavigation() {
  return (
    <motion.ul variants={variants} className="p-6 absolute top-[100px] left-[53px] m-0 p-0 w-[230px]">
      {menuConfig.map((item) => (
        <MenuNavigationItem menuItem={item} />
      ))}
    </motion.ul>
  );
}

export default MenuNavigation;
