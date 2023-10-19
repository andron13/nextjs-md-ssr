import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from 'react';

import { IRecipe } from './RecipeProvider';
import filterEssentials from '../components/filtersPopup/model/filterEssentials';
import filterRange from '../components/filtersPopup/model/filterRange';
import { recipes } from '../constants/testContent';

enum FilterActionTypes {
  IS_VEGAN_UPDATED = 'filters/isVeganUpdated',
  IS_SPICY_UPDATED = 'filters/isSpicyUpdated',
  CALORIES_UPDATED = 'filters/caloriesUpdated',
  COOKING_UPDATED = 'filters/cookingUpdated',
  CLEAR_ALL = 'filters/clearAll',
  OPEN = 'filters/open',
  CLOSE = 'filters/close',
  MATCHED_RECIPE_NUM_UPDATED = 'filters/matchedRecipeNumUpdated',
}

type InitialState = Readonly<{
  isVegan: boolean;
  isSpicy: boolean;
  calories: [number, number];
  cooking: [number, number];
  isOpen: boolean;
  matchedRecipeNum: number;
}>;

interface IAction {
  type: FilterActionTypes;
  payload?: any;
}

interface IFiltersProviderProps {
  children: ReactNode;
}

interface IFiltersProvider extends InitialState {
  updateCooking: (min: number, max: number) => void;
  updateCalories: (min: number, max: number) => void;
  updateSpicy: (isSpicy: boolean) => void;
  updateVegan: (isVegan: boolean) => void;
  clearAll: () => void;
  show: () => void;
  hide: () => void;
  applyFilters: (updateCallback: (newRecipes: IRecipe[]) => void) => void;
}

const initialState: InitialState = {
  calories: [0, 0],
  cooking: [0, 0],
  isVegan: false,
  isSpicy: false,
  isOpen: false,
  matchedRecipeNum: recipes.length,
};

const FiltersContext = createContext<IFiltersProvider>({} as IFiltersProvider);

function reducer(state: InitialState, action: IAction): InitialState {
  switch (action.type) {
    case FilterActionTypes.IS_VEGAN_UPDATED:
      return { ...state, isVegan: action.payload };

    case FilterActionTypes.IS_SPICY_UPDATED:
      return { ...state, isSpicy: action.payload };

    case FilterActionTypes.CALORIES_UPDATED:
      return { ...state, calories: action.payload };

    case FilterActionTypes.COOKING_UPDATED:
      return { ...state, cooking: action.payload };

    case FilterActionTypes.OPEN:
      return { ...state, isOpen: true };

    case FilterActionTypes.CLOSE:
      return { ...state, isOpen: false };

    case FilterActionTypes.CLEAR_ALL:
      return { ...initialState, isOpen: state.isOpen };

    case FilterActionTypes.MATCHED_RECIPE_NUM_UPDATED:
      return { ...state, matchedRecipeNum: action.payload };

    default:
      throw new Error('Unknown filter action!');
  }
}

function FiltersProvider({ children }: IFiltersProviderProps) {
  const [{ isVegan, isSpicy, calories, cooking, isOpen, matchedRecipeNum }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const applyedFilters = useRef<IRecipe[]>(recipes);

  const updateCooking = useCallback(
    (min: number, max: number) =>
      dispatch({
        type: FilterActionTypes.COOKING_UPDATED,
        payload: [min, max],
      }),
    []
  );

  const updateCalories = useCallback(
    (min: number, max: number) =>
      dispatch({
        type: FilterActionTypes.CALORIES_UPDATED,
        payload: [min, max],
      }),
    []
  );

  const updateSpicy = useCallback(
    (isSpicy: boolean) => dispatch({ type: FilterActionTypes.IS_SPICY_UPDATED, payload: isSpicy }),
    []
  );

  const updateVegan = useCallback(
    (isVegan: boolean) => dispatch({ type: FilterActionTypes.IS_VEGAN_UPDATED, payload: isVegan }),
    []
  );

  const clearAll = useCallback(() => {
    dispatch({ type: FilterActionTypes.CLEAR_ALL });
  }, []);

  const show = useCallback(() => {
    dispatch({ type: FilterActionTypes.OPEN });
  }, []);

  const hide = useCallback(() => {
    dispatch({ type: FilterActionTypes.CLOSE });
  }, []);

  const applyFilters = useCallback((updateCallback: (newRecipes: IRecipe[]) => void) => {
    updateCallback(applyedFilters.current);
  }, []);

  useEffect(() => {
    const caloryFilter = filterRange(calories, recipes, 'calories');
    const cookingTimeFilter = filterRange(cooking, caloryFilter, 'cookTime');
    const isVeganFilter = filterEssentials(isVegan, cookingTimeFilter, 'isVegan');
    const isSpicyFilter = filterEssentials(isSpicy, isVeganFilter, 'isSpicy');

    applyedFilters.current = isSpicyFilter;
    dispatch({ type: FilterActionTypes.MATCHED_RECIPE_NUM_UPDATED, payload: isSpicyFilter.length });
  }, [calories, cooking, isSpicy, isVegan]);

  return (
    <FiltersContext.Provider
      value={
        {
          isVegan,
          isSpicy,
          calories,
          cooking,
          isOpen,
          updateCooking,
          updateCalories,
          updateSpicy,
          updateVegan,
          clearAll,
          show,
          hide,
          applyFilters,
          matchedRecipeNum,
        } as IFiltersProvider
      }
    >
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilters(): IFiltersProvider {
  const context = useContext(FiltersContext);

  if (context === undefined) throw new Error('FiltersContext is used outside the FiltersProvider!');

  return context;
}

export default FiltersProvider;
