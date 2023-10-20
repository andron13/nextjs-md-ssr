import MinMaxInput from './minMaxInput';
import { useFilters } from '../../../context/FiltersProvider';

function CaloriesRange() {
  const { updateCalories, calories } = useFilters();

  return <MinMaxInput values={calories} onUpdate={updateCalories} text="Calories" />;
}

export default CaloriesRange;
