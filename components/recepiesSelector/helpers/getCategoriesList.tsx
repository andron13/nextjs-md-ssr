import React from 'react';

import { categories } from './categories';
import CategoryItem from './CategoryItem';

type propsType = {
  activeCat: string;
  setActiveCat: React.Dispatch<React.SetStateAction<string>>;
};

export default function getCategoriesList({ activeCat, setActiveCat }: propsType) {
  return categories.map((cat) => (
    <CategoryItem
      Elem={cat.Elem}
      title={cat.title}
      catKey={cat.key}
      key={cat.key}
      activeCat={activeCat}
      setActiveCat={setActiveCat}
    />
  ));
}
