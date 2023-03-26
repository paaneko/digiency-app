import Image from 'next/image';

export function Footer() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex-col">
          <div className="flex mb-5 text-4xl font-semibold">
            <span className="text-orange-main">Digi</span>ency
          </div>
          <div className="max-w-[300px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor facilisi quis risus egestas ipsum.
          </div>
        </div>
        <div className="flex-col">
          <div className="mb-5 text-2xl font-semibold text-orange-main">Location</div>
          <div className="text-xl font-medium">3517 W. Gray St. Utica</div>
          <div className="text-xl font-medium">Pennsylvania 57867</div>
        </div>
        <div className="flex-col">
          <div className="mb-5 text-2xl font-semibold text-orange-main">Call Us</div>
          <div className="text-xl font-medium">(252) 555-0126</div>
          <div className="text-xl font-medium">info@youremai.com</div>
        </div>
        <div className="flex-col">
          <div className="mb-5 text-2xl font-semibold text-orange-main">Follow Us</div>
          <div className="flex justify-between w-[230px]">
            <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
              <Image width={10} height={20} src="facebook-icon.svg" alt="facebook-icon" />
            </div>
            <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
              <Image width={20} height={20} src="instagram-icon.svg" alt="facebook-icon" />
            </div>
            <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
              <Image width={20} height={20} src="telegram-icon.svg" alt="facebook-icon" />
            </div>
            <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
              <Image width={20} height={16} src="twitter-icon.svg" alt="facebook-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
