'use client';

import Image from 'next/image';
import { useState } from 'react';

import searchIcon from '../../public/assets/icons/search.svg';

export default function SearchInput() {
  const [search, setSearch] = useState('');

  return (
    <div className="mt-6 w-full px-5 sm:absolute sm:right-[25px] sm:top-[10px] sm:mt-0 sm:w-[280px] sm:px-0">
      <label
        htmlFor="searchInp"
        className="flex gap-[6px] rounded-md px-3 py-2 text-accent-secondary-700 shadow-[0px_1px_2px_2px_rgba(239,239,239,1)]"
      >
        <Image src={searchIcon} alt="" />
        <input
          className="w-full text-sm"
          type="text"
          id="searchInp"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="What would you like to cook?"
        />
      </label>
    </div>
  );
}
