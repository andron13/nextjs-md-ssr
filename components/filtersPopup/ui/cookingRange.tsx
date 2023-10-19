import MinMaxInput from './minMaxInput';
import { useFilters } from '../../../context/FiltersProvider';

function CookingRange() {
  const { updateCooking, cooking } = useFilters();

  return <MinMaxInput values={cooking} onUpdate={updateCooking} text="Cooking" />;
}

export default CookingRange;
