import { HeroOne } from '@entities/home/hero';
import { contactInfoConfig, servicesConfig } from '@shared/ui-config';
import { OurServices } from '@entities/home/ui/our-services';
import Image from 'next/image';
import { ContactCards } from '@entities/home/contact-cards';
import { ContactUsForm } from '@features/contact-us/ui';
import ReviewList from '@entities/home/our-testimonial/model/list';
import OurBlogList from '@entities/home/our-blog/model/list';
import OurMemberList from '@entities/home/our-members/model/list';
import OurCapabilitiesBar from '@entities/home/our-capabilities-bar/ui';

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
          <div className="container my-[60px] md:my-[120px]">
            <div className="text-orange-main flex items-center justify-center">
              <hr className="bg-orange-main w-8" />
              <div className="mx-2 font-normal text-sm md:text-base">Our Services</div>
              <hr className="bg-orange-main w-8" />
            </div>
            <div className="font-semibold text-2xl md:text-3xl xl:text-4xl mt-2 mb-6 text-center ">What We Do</div>
            <div className="flex flex-wrap justify-center md:justify-between">
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
          <div className="container flex flex-col-reverse md:flex-row justify-between items-center py-[60px] md:py-[120px]">
            <div className="md:max-w-[344px] xl:max-w-[544px]">
              <div className="text-orange-main flex justify-center md:justify-start items-center mt-5 md:m-0">
                <div className=" mr-2 font-normal text-sm md:text-base">About Us</div>
                <hr className="hidden md:block bg-orange-main w-8" />
              </div>
              <div className="text-center md:text-left font-semibold text-2xl md:text-3xl xl:text-4xl mt-2 mb-6 xl:leading-[58px] ">
                Grow Your Business With <span className="text-orange-main">Our Agency</span>
              </div>
              <div className="text-center md:text-left mb-6 text-gray-pg">
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
            <div className="relative w-[300px] h-[200px] md:w-[335px] md:h-[225px] xl:w-[620px] xl:h-[387px]">
              <Image className="inline-flex object-cover object-left" fill src="about-us.svg" alt="about-us" />
            </div>
          </div>
        </section>
        <section>
          <div className="my-[60px] md:my-[120px]">
            <div className="container">
              <div className="text-orange-main flex justify-center items-center">
                <hr className="bg-orange-main w-8" />
                <div className="mx-2 font-normal text-center text-sm md:text-base">Our Members</div>
                <hr className="bg-orange-main w-8" />
              </div>
              <div className="flex-col items-center justify-center mb-3 mt-2">
                <div className="text-2xl text-center font-semibold md:text-3xl xl:text-4xl xl:leading-[58px]">
                  We Have
                </div>
                <div className="text-2xl text-center font-semibold md:text-3xl xl:text-4xl xl:leading-[58px]">
                  <span className="text-orange-main">Some Awesome</span> People
                </div>
              </div>
              <OurMemberList />
            </div>
          </div>
        </section>
        <section className="bg-dark-white-bg">
          <div className="py-[60px] md:py-[120px]">
            <div className="container flex-row justify-center">
              <div className="flex justify-center">
                <div className="">
                  <div className="flex justify-center">
                    <div className="text-orange-main flex items-center">
                      <hr className="bg-orange-main w-8" />
                      <div className="mx-2 font-normal text-center text-sm md:text-base">Our Testimonial</div>
                      <hr className="bg-orange-main w-8" />
                    </div>
                  </div>
                  <div className="mb-3 mt-2 text-2xl text-center font-semibold md:text-3xl xl:text-4xl xl:leading-[58px]">
                    What Our <span className="text-orange-main">Clients</span> Saying
                  </div>
                </div>
              </div>
              <ReviewList />
            </div>
          </div>
        </section>
        <section>
          <div className="container my-[60px] md:my-[120px]">
            <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
              <div className="md:max-w-[544px] md:mr-4 ">
                <div className="m-5 md:m-0 flex justify-center md:justify-start text-orange-main flex items-center ">
                  <div className="mr-2 font-normal text-sm md:text-base">Our Capabilities</div>
                  <hr className="hidden md:block bg-orange-main w-8" />
                </div>
                <div className="flex justify-center md:inline-flex">
                  <span className="m-0 w-[280px] md:w-[390px] xl:w-[478px] text-center md:text-left md:mt-4 md:mb-2 text-2xl font-semibold md:text-3xl xl:text-4xl xl:leading-[58px]">
                    Forward Thinking Team Of <span className="text-orange-main">Designers</span> &{' '}
                    <span className="text-orange-main">Developers</span>
                  </span>
                </div>
                <div className="mt-5 my-5 md:m-0 flex justify-center md:block">
                  <div className="text-center inline-block mb-0 md:mb-6 text-gray-pg w-[290px] md:w-[340px] xl:w-[544px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut nisi, amet rhoncus volutpat
                    neque. Ipsum in aliquam eget vitae purus felis eget massa felis. Eu mattis in malesuada facilisi
                    proin vel.
                  </div>
                </div>
                <div className="hidden xl:flex justify-between">
                  <div className="shadow-div rounded-lg pt-[11px] w-[125px] h-[108px]">
                    <div className="text-center font-semibold text-orange-main text-2xl mb-[5px]">80%</div>
                    <div className="text-center font-light text-xs">Softwer Development</div>
                  </div>
                  <div className="shadow-div rounded-lg pt-[11px] w-[125px] h-[108px]">
                    <div className="text-center font-semibold text-orange-main text-2xl mb-[5px]">90%</div>
                    <div className="text-center font-light text-xs">Graphic Design</div>
                  </div>
                  <div className="shadow-div rounded-lg pt-[11px] w-[125px] h-[108px]">
                    <div className="text-center font-semibold text-orange-main text-2xl mb-[5px]">85%</div>
                    <div className="text-center font-light text-xs">Game Design</div>
                  </div>
                  <div className="shadow-div rounded-lg pt-[11px] w-[125px] h-[108px]">
                    <div className="text-center font-semibold text-orange-main text-2xl mb-[5px]">100%</div>
                    <div className="text-center font-light text-xs">
                      Web <br /> Development
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[300px] h-[200px] md:w-[335px] md:h-[225px] xl:w-[620px] xl:h-[387px]">
                <Image
                  className="inline-flex object-cover object-left"
                  fill
                  src="our-capabilities.svg"
                  alt="our-capabilities"
                />
              </div>
            </div>
            <div className="flex flex-wrap xl:hidden justify-around container p-0 md:px-12 md:px-20">
              <div className="mt-6 mx-3 md:mx-0 shadow-div rounded-lg pt-[11px] w-[125px] h-[108px]">
                <div className="text-center font-semibold text-orange-main text-2xl mb-[5px]">80%</div>
                <div className="text-center font-light text-xs">Softwer Development</div>
              </div>
              <div className="mt-6 mx-3 md:mx-0 shadow-div rounded-lg pt-[11px] w-[125px] h-[108px]">
                <div className="text-center font-semibold text-orange-main text-2xl mb-[5px]">90%</div>
                <div className="text-center font-light text-xs">Graphic Design</div>
              </div>
              <div className="mt-6 mx-3 md:mx-0 shadow-div rounded-lg pt-[11px] w-[125px] h-[108px]">
                <div className="text-center font-semibold text-orange-main text-2xl mb-[5px]">85%</div>
                <div className="text-center font-light text-xs">Game Design</div>
              </div>
              <div className="mt-6 mx-3 md:mx-0 shadow-div rounded-lg pt-[11px] w-[125px] h-[108px]">
                <div className="text-center font-semibold text-orange-main text-2xl mb-[5px]">100%</div>
                <div className="text-center font-light text-xs">
                  Web <br /> Development
                </div>
              </div>
            </div>
            <OurCapabilitiesBar />
          </div>
        </section>
        <section className="bg-dark-white-bg">
          <div className="py-[60px] md:py-[120px]">
            <div className="container flex-row justify-center">
              <div className="flex justify-center">
                <div className="">
                  <div className="flex justify-center">
                    <div className="text-orange-main flex items-center">
                      <hr className="bg-orange-main w-8" />
                      <div className="mx-2 font-normal text-center text-sm md:text-base">Our Blog</div>
                      <hr className="bg-orange-main w-8" />
                    </div>
                  </div>
                  <div className="text-2xl text-center md:mt-4 md:mb-2 font-semibold md:text-3xl xl:text-4xl xl:leading-[58px]">
                    Every Singel Update From Here
                  </div>
                </div>
              </div>
              <OurBlogList />
            </div>
          </div>
        </section>
        <section className="">
          <div className="py-[120px]">
            <div className="container flex-row justify-center">
              <div className="">
                <div className="flex justify-center">
                  <div className="text-orange-main flex items-center">
                    <hr className="bg-orange-main w-8" />
                    <div className="mx-2 font-normal text-center">Contact Us</div>
                    <hr className="bg-orange-main w-8" />
                  </div>
                </div>
                <div className="flex-col">
                  <div className="font-semibold text-[39px] leading-[58px] text-center">
                    Feel <span className="text-orange-main">Free</span>
                  </div>
                  <div className="font-semibold text-[39px] leading-[58px] text-center">
                    <span className="text-orange-main">to Contact</span> With Us
                  </div>
                </div>
                <ContactCards
                  mailUs={contactInfoConfig.mailUs}
                  callUs={contactInfoConfig.callUs}
                  visitUs={contactInfoConfig.visitUs}
                />
                <div className="container mt-[60px]">
                  <ContactUsForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
