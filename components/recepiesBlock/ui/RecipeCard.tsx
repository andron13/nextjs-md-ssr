import Image, { StaticImageData } from 'next/image';
import React from 'react';

import cookingIcon from '../../../public/assets/icons/Cooking_time.svg';

type propsType = {
  recipe: {
    img: StaticImageData;
    title: string;
    category: string;
    cookTime: string;
    calories: string;
  };
};

export default function RecipeCard(props: propsType) {
  const { img, title, category, cookTime, calories } = props.recipe;
  return (
    <div className="sm:w-[220px] hover:scale-[1.02] cursor-pointer transition-all duration-300">
      <div className="relative z-10">
        <Image src={img} alt="" className="recipeImg" />
        <div className="absolute left-[16px] bottom-[30px] flex px-2 gap-1 text-[10px] font-[500] bg-primary-50 rounded-lg">
          <Image src={cookingIcon} alt="" />
          {cookTime} min
        </div>
      </div>
      <div className="relative z-20 bg-primary-50 rounded-b-lg px-4 py-5 translate-y-[-20px] shadow-[0px_3px_10px_1px_rgba(200,200,200,1)]">
        <h4 className="text-base font-[600]">{title}</h4>
        <div className="text-primary-600 flex justify-between mt-[33px] text-[12px] font-[500]">
          <p>{category}</p>
          <p>
            <span className="font-[700]">{calories}</span> calories
          </p>
        </div>
      </div>
    </div>
  );
}
