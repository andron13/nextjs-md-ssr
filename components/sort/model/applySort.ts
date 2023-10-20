import { IRecipe } from '../../../context/RecipeProvider';

function applySort(sortVal: string, recipes: IRecipe[]) {
  const [key, order] = sortVal.split('-');

  if (order === 'asc') {
    return recipes.sort((currRecipe, nextRecipe) => {
      return nextRecipe[key] - currRecipe[key];
    });
  }

  return recipes.sort((currRecipe, nextRecipe) => {
    return currRecipe[key] - nextRecipe[key];
  });
}

export default applySort;
