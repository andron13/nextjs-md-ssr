import Image, { StaticImageData } from 'next/image';

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
    <div className="cursor-pointer object-contain transition-all duration-300 hover:scale-[1.02] sm:w-[220px]">
      <div className="relative z-10">
        <Image src={img} alt="" className="recipeImg" />
        <div className="absolute bottom-[30px] left-[16px] flex gap-1 rounded-lg bg-primary-50 px-2 text-[10px] font-[500]">
          <Image src={cookingIcon} alt="" />
          {cookTime} min
        </div>
      </div>
      <div className="relative z-20 translate-y-[-20px] rounded-b-lg bg-primary-50 px-4 py-5 shadow-[0px_3px_10px_1px_rgba(200,200,200,1)]">
        <h4 className="text-base font-[600]">{title}</h4>
        <div className="mt-[33px] flex justify-between text-[12px] font-[500] text-primary-600">
          <p>{category}</p>
          <p>
            <span className="font-[700]">{calories}</span> calories
          </p>
        </div>
      </div>
    </div>
  );
}
