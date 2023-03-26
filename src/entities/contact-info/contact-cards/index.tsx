import { HomeContactInfoType } from '@shared/ui-types';
import Image from 'next/image';

export function ContactCards({ mailUs, callUs, visitUs }: HomeContactInfoType) {
  return (
    <div className="flex justify-between mt-14">
      <div className="pt-4 pl-4 pb-6 shadow-lg w-[370px] h-[270px]">
        <div className="flex mt-[18px]">
          <div className="flex items-center justify-center w-[75px] h-[75px] rounded-full bg-orange-main">
            <Image width={31} height={31} src={mailUs.icon} alt={mailUs.label} />
          </div>
          <div className="flex-col  ml-4">
            <div className="font-medium text-[24px] text-orange-main">{mailUs.slogan}</div>
            <div className="font-semibold text-[31px]">{mailUs.label}</div>
          </div>
        </div>
        <div className="flex-col text-gray-pg font-medium text-[20px] mt-[32px]">
          <div className="mb-2.5">{mailUs.first_email}</div>
          <div className="">{mailUs.second_email}</div>
        </div>
      </div>
      <div className="pt-4 pl-4 pb-6 shadow-lg w-[370px] h-[270px]">
        <div className="flex mt-[18px]">
          <div className="flex items-center justify-center w-[75px] h-[75px] rounded-full bg-orange-main">
            <Image width={30} height={24} src={callUs.icon} alt={callUs.label} />
          </div>
          <div className="flex-col ml-4">
            <div className="font-medium text-[24px] text-orange-main">{callUs.slogan}</div>
            <div className="font-semibold text-[31px]">{callUs.label}</div>
          </div>
        </div>
        <div className="flex-col text-gray-pg font-medium text-[20px] mt-[32px]">
          <div className="mb-2.5">
            {callUs.first_phone}
            <span className="text-orange-main ml-4 ">(Toll free)</span>
          </div>
          <div className="">{callUs.second_phone}</div>
        </div>
      </div>
      <div className="pt-4 pl-4 pb-6 shadow-lg w-[370px] h-[270px]">
        <div className="flex mt-[18px]">
          <div className="flex items-center justify-center w-[75px] h-[75px] rounded-full bg-orange-main">
            <Image width={27} height={33} src={visitUs.icon} alt={visitUs.label} />
          </div>
          <div className="flex-col  ml-4">
            <div className="font-medium text-[24px] text-orange-main">{visitUs.slogan}</div>
            <div className="font-semibold text-[31px]">{visitUs.label}</div>
          </div>
        </div>
        <div className="flex-col text-gray-pg font-medium text-[20px] mt-[32px] w-[230px]">
          <div className="">{visitUs.address}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactCards;
