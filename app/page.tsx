import { HeroOne } from '@entities/hero';
import { portfolioProjectsConfig, servicesConfig } from '@shared/ui-config';
import OurServices from '@shared/ui/our-services';
import Image from 'next/image';
import { PortfolioProjectsConfigType } from '@shared/ui-types';
import { PortfolioProjects } from '@shared/ui/portfolio-projects';

export default function Home() {
  return (
    <main>
      <div>
        <section className="bg-dark-white-bg">
          <div className="container">
            <HeroOne />
          </div>
        </section>
        <section>
          <div className="container my-[120px]">
            <div className="text-orange-main flex items-center justify-center">
              <hr className="bg-orange-main w-8" />
              <div className="mx-2 font-normal">Our Services</div>
              <hr className="bg-orange-main w-8" />
            </div>
            <div className="font-semibold text-4xl mt-2 mb-6 text-center ">What We Do</div>
            <div className="flex flex-wrap justify-between">
              {servicesConfig.map((service) => (
                <OurServices
                  key={service.label}
                  img={service.img}
                  label={service.label}
                  titles={service.titles}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-dark-white-bg">
          <div className="container flex justify-between py-[120px]">
            <div className="max-w-[544px]">
              <div className="text-orange-main flex items-center ">
                <div className="mr-2 font-normal">About Us</div>
                <hr className="bg-orange-main w-8" />
              </div>
              <div className="font-semibold text-4xl mt-2 mb-6 leading-[58px] ">Grow Your Business With Our Agency</div>
              <div className="mb-6 text-gray-pg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis arcu in tincidunt sed imperdiet etiam
                fames. Tincidunt augue risus mattis eget sem habitant id ultrices augue. Sit rhoncus .
              </div>
              <div className="">
                <div className="flex my-[15px] space-x-3">
                  <Image width={20} height={20} src="checkbox-about-us.svg" alt="checkbox-about-us" />
                  <p>Innovative website design</p>
                </div>
                <div className="flex my-[15px] space-x-3">
                  <Image width={20} height={20} src="checkbox-about-us.svg" alt="checkbox-about-us" />
                  <p>UI/UX design with global trends</p>
                </div>
                <div className="flex my-[15px] space-x-3">
                  <Image width={20} height={20} src="checkbox-about-us.svg" alt="checkbox-about-us" />
                  <p>Web and email hosting service</p>
                </div>
              </div>
            </div>
            <Image className="inline-flex" width={620} height={387} src="about-us.svg" alt="about-us" />
          </div>
        </section>
        <section>
          <div className="mt-[120px]">
            <div className="container">
              <div className="text-orange-main flex items-center ">
                <div className="mr-2 font-normal mb-3">Portfolio</div>
                <hr className="bg-orange-main w-8" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="font-semibold text-[39px] leading-[58px] ">Our Recent Project</div>
                <div className="flex space-x-4 font-medium text-gray-pg">
                  <div className="cursor-pointer hover:text-orange-main duration-500">All</div>
                  <div className="cursor-pointer hover:text-orange-main duration-500">UX Design</div>
                  <div className="cursor-pointer hover:text-orange-main duration-500">Web Design</div>
                  <div className="cursor-pointer hover:text-orange-main duration-500">App Development</div>
                  <div className="cursor-pointer hover:text-orange-main duration-500">Game Design</div>
                  <div className="cursor-pointer hover:text-orange-main duration-500">Graphic Design</div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between">
                {portfolioProjectsConfig.map((portfolioProject: PortfolioProjectsConfigType) => (
                  <PortfolioProjects
                    key={portfolioProject.label}
                    img={portfolioProject.img}
                    label={portfolioProject.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* <section> */}
        {/*  <div className=""> */}
        {/*    <div className=""> */}
        {/*      <div className="text-orange-main flex items-center "> */}
        {/*        <hr className="bg-orange-main w-8" /> */}
        {/*        <div className="my-2 font-normal mb-3">Our Testimonial</div> */}
        {/*        <hr className="bg-orange-main w-8" /> */}
        {/*      </div> */}
        {/*      <div className="font-semibold text-[39px] leading-[58px] ">Our Recent Project</div> */}
        {/*    </div> */}
        {/*  </div> */}
        {/* </section> */}
      </div>
    </main>
  );
}
