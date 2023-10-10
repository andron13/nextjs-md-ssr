import React from 'react';

import { categories } from './categories';

type propsType = {
  activeCat: string;
  setActiveCat: React.Dispatch<React.SetStateAction<string>>;
};

type CatBtnArgs = {
  Elem: ({ color }: { color: string }) => React.JSX.Element;
  title: string;
  key: string;
};

export default function getCategoriesList({ activeCat, setActiveCat }: propsType) {
  function getCatBtn({ Elem, title, key }: CatBtnArgs) {
    const isActive = activeCat === key ? true : false;
    return (
      <li>
        <button
          className={`${
            isActive ? 'text-accent-600' : 'text-primary-900'
          } hover:text-accent-400 transition-all duration-200 myRecepBtn flex flex-col justify-center items-center whitespace-nowrap gap-4`}
          onClick={() => setActiveCat(key)}
        >
          <Elem color={isActive ? 'fill-accent-600' : 'fill-primary-900'} />
          {title}
        </button>
      </li>
    );
  }

  return categories.map((cat) => getCatBtn(cat));
}
