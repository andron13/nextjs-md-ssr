import Image from 'next/image';

import { webSiteTitle } from '../../constants/webSiteVars';
import logoIcon from '../../public/assets/icons/logo.svg';

export default function Logo() {
  return (
    <div className="flex flex-row items-center gap-3 border-b-[1px] border-b-primary-100 py-3 pl-6">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black-950">
        <Image src={logoIcon} alt="" width={12} />
      </div>
      <div className="text-2xl font-bold">{webSiteTitle}</div>
    </div>
  );
}
