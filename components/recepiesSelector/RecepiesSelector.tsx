'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import getCategoriesList from './helpers/getCategoriesList';
import filterIcon from '../../public/assets/icons/Filters.svg';
import sortIcon from '../../public/assets/icons/Sort.svg';

export default function RecepiesSelector() {
  const [activeCat, setActiveCat] = useState('all');

  const catList = getCategoriesList({ activeCat, setActiveCat });

  return (
    <div>
      <div>
        <div>
          <p>Browse Recepies</p>
          <p>8 recipes</p>
        </div>
        <div>
          <button>
            <Image src={filterIcon} alt="" />
            Filters
          </button>
          <button>
            <Image src={sortIcon} alt="" />
            Sort
          </button>
        </div>
      </div>
      <ul>{catList}</ul>
    </div>
  );
}
