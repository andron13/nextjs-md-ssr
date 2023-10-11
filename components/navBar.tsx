import Image from 'next/image';

import { defaultLink } from './Link/myLink';

import { primaryLinks } from '../constants';
import logo from '../public/assets/icons/logo.svg';
import { LinkObj } from '../types';

const Navbar = () => {
  return (
    <nav className="pt-2">
      <div className="mx-auto flex items-center justify-between px-2">
        <div className="font-bold text-black">
          <Image src={logo} alt="Logo" height={30} />
        </div>
        <div className="space-x-6">
          {primaryLinks.map((link: LinkObj) => defaultLink(link.path, link.title))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
