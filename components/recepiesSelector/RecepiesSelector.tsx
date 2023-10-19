'use client';

import Image from 'next/image';
import { useState } from 'react';

import getCategoriesList from './helpers/getCategoriesList';
import filterIcon from '../../public/assets/icons/Filters.svg';
import sortIcon from '../../public/assets/icons/Sort.svg';
import FiltersPopup from '../filtersPopup/filtersPopup';

export default function RecepiesSelector() {
  const [activeCat, setActiveCat] = useState('all');
  const [recipesNumb, setRecipesNumb] = useState(8);

  const catList = getCategoriesList({ activeCat, setActiveCat });

  return (
    <div>
      <div className="justify-between sm:mt-8 sm:flex sm:items-center">
        <div className="mt-10 flex items-center sm:mt-0">
          <p className="rounded-sm border-r-[3px] border-primary-200 pr-[10px] text-2xl font-bold">
            Browse&nbsp;Recepies
          </p>
          <p className="pl-[10px] text-sm font-[600] text-accent-500 sm:text-base">
            {recipesNumb} recipes
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between text-base font-[600] sm:mt-0 sm:w-[144px] ">
          <div className="relative">
            <button className="flex items-center gap-[10px]">
              <Image src={filterIcon} alt="" />
              Filters
            </button>
            <FiltersPopup></FiltersPopup>
          </div>
          <button className="flex items-center gap-[10px]">
            <Image src={sortIcon} alt="" />
            Sort
          </button>
        </div>
      </div>
      <ul className="mt-10 flex gap-9 overflow-x-scroll pb-2 sm:overflow-x-hidden">{catList}</ul>
    </div>
  );
}
