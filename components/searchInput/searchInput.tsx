'use client';

import Image from 'next/image';
import { useState } from 'react';

import searchIcon from '../../public/assets/icons/search.svg';

export default function SearchInput() {
  const [search, setSearch] = useState('');

  return (
    <div className="w-full px-5 mt-6 sm:px-0 sm:mt-0 sm:w-[280px] sm:absolute sm:right-[25px] sm:top-[10px]">
      <label
        htmlFor="searchInp"
        className="flex gap-[6px] px-3 py-2 text-accent-secondary-700 rounded-md shadow-[0px_1px_2px_2px_rgba(239,239,239,1)]"
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
