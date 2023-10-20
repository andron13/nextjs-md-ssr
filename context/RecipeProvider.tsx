import { createContext, ReactNode, useCallback, useContext, useReducer } from 'react';

import { resultObj } from '../types';

enum RecipeActionTypes {
  RECIPES_UPDATED = 'recipes/recipesUpdated',
  ALL_RECIPES_UPDATED = 'recipes/allRecipesUpdated',
}

interface IRecipeProviderProps {
  children: ReactNode;
}

export type IRecipe = resultObj;

interface IAction {
  type: RecipeActionTypes;
  payload: IRecipe[];
}

type InitialState = Readonly<{
  recipes: IRecipe[];
  allRecipes: IRecipe[];
}>;

interface IRecipeContextProvider extends InitialState {
  updateRecipes: (newRecipes: IRecipe[]) => void;
  updateAllRecipes: (newRecipes: IRecipe[]) => void;
}

export type RecipeKeys = keyof IRecipe;

const initialState: InitialState = {
  recipes: [] as IRecipe[],
  allRecipes: [] as IRecipe[],
} as const;

const RecipeContext = createContext<IRecipeContextProvider>(initialState as IRecipeContextProvider);

function reducer(state: InitialState, action: IAction): InitialState {
  switch (action.type) {
    case RecipeActionTypes.RECIPES_UPDATED:
      return { ...state, recipes: action.payload };

    case RecipeActionTypes.ALL_RECIPES_UPDATED:
      return { ...state, allRecipes: action.payload };

    default:
      throw new Error('Unknown recipe action!');
  }
}

function RecipeProvider({ children }: IRecipeProviderProps) {
  const [{ recipes, allRecipes }, dispatch] = useReducer(reducer, initialState);

  const updateRecipes = useCallback(
    (newRecipes: IRecipe[]) =>
      dispatch({
        type: RecipeActionTypes.RECIPES_UPDATED,
        payload: newRecipes,
      }),
    []
  );

  const updateAllRecipes = useCallback(
    (newRecipes: IRecipe[]) =>
      dispatch({
        type: RecipeActionTypes.ALL_RECIPES_UPDATED,
        payload: newRecipes,
      }),
    []
  );

  return (
    <RecipeContext.Provider
      value={
        {
          allRecipes,
          recipes,
          updateRecipes,
          updateAllRecipes,
        } as IRecipeContextProvider
      }
    >
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipeContext);

  if (context === undefined) throw new Error('useRecipes must be used within a RecipeProvider');

  return context;
}

export default RecipeProvider;
