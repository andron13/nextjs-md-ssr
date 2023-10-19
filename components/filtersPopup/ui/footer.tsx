import { useFilters } from '../../../context/FiltersProvider';
import { useRecipes } from '../../../context/RecipeProvider';
import Button from '../../button';

function Footer() {
  const { clearAll, applyFilters } = useFilters();
  const { updateRecipes } = useRecipes();

  return (
    <footer className="flex justify-between border-t border-primary-100 px-5">
      <div className="mt-6 flex w-full items-center justify-between">
        <Button onClick={clearAll} type="empty">
          Clear all
        </Button>
        <Button onClick={() => applyFilters(updateRecipes)}>Show X recipes</Button>
      </div>
    </footer>
  );
}

export default Footer;
