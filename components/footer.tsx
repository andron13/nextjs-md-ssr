import Link from 'next/link';

import { primaryLinks, secondaryLinks, thirdLinks } from '../constants';
import { LinkObj } from '../types';

type propsType = { href: string; children: string };

// Компонент для ссылки с необходимыми стилями
const CustomLink = ({ href, children }: propsType) => (
  <Link href={href} className="px-2 text-white hover:text-blue-500 md:px-0">
    {children}
  </Link>
);

const Footer = () => {
  return (
    <>
      <div className="flex-grow"></div>
      <footer className="rounded-md bg-black py-4 text-white shadow-md">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 px-8 md:grid-cols-3">
            <div className="md:flex md:flex-col">
              <h3 className="mb-2 text-2xl font-bold">Компания</h3>
              <ul className="space-y-2">
                {primaryLinks.map((link: LinkObj) => (
                  <li key={link.title}>
                    <CustomLink href={link.path}>{link.title}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:flex md:flex-col md:text-center">
              <h3 className="mb-2 text-2xl font-bold">Продукты</h3>
              <ul className="space-y-2">
                {secondaryLinks.map((link: LinkObj) => (
                  <li key={link.title}>
                    <CustomLink href={link.path}>{link.title}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:flex md:flex-col md:text-right">
              <h3 className="mb-2 text-2xl font-bold">Поддержка</h3>
              <ul className="space-y-2">
                {thirdLinks.map((link: LinkObj) => (
                  <li key={link.title}>
                    <CustomLink href={link.path}>{link.title}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
