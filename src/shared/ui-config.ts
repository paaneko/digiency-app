import {
  HomeBlogCardPreviewType,
  HomeContactInfoType,
  HomePortfolioProjectsType,
  HomeServicesType,
} from '@shared/ui-types';

export const servicesConfig: HomeServicesType[] = [
  {
    img: 'graphic-designservices-icons.svg',
    label: 'Graphic Design',
    titles: 'Mobile App, Website',
    description:
      'Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.',
  },
  {
    img: 'mobile-developmentservices-icons.svg',
    label: 'App Development',
    titles: 'Mobile App, Website',
    description:
      'Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.',
  },
  {
    img: 'game-developmentservices-icons.svg',
    label: 'Game Design',
    titles: 'Mobile App, Website',
    description:
      'Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.',
  },
  {
    img: 'computerservices-icons.svg',
    label: 'Web Design',
    titles: 'Mobile App, Website',
    description:
      'Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.',
  },
  {
    img: 'promotionservices-icons.svg',
    label: 'Digital Marketing',
    titles: 'Mobile App, Website',
    description:
      'Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.',
  },
  {
    img: 'ux-interfaceservices-icons.svg',
    label: 'UX Design',
    titles: 'Mobile App, Website',
    description:
      'Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.',
  },
];

export const portfolioProjectsConfig: HomePortfolioProjectsType[] = [
  {
    label: 'project-1',
    img: '/project-1.png',
  },
  {
    label: 'project-3',
    img: '/project-2.png',
  },
  {
    label: 'project-3',
    img: '/project-3.png',
  },
  {
    label: 'project-4',
    img: '/project-4.png',
  },
  {
    label: 'project-5',
    img: '/project-5.png',
  },
  {
    label: 'project-6',
    img: '/project-6.png',
  },
  {
    label: 'project-7',
    img: '/project-7.png',
  },
  {
    label: 'project-8',
    img: '/project-8.png',
  },
  {
    label: 'project-9',
    img: '/project-9.png',
  },
];

export const blogCardPreviewConfig: HomeBlogCardPreviewType[] = [
  {
    img: '/demo-blog-card-preview-1.png',
    label: '35 Stellar Graphic Design Blogs to Keep YouEducated and Inspired',
    time: 'January 25, 2021',
    author: 'Cristofer Westervelt',
    comments_count: 10,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.',
  },
  {
    img: '/demo-blog-card-preview-2.png',
    label: 'Ridiculously powerful 2021 iPad Pro may drop this month',
    time: 'January 25, 2021',
    author: 'Cristofer Westervelt',
    comments_count: 10,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.',
  },
  {
    img: '/demo-blog-card-preview-3.png',
    label: 'Memphis Design: the defining look of the 1980s',
    time: 'January 25, 2021',
    author: 'Cristofer Westervelt',
    comments_count: 10,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.',
  },
];

export const contactInfoConfig: HomeContactInfoType = {
  mailUs: {
    icon: 'contact-mail.svg',
    slogan: 'Drop a line',
    label: 'Mail Us',
    first_email: 'Support87@gmial.com',
    second_email: 'ijkuiu874@gmial.com',
  },
  callUs: {
    icon: 'contact-map-pin.svg',
    slogan: '24/7 Service',
    label: 'Call Us',
    first_phone: '+880 265 98745',
    second_phone: '+895 855 85589',
  },
  visitUs: {
    icon: 'contact-phone-call.svg',
    slogan: 'Location',
    label: 'Visit Us',
    address: '158 ralegih sit, houston, yk 5896,uk',
  },
};
