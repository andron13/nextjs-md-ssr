import Image from 'next/image';
import React from 'react';

import { defaultLink } from './Link/myLink';

import logo from '../public/assets/img/webpage/logo.png';

import { LinkObj } from '../types';
import { primaryLinks } from '../utils/constants';

export const Navbar = () => {
  return (
    <nav className="pt-2">
      <div className="mx-auto px-2 flex justify-between items-center">
        <div className="text-black font-bold">
          <Image src={logo} alt="Logo" height={30} />
        </div>
        <div className="space-x-6">
          {primaryLinks.map((link: LinkObj) => defaultLink(link.path, link.title))}
        </div>
      </div>
    </nav>
  );
};
