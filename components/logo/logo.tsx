import Image from 'next/image';
import React from 'react';

import { webSiteTitle } from '../../constants/webSiteVars';

import logoIcon from '../../public/assets/icons/logo.svg';

export default function Logo() {
  return (
    <div className="flex flex-row gap-3 items-center border-b-[1px] border-b-primary-100 pl-6 py-3">
      <div className="w-6 h-6 bg-black-950 rounded-full flex justify-center items-center">
        <Image src={logoIcon} alt="" width={12} />
      </div>
      <div className="text-2xl font-bold">{webSiteTitle}</div>
    </div>
  );
}
