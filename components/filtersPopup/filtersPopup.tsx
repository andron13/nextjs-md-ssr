import { cloneElement, ReactElement } from 'react';

import Footer from './ui/footer';
import Header from './ui/header';
import Main from './ui/main';
import { useFilters } from '../../context/FiltersProvider';

interface IOpenProps {
  children: ReactElement;
}

function Filters({ children }) {
  return children;
}

function FiltersPopup() {
  const { isOpen } = useFilters();

  if (!isOpen) return null;

  return (
    <div className="absolute z-30 mt-4 w-80 rounded-2xl border-b border-primary-100 bg-white pb-5 shadow-2xl sm:left-full sm:-translate-x-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Toggle({ children }: IOpenProps) {
  const { isOpen, show, hide } = useFilters();

  return cloneElement(children, { onClick: isOpen ? hide : show });
}

Filters.Toggle = Toggle;
Filters.Popup = FiltersPopup;

export default Filters;
