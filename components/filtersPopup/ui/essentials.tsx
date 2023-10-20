import { useFilters } from '../../../context/FiltersProvider';
import Checkbox from '../../checkBox/checkbox';

function Essentials() {
  const { isVegan, isSpicy, updateSpicy, updateVegan } = useFilters();

  return (
    <div className="grid grid-cols-2 gap-5 border-b border-primary-100 py-6">
      <span className="col-span-2 w-full text-black">Essentials</span>
      <Checkbox onChange={updateVegan} checked={isVegan} label="Vegan" />
      <Checkbox onChange={updateSpicy} checked={isSpicy} label="Spicy" />
    </div>
  );
}

export default Essentials;
