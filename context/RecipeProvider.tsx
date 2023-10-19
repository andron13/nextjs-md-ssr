import { StaticImageData } from 'next/image';
import { createContext, ReactNode, useContext, useReducer } from 'react';

import firstPic from '../public/assets/img/food_1.jpg';
import secondPic from '../public/assets/img/food_2.jpg';
import thirdPic from '../public/assets/img/food_3.jpg';

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

export const recipes = [
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

const initialState: InitialState = {
  recipes,
} as const;

const RecipeContext = createContext<IRecipeContextProvider>(initialState as IRecipeContextProvider);

function reducer(state: InitialState, action: IAction): InitialState {
  switch (action.type) {
    case RecipeActionTypes.RECIPES_UPDATED:
      return { recipes: action.payload };

    default:
      throw new Error('Unknown recipe action!');
  }
}

function RecipeProvider({ children }: IRecipeProviderProps) {
  const [{ recipes }, dispatch] = useReducer(reducer, initialState);

  function updateRecipes(newRecipes: IRecipe[]) {
    return dispatch({ type: RecipeActionTypes.RECIPES_UPDATED, payload: newRecipes });
  }

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
