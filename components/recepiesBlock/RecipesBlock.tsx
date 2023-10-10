import React from 'react';

import RecipeCard from './ui/RecipeCard';
import firstPic from '../../public/assets/img/food_1.jpg';
import secondPic from '../../public/assets/img/food_2.jpg';
import thirdPic from '../../public/assets/img/food_3.jpg';

const recipes = [
  {
    img: firstPic,
    title: 'Berry cheesecake',
    category: 'Desserts',
    cookTime: '45',
    calories: '780',
  },
  {
    img: secondPic,
    title: 'Pizza neopolitano',
    category: 'Dinners',
    cookTime: '30',
    calories: '1200',
  },
  {
    img: thirdPic,
    title: 'Shashlyk',
    category: 'Dinners',
    cookTime: '90',
    calories: '780',
  },
];

const items = recipes.map((recipe) => <RecipeCard recipe={recipe} key={recipe.title} />);
export default function RecepiesBlock() {
  return (
    <div className="flex flex-col justify-center mt-10 gap-5 sm:flex-row sm:gap-6 sm:flex-wrap">
      {items}
    </div>
  );
}
