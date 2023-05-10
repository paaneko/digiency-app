import Image from 'next/image';

export function HeroOne() {
  return (
    <div className="flex flex-col-reverse md:flex-row xl:flex-row justify-between items-center pb-[100px] pt-[160px]">
      <div className="md:max-w-[330px] md:max-w-[330px] xl:max-w-[500px]">
        <h1 className="text-center md:text-left font-semibold text-3xl md:text-4xl md:leading-[48px] xl:text-5xl xl:font-bold xl:leading-[73px] mb-[18px] pr-18 pt-[38px]">
          We Are The Best <span className="text-orange-main">Digital Agency</span> For Business
        </h1>
        <p className="text-center md:text-left font-normal text-gray-pg leading-[24px] mb-[40px] mr-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in digni ssim euismod purus donec mus
          vulputate habitant iaculis.
        </p>
        <div className="flex justify-center md:block">
          <button className="bg-orange-main rounded py-[10px] px-[22px] text-white" type="button">
            Get Start Now
          </button>
        </div>
      </div>
      <div className="relative w-[300px] h-[200px] md:w-[335px] md:h-[225px] xl:w-[640px] xl:h-[430px]">
        <Image className="object-cover object-left" fill src="hero-one.svg" alt="Hero-one" />
      </div>
    </div>
  );
}

export default HeroOne;
