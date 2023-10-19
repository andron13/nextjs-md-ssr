import { IRecipe } from '../../../context/RecipeProvider';

function filterCalories([min, max]: [number, number], recipes: IRecipe[]) {
  let res = recipes;

  if (min !== 0 && max !== 0) {
    res = recipes.filter(
      (recipe) => Number(recipe.calories) >= min && Number(recipe.calories) <= max
    );
  }

  if (min !== 0 && max === 0) {
    res = recipes.filter((recipe) => Number(recipe.calories) >= min);
  }

  if (min === 0 && max !== 0) {
    res = recipes.filter((recipe) => Number(recipe.calories) <= max);
  }

  return res;
}

export default filterCalories;
