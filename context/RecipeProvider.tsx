import { StaticImageData } from 'next/image';
import { createContext, ReactNode, useCallback, useContext, useReducer } from 'react';

import { recipes } from '../constants/testContent';

enum RecipeActionTypes {
  RECIPES_UPDATED = 'recipes/recipesUpdated',
}

interface IRecipeProviderProps {
  children: ReactNode;
}

export interface IRecipe {
  img: StaticImageData;
  title: string;
  category: string;
  cookTime: string;
  calories: string;
}

interface IAction {
  type: RecipeActionTypes;
  payload: IRecipe[];
}

type InitialState = Readonly<{
  recipes: IRecipe[];
}>;

interface IRecipeContextProvider extends InitialState {
  updateRecipes: (newRecipes: IRecipe[]) => void;
}

export type RecipeKeys = keyof (typeof recipes)[0];

const initialState: InitialState = {
  recipes,
} as const;

const RecipeContext = createContext<IRecipeContextProvider>(initialState as IRecipeContextProvider);

function reducer(_state: InitialState, action: IAction): InitialState {
  switch (action.type) {
    case RecipeActionTypes.RECIPES_UPDATED:
      return { recipes: action.payload };

    default:
      throw new Error('Unknown recipe action!');
  }
}

function RecipeProvider({ children }: IRecipeProviderProps) {
  const [{ recipes }, dispatch] = useReducer(reducer, initialState);

  const updateRecipes = useCallback(
    (newRecipes: IRecipe[]) =>
      dispatch({
        type: RecipeActionTypes.RECIPES_UPDATED,
        payload: newRecipes,
      }),
    []
  );

  return (
    <RecipeContext.Provider
      value={
        {
          recipes,
          updateRecipes,
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
