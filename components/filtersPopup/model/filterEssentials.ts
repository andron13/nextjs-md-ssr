import { IRecipe, RecipeKeys } from '../../../context/RecipeProvider';

function filterEssentials(essential: boolean, recipes: IRecipe[], fieldToFilter: RecipeKeys) {
  if (!essential) return recipes;

  return recipes.filter((recipe) => recipe[fieldToFilter] === essential);
}

export default filterEssentials;
