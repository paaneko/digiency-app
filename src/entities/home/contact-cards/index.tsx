import { HomeContactInfoType } from '@shared/ui-types';
import Image from 'next/image';

export function ContactCards({ mailUs, callUs, visitUs }: HomeContactInfoType) {
  return (
    <div className="container flex flex-col items-center md:flex-row justify-between mt-6 md:mt-14">
      <div className="mt-4 xl:mt-0 xl:pt-4 pl-4 pb-6 shadow-div w-[270px] h-[190px] md:w-[210px] md:h-[170px] xl:w-[370px] xl:h-[270px]">
        <div className="flex items-center mt-[18px]">
          <div className="flex items-center justify-center w-[75px] h-[75px] md:w-[45px] md:h-[45px] xl:w-[75px] xl:h-[75px] rounded-full bg-orange-main">
            <Image width={31} height={31} src={mailUs.icon} alt={mailUs.label} />
          </div>
          <div className="flex flex-col ml-4">
            <div className="font-medium text-2xl md:text-xl xl:text-2xl text-orange-main">{mailUs.slogan}</div>
            <div className="font-semibold text-3xl md:text-2xl xl:text-3xl">{mailUs.label}</div>
          </div>
        </div>
        <div className="flex-col text-gray-pg font-medium md:text-base xl:text-xl mt-4 md:mt-[12px] xl:mt-[32px]">
          <div className="mb-2.5">{mailUs.first_email}</div>
          <div className="">{mailUs.second_email}</div>
        </div>
      </div>
      <div className="mt-4 xl:mt-0 xl:pt-4 pl-4 pb-6 shadow-div w-[270px] h-[190px] md:w-[210px] md:h-[170px] xl:w-[370px] xl:h-[270px]">
        <div className="flex items-center mt-[18px]">
          <div className="flex items-center justify-center w-[75px] h-[75px] md:w-[45px] md:h-[45px] xl:w-[75px] xl:h-[75px] rounded-full bg-orange-main">
            <Image width={30} height={24} src={callUs.icon} alt={callUs.label} />
          </div>
          <div className="flex flex-col ml-4">
            <div className="font-medium text-2xl md:text-xl xl:text-2xl text-orange-main">{callUs.slogan}</div>
            <div className="font-semibold text-3xl md:text-2xl xl:text-3xl">{callUs.label}</div>
          </div>
        </div>
        <div className="flex-col text-gray-pg font-medium md:text-base xl:text-xl mt-4 md:mt-[12px] xl:mt-[32px]">
          <div className="mb-2.5">{callUs.first_phone}</div>
          <div className="">{callUs.second_phone}</div>
        </div>
      </div>
      <div className="mt-4 xl:mt-0 xl:pt-4 pl-4 pb-6 shadow-div w-[270px] h-[190px] md:w-[210px] md:h-[170px] xl:w-[370px] xl:h-[270px]">
        <div className="flex items-center mt-[18px]">
          <div className="flex items-center justify-center w-[75px] h-[75px] md:w-[45px] md:h-[45px] xl:w-[75px] xl:h-[75px] rounded-full bg-orange-main">
            <Image width={27} height={33} src={visitUs.icon} alt={visitUs.label} />
          </div>
          <div className="flex flex-col ml-4">
            <div className="font-medium text-2xl md:text-xl xl:text-2xl text-orange-main">{visitUs.slogan}</div>
            <div className="font-semibold text-3xl md:text-2xl xl:text-3xl">{visitUs.label}</div>
          </div>
        </div>
        <div className="flex-col text-gray-pg font-medium md:text-base xl:text-xl mt-4 md:mt-[12px] xl:mt-[32px]">
          <div className="">{visitUs.address}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactCards;
