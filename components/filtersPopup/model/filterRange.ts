import { IRecipe, RecipeKeys } from '../../../context/RecipeProvider';

function filterRange([min, max]: [number, number], recipes: IRecipe[], fieldToFilter: RecipeKeys) {
  let res = recipes;

  if (min !== 0 && max !== 0) {
    res = recipes.filter(
      (recipe) => Number(recipe[fieldToFilter]) >= min && Number(recipe[fieldToFilter]) <= max
    );
  }

  if (min !== 0 && max === 0) {
    res = recipes.filter((recipe) => Number(recipe[fieldToFilter]) >= min);
  }

  if (min === 0 && max !== 0) {
    res = recipes.filter((recipe) => Number(recipe[fieldToFilter]) <= max);
  }

  return res;
}

export default filterRange;
