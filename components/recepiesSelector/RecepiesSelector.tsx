'use client';

import Image from 'next/image';
import { useState } from 'react';

import getCategoriesList from './helpers/getCategoriesList';
import filterIcon from '../../public/assets/icons/Filters.svg';
import sortIcon from '../../public/assets/icons/Sort.svg';

export default function RecepiesSelector() {
  const [activeCat, setActiveCat] = useState('all');
  const [recipesNumb, setRecipesNumb] = useState(8);

  const catList = getCategoriesList({ activeCat, setActiveCat });

  return (
    <div>
      <div className="sm:flex justify-between sm:items-center sm:mt-8">
        <div className="flex items-center mt-10 sm:mt-0">
          <p className="text-2xl font-bold border-r-[3px] border-primary-200 rounded-sm pr-[10px]">
            Browse&nbsp;Recepies
          </p>
          <p className="pl-[10px] text-accent-500 text-sm font-[600] sm:text-base">
            {recipesNumb} recipes
          </p>
        </div>
        <div className="text-base font-[600] flex justify-between items-center mt-4 sm:w-[144px] sm:mt-0 ">
          <button className="flex gap-[10px] items-center">
            <Image src={filterIcon} alt="" />
            Filters
          </button>
          <button className="flex gap-[10px] items-center">
            <Image src={sortIcon} alt="" />
            Sort
          </button>
        </div>
      </div>
      <ul className="flex gap-9 mt-10 pb-2 overflow-x-scroll sm:overflow-x-hidden">{catList}</ul>
    </div>
  );
}
