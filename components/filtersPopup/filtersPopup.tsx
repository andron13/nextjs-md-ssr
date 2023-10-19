import Image from 'next/image';

import cross from '../../public/assets/icons/cross.svg';
import Checkbox from '../checkBox/checkbox';
import Input from '../input/input';

function FiltersPopup() {
  return (
    <div className="absolute z-30 mt-4 w-80 rounded-2xl border-b border-primary-100 bg-white pb-5 shadow-2xl sm:left-full sm:-translate-x-full">
      <div className="relative flex items-center border-b border-primary-100 px-6 py-5">
        <Image
          className="absolute h-8 w-8 cursor-pointer rounded-full p-1 transition-all hover:bg-black-100"
          src={cross}
          alt=""
        />
        <h4 className="mx-auto font-extrabold">Filters</h4>
      </div>

      <div className="max-h-60 overflow-y-scroll p-6">
        <div className="grid grid-cols-2 gap-5 border-b border-primary-100 py-6">
          <span className="col-span-2 w-full text-black">Essentials</span>
          {Array.from({ length: 4 }, (_, i) => (
            <Checkbox key={i} label={`Vegan-${i}`} />
          ))}
        </div>

        <div className="py-6">
          <span className="text-black">Calories</span>
          <div className="mt-5 flex items-center gap-2">
            <Input type="number" placeholder="Min" /> — <Input type="number" placeholder="Max" />
          </div>
        </div>

        <div>
          <span className="text-black">Cooking</span>
          <div className="mt-5 flex items-center gap-2">
            <Input type="number" placeholder="Min" /> — <Input type="number" placeholder="Max" />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between border-t border-primary-100 px-5">
        <div className="mt-6 flex w-full items-center justify-between">
          <button className="rounded-md px-4 py-2 transition-all hover:bg-black-100">
            Clear all
          </button>
          <button className="rounded-md bg-black-900 px-6 py-[14px] text-white transition-colors hover:bg-black">
            Show X recipes
          </button>
        </div>
      </div>
    </div>
  );
}

export default FiltersPopup;
