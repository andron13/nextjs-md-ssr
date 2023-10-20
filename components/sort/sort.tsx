import {
  ChangeEvent,
  cloneElement,
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import applySort from './model/applySort';
import { RecipeKeys, useRecipes } from '../../context/RecipeProvider';
import useOutsideClick from '../../hooks/useOutsideClick';

interface SortContextProvider {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  selectVal: string;
  setSelectVal: Dispatch<SetStateAction<string>>;
}

interface IChildrenNodeProp {
  children: ReactNode;
}

type ISortProps = IChildrenNodeProp;

type ISelectProps = IChildrenNodeProp;

interface IOpenProps {
  children: ReactElement;
}

interface IOptionProps {
  children: string;
  value: `${RecipeKeys}-asc` | `${RecipeKeys}-desc`;
}

const SortContext = createContext<SortContextProvider>({} as SortContextProvider);

function Sort({ children }: ISortProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectVal, setSelectVal] = useState('');

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <SortContext.Provider
      value={{
        open,
        close,
        isOpen,
        selectVal,
        setSelectVal,
      }}
    >
      <div className="relative">{children}</div>
    </SortContext.Provider>
  );
}

function Open({ children }: IOpenProps) {
  const { open } = useContext(SortContext);

  return cloneElement(children, { onClick: open });
}

function Select({ children }: ISelectProps) {
  const { isOpen, close, selectVal, setSelectVal } = useContext(SortContext);
  const ref = useOutsideClick<HTMLSelectElement>(close);
  const { recipes, updateRecipes } = useRecipes();

  if (!isOpen) return null;

  function handleApplySort(e: ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target as HTMLSelectElement;

    setSelectVal(value);
    const sortedRecipes = applySort(value, recipes);

    updateRecipes(sortedRecipes);
  }

  return (
    <select
      value={selectVal}
      onChange={handleApplySort}
      className="absolute mt-4 rounded-xl border border-black-100 px-4 py-3 shadow-xl focus:border-transparent focus:outline-none focus:ring focus:ring-accent-600 focus:ring-opacity-50"
      ref={ref}
      name="sort"
      id="sort"
    >
      {children}
    </select>
  );
}

function Option({ children, value }: IOptionProps) {
  return <option value={value}>{children}</option>;
}

Sort.Open = Open;
Sort.Select = Select;
Sort.Option = Option;

export default Sort;
