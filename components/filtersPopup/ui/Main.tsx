import MinMaxInput from './MinMaxInput';
import Checkbox from '../../checkBox/checkbox';

function Main() {
  return (
    <main className="max-h-60 overflow-y-scroll p-6">
      <div className="grid grid-cols-2 gap-5 border-b border-primary-100 py-6">
        <span className="col-span-2 w-full text-black">Essentials</span>
        {Array.from({ length: 4 }, (_, i) => (
          <Checkbox key={i} label={`Vegan-${i}`} />
        ))}
      </div>

      <MinMaxInput text="Calories" />
      <MinMaxInput text="Cooking" />
    </main>
  );
}

export default Main;
