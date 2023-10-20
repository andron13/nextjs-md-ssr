import { IRecipe } from '../../../context/RecipeProvider';

const sortValues = {
  cookTime: 'cookTime',
  calories: 'calories',
};

type SortValues = (typeof sortValues)[keyof typeof sortValues];

function applySort(sortVal: SortValues, recipes: IRecipe[]) {
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
