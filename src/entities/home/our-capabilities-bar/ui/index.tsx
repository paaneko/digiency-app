'use client';

import Image from 'next/image';
import IncrementalItem from '@entities/home/our-capabilities-bar/ui/IncrementalItem';

function OurCapabilitiesBar() {
  return (
    <div className="w-[180px] md:w-full container text-white bg-orange-main rounded-lg md:py-[50px] xl:py-[70px] mt-[60px] xl:mt-[120px]">
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row divide-y-[3px] md:divide-y-[0px] md:divide-x-[3px] divide-slate-700">
          <div className="w-[170px] xl:w-[270px] h-[110px] md:h-[110px] pt-5 md:p-0">
            <div className="flex justify-center">
              <div className="relative mb-2.5 md:w-[35px] md:h-[35px] xl:w-[50px] xl:h-[50px]">
                <Image className="inline-flex object-cover object-left" fill src="our-cap-man.svg" alt="our-cap-man" />
              </div>
            </div>
            <div className="flex justify-center">
              <IncrementalItem num={120} />
            </div>
            <div className="flex justify-center">
              <div className="md:text-lg xl:text-xl font-medium text-center">Top Experts</div>
            </div>
          </div>
          <div className="w-[170px] xl:w-[270px] h-[110px] md:h-[110px] pt-5 md:p-0">
            <div className="flex justify-center">
              <div className="relative mb-2.5 md:w-[35px] md:h-[35px] xl:w-[50px] xl:h-[50px]">
                <Image
                  className="inline-flex object-cover object-left"
                  fill
                  src="our-cap-target.svg"
                  alt="our-cap-target"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <IncrementalItem num={500} />
            </div>
            <div className="flex justify-center">
              <div className="md:text-lg xl:text-xl font-medium text-center">Strategies</div>
            </div>
          </div>
          <div className="w-[170px] xl:w-[270px] h-[110px] md:h-[110px] pt-5 md:p-0">
            <div className="flex justify-center">
              <div className="relative mb-2.5 md:w-[35px] md:h-[35px] xl:w-[50px] xl:h-[50px]">
                <Image
                  className="inline-flex object-cover object-left"
                  fill
                  src="our-cap-analysis.svg"
                  alt="our-cap-analysis"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <IncrementalItem num={346} />
            </div>
            <div className="flex justify-center">
              <div className="md:text-lg xl:text-xl font-medium text-center">Great Results</div>
            </div>
          </div>
          <div className="w-[170px] xl:w-[270px] h-[110px] md:h-[110px] pt-5 md:p-0">
            <div className="flex justify-center">
              <div className="relative mb-2.5 md:w-[35px] md:h-[35px] xl:w-[50px] xl:h-[50px]">
                <Image
                  className="inline-flex object-cover object-left"
                  fill
                  src="our-cap-data-analytics.svg"
                  alt="our-cap-data-analysis"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <IncrementalItem num={140} />
            </div>
            <div className="flex justify-center">
              <div className="md:text-lg xl:text-xl font-medium text-center">Hight Rankings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCapabilitiesBar;
