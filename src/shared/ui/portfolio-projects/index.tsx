import { PortfolioProjectsConfigType } from '@shared/ui-types';
import Image from 'next/image';

export function PortfolioProjects({ img, label }: PortfolioProjectsConfigType) {
  return (
    <div className="my-[15px] overlapGrid cursor-pointer">
      <Image className="" width={370} height={238} src={img} alt={label} />
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div className="absolute rounded-lg w-[370px] h-[238px] bg-orange-main opacity-90" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <Image className="" width={50} height={50} src="links-line.svg" alt="links-line" />
          <div className="text-white font-semibold text-2xl mt-1">Web Template</div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioProjects;
