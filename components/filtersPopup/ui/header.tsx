import Image from 'next/image';

import cross from '../../../public/assets/icons/cross.svg';

function Header() {
  return (
    <header className="relative flex items-center border-b border-primary-100 px-6 py-5">
      <Image
        className="absolute h-8 w-8 cursor-pointer rounded-full p-1 transition-all hover:bg-black-100"
        src={cross}
        alt=""
      />
      <h4 className="mx-auto font-extrabold">Filters</h4>
    </header>
  );
}

export default Header;
