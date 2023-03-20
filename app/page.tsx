import { HeroOne } from '@entities/hero';
import { portfolioProjectsConfig, servicesConfig } from '@shared/ui-config';
import { OurServices } from '@entities/home-ui/our-services';
import Image from 'next/image';
import { PortfolioProjectsConfigType } from '@shared/ui-types';
import { PortfolioProjects } from '@entities/home-ui/portfolio-projects';
import { Rewiew } from '@entities/home-ui/our-testimonial/rewiew';

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
          <div className="my-[120px]">
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
        <section className="bg-dark-white-bg">
          <div className="py-[120px]">
            <div className="container flex-row justify-center">
              <div className="flex justify-center">
                <div className="">
                  <div className="flex justify-center">
                    <div className="text-orange-main flex items-center">
                      <hr className="bg-orange-main w-8" />
                      <div className="mx-2 font-normal text-center">Our Testimonial</div>
                      <hr className="bg-orange-main w-8" />
                    </div>
                  </div>
                  <div className="font-semibold text-[39px] leading-[58px] ">What Our Client Saying</div>
                </div>
              </div>
              <div className="flex justify-between mt-[60px]">
                <Rewiew />
                <Rewiew />
                <Rewiew />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container flex justify-between py-[120px]">
            <div className="max-w-[544px] mr-4">
              <div className="text-orange-main flex items-center ">
                <div className="mr-2 font-normal">Our Capabilities</div>
                <hr className="bg-orange-main w-8" />
              </div>
              <div className="font-semibold text-4xl mt-2 mb-6 leading-[58px] ">
                Forward Thinking Team Of Designers & Developers
              </div>
              <div className="mb-6 text-gray-pg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut nisi, amet rhoncus volutpat neque.
                Ipsum in aliquam eget vitae purus felis eget massa felis. Eu mattis in malesuada facilisi proin vel.
              </div>
              <div className="flex justify-between">
                <div className="shadow-lg rounded-lg pt-[11px] w-[125px] h-[108px]">
                  <div className="text-center font-semibold text-orange-main text-2xl mb-[5px]">80%</div>
                  <div className="text-center font-light text-xs">Softwer Development</div>
                </div>
                <div className="shadow-lg rounded-lg pt-[11px] w-[125px] h-[108px]">
                  <div className="text-center font-semibold text-orange-main text-2xl mb-[5px]">90%</div>
                  <div className="text-center font-light text-xs">Graphic Design</div>
                </div>
                <div className="shadow-lg rounded-lg pt-[11px] w-[125px] h-[108px]">
                  <div className="text-center font-semibold text-orange-main text-2xl mb-[5px]">85%</div>
                  <div className="text-center font-light text-xs">Game Design</div>
                </div>
                <div className="shadow-lg rounded-lg pt-[11px] w-[125px] h-[108px]">
                  <div className="text-center font-semibold text-orange-main text-2xl mb-[5px]">100%</div>
                  <div className="text-center font-light text-xs">
                    Web <br /> Development
                  </div>
                </div>
              </div>
            </div>
            <Image className="inline-flex" width={620} height={387} src="our-capabilities.svg" alt="about-us" />
          </div>
          <div className="container text-white bg-orange-main rounded-lg py-[70px] mb-[120px]">
            <div className="flex divide-x-[3px] divide-slate-700 ">
              <div className="pl-[47px] pr-[65px]">
                <div className="flex justify-center mb-2.5">
                  <Image width={50} height={50} src="our-cap-man.svg" alt="our-cap-man" />
                </div>
                <div className="font-semibold text-5xl text-center mb-1 mx-8">120</div>
                <div className="text-xl font-medium text-center">Top Experts</div>
              </div>
              <div className="px-[65px]">
                <div className="flex justify-center mb-2.5">
                  <Image width={50} height={50} src="our-cap-target.svg" alt="our-cap-target" />
                </div>
                <div className="font-semibold text-5xl text-center mb-1 mx-8">500</div>
                <div className="text-xl font-medium text-center">Strategies</div>
              </div>
              <div className="px-[65px]">
                <div className="flex justify-center mb-2.5">
                  <Image width={50} height={50} src="our-cap-analysis.svg" alt="our-cap-analysis" />
                </div>
                <div className="font-semibold text-5xl text-center mb-1 mx-8">347</div>
                <div className="text-xl font-medium text-center">Great Results</div>
              </div>
              <div className="pl-[65px] pr-[48px]">
                <div className="flex justify-center mb-2.5">
                  <Image width={50} height={50} src="our-cap-data-analytics.svg" alt="our-cap-data-analysis" />
                </div>
                <div className="font-semibold text-5xl text-center mb-1 mx-8">120</div>
                <div className="text-xl font-medium text-center">Hight Rankings</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
