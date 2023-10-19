import Image from 'next/image';

import { useState } from 'react';

import checkmark from '../../public/assets/icons/checkmark.svg';

interface IFilterCheckboxProps {
  label: string;
  className?: string;
}

function Checkbox({ label, className }: IFilterCheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label
      htmlFor={label}
      className={`${className} font-base flex items-center gap-5 text-accent-secondary-700`}
    >
      <div className="relative">
        {isChecked && (
          <Image
            className={`absolute left-0 right-0 m-auto translate-y-1/2`}
            src={checkmark}
            alt=""
          />
        )}
        <input
          onClick={() => setIsChecked((prevState) => !prevState)}
          checked={isChecked}
          className="h-6 w-6 appearance-none rounded-md border border-primary-400 transition-all checked:bg-black hover:border-transparent hover:ring hover:ring-black-500 focus:border-transparent focus:outline-none focus:ring-accent-600 focus:ring-opacity-50"
          id={label}
          type="checkbox"
        />
      </div>
      {label}
    </label>
  );
}

export default Checkbox;
