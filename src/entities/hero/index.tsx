import Image from 'next/image';

export function HeroOne() {
  return (
    <div className="flex justify-between py-[100px] ">
      <div className="max-w-[660px]">
        <h1 className="font-bold text-[48.83px] leading-[73px] mb-[18px] pt-[38px]">
          Choose What Matters To Your Business & Your Customers.
        </h1>
        <p className="font-normal leading-[24px] mb-[40px] mr-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in digni ssim euismod purus donec mus
          vulputate habitant iaculis. Com odo enim ornare turpis tempus enim, nibh nulla. Rhoncus sed.
        </p>
        <button className="bg-orange-main rounded py-[10px] px-[22px] text-white" type="button">
          Get Start Now
        </button>
      </div>
      <div className="">
        <Image width={550} height={450} src="hero-one.svg" alt="Hero-one" />
      </div>
    </div>
  );
}

export default HeroOne;
