import Image from 'next/image';

export function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-col">
          <div className="flex justify-center md:justify-start mb-5 text-4xl font-semibold">
            <span className="text-orange-main">Digi</span>ency
          </div>
          <div className="flex justify-center md:justify-start w-full md:w-[230px] w-[300px] text-center md:text-left">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor facilisi quis risus egestas ipsum.
            </span>
          </div>
          <div className="flex justify-around md:justify-between mt-5">
            <div className="w-[60px] h-[60px] md:w-[50px] md:h-[50px] mt-2 rounded-full bg-white flex justify-center items-center">
              <Image width={10} height={20} src="facebook-icon.svg" alt="facebook-icon" />
            </div>
            <div className="w-[60px] h-[60px] md:w-[50px] md:h-[50px] mt-2 rounded-full bg-white flex justify-center items-center">
              <Image width={20} height={20} src="instagram-icon.svg" alt="facebook-icon" />
            </div>
            <div className="w-[60px] h-[60px] md:w-[50px] md:h-[50px] mt-2 rounded-full bg-white flex justify-center items-center">
              <Image width={20} height={20} src="telegram-icon.svg" alt="facebook-icon" />
            </div>
            <div className="w-[60px] h-[60px] md:w-[50px] md:h-[50px] mt-2 rounded-full bg-white flex justify-center items-center">
              <Image width={20} height={16} src="twitter-icon.svg" alt="facebook-icon" />
            </div>
          </div>
        </div>
        <div className="flex-col">
          <div className="mb-5 text-2xl font-semibold text-orange-main text-center md:text-left mt-10 md:mt-0">
            Location
          </div>
          <div className="text-xl font-medium text-center md:text-left">3517 W. Gray St. Utica</div>
          <div className="text-xl font-medium text-center md:text-left">Pennsylvania 57867</div>
        </div>
        <div className="flex-col">
          <div className="mb-5 text-2xl font-semibold text-orange-main text-center md:text-left mt-4 md:mt-0">
            Call Us
          </div>
          <div className="text-xl font-medium text-center md:text-left">(252) 555-0126</div>
          <div className="text-xl font-medium text-center md:text-left">info@youremai.com</div>
        </div>
        <div className="hidden xl:flex flex-col">
          <span className="mb-3 text-2xl font-semibold text-orange-main text-center xl:text-left">Follow Us</span>
          <div className="flex justify-between md:w-[120px] xl:w-[230px]">
            <div className="w-[50px] h-[50px] mt-2 rounded-full bg-white flex justify-center items-center">
              <Image width={10} height={20} src="facebook-icon.svg" alt="facebook-icon" />
            </div>
            <div className="w-[50px] h-[50px] mt-2 rounded-full bg-white flex justify-center items-center">
              <Image width={20} height={20} src="instagram-icon.svg" alt="facebook-icon" />
            </div>
            <div className="w-[50px] h-[50px] mt-2 rounded-full bg-white flex justify-center items-center">
              <Image width={20} height={20} src="telegram-icon.svg" alt="facebook-icon" />
            </div>
            <div className="w-[50px] h-[50px] mt-2 rounded-full bg-white flex justify-center items-center">
              <Image width={20} height={16} src="twitter-icon.svg" alt="facebook-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
