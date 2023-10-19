import { createContext, ReactNode, useContext, useReducer } from 'react';

enum FilterActionTypes {
  IS_VEGAN_UPDATED = 'filters/isVeganUpdated',
  IS_SPICY_UPDATED = 'filters/isSpicyUpdated',
  CALORIES_UPDATED = 'filters/caloriesUpdated',
  COOKING_UPDATED = 'filters/cookingUpdated',
  CLEAR_ALL = 'filters/clearAll',
}

type InitialState = Readonly<{
  isVegan: boolean;
  isSpicy: boolean;
  calories: [number, number];
  cooking: [number, number];
}>;

interface IAction {
  type: FilterActionTypes;
  payload: any;
}

interface IFiltersProviderProps {
  children: ReactNode;
}

interface IFiltersProvider extends InitialState {
  updateCooking: (min: number, max: number) => void;
  updateCalories: (min: number, max: number) => void;
  updateSpicy: () => void;
  updateVegan: () => void;
}

const initialState: InitialState = {
  calories: [0, 0],
  cooking: [0, 0],
  isVegan: false,
  isSpicy: false,
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

    case FilterActionTypes.CLEAR_ALL:
      return initialState;

    default:
      throw new Error('Unknown filter action!');
  }
}

function FiltersProvider({ children }: IFiltersProviderProps) {
  const [{ isVegan, isSpicy, calories, cooking }, dispatch] = useReducer(reducer, initialState);

  function updateCooking(min = 0, max = 0) {
    return dispatch({ type: FilterActionTypes.COOKING_UPDATED, payload: [min, max] });
  }

  function updateCalories(min = 0, max = 0) {
    return dispatch({ type: FilterActionTypes.CALORIES_UPDATED, payload: [min, max] });
  }

  function updateSpicy(isSpicy: boolean) {
    return dispatch({ type: FilterActionTypes.IS_SPICY_UPDATED, payload: isSpicy });
  }

  function updateVegan(isVegan: boolean) {
    return dispatch({ type: FilterActionTypes.IS_VEGAN_UPDATED, payload: isVegan });
  }

  return (
    <FiltersContext.Provider
      value={
        {
          isVegan,
          isSpicy,
          calories,
          cooking,
          updateCooking,
          updateCalories,
          updateSpicy,
          updateVegan,
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
