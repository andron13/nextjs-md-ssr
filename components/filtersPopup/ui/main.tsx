import Essentials from './essentials';
import MinMaxInput from './minMaxInput';

function Main() {
  return (
    <main className="max-h-60 overflow-y-scroll p-6">
      <Essentials />
      <MinMaxInput text="Calories" />
      <MinMaxInput text="Cooking" />
    </main>
  );
}

export default Main;
