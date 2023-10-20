'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useRecipes } from '../../context/RecipeProvider';
import searchIcon from '../../public/assets/icons/search.svg';

export default function SearchInput() {
  const [search, setSearch] = useState('');
  const { allRecipes, updateRecipes } = useRecipes();

  useEffect(() => {
    if (search === '') return updateRecipes(allRecipes);

    const searchResult = allRecipes.filter((recipe) => {
      return recipe.content?.toLowerCase().includes(search.toLowerCase());
    });

    updateRecipes(searchResult);
  }, [allRecipes, search, updateRecipes]);

  return (
    <div className="mt-6 w-full px-5 sm:absolute sm:right-[25px] sm:top-[10px] sm:mt-0 sm:w-[280px] sm:px-0">
      <label htmlFor="searchInp" className="flex gap-[6px]">
        <Image className="absolute bottom-0 left-3 top-0 my-auto" src={searchIcon} alt="" />
        <input
          className="w-full rounded-md px-3 py-2 pl-10 text-sm font-medium text-black shadow-[0px_1px_2px_2px_rgba(239,239,239,1)] transition-all placeholder:text-accent-secondary-400 focus:border-transparent focus:outline-none focus:ring focus:ring-accent-600 focus:ring-opacity-50"
          id="searchInp"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="What would you like to cook?"
        />
      </label>
    </div>
  );
}
