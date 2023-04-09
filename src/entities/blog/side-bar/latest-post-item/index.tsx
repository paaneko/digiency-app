'use client';

import Image from 'next/image';
import { LatestPostCardType } from '@shared/ui-types';
// TODO replace a to next js <Link />

export function LatestPostItem({ img, refLink, label }: LatestPostCardType) {
  return (
    <div>
      <div className="flex my-[30px] items-center" id={refLink}>
        <Image className="mr-4" width={60} height={60} src={img} alt="latest-blog-avatar" />
        <div className="max-w-[251px] font-medium text-xl">{label}</div>
      </div>
    </div>
  );
}

export default LatestPostItem;
