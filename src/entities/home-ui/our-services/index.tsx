import Image from 'next/image';
import { HomeServicesType } from '@shared/ui-types';

export function OurServices({ img, label, titles, description }: HomeServicesType) {
  return (
    <div className="my-[15px]">
      <div className="rounded-md cursor-pointer w-[370px] h-[290px] flex-col shadow-lg text-gray-pg hover:bg-orange-main hover:text-white duration-500">
        <div className="flex justify-center pt-[30px] pb-[25px]">
          <Image width={50} height={50} src={img} alt={label} />
        </div>
        <div className="text-center mb-1.5 font-semibold text-[25px] leading-9 text-main-bg">{label}</div>
        <div className="text-center mb-3.5 text-xs font-light ">{titles}</div>
        <div className="text-center px-3">{description}</div>
      </div>
    </div>
  );
}

export default OurServices;
