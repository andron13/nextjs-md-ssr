import Image from 'next/image';

import { memo } from 'react';

import checkmark from '../../public/assets/icons/checkmark.svg';

interface IFilterCheckboxProps {
  label: string;
  className?: string;
  checked?: boolean;
  onChange: (change: boolean) => void;
}

const Checkbox = memo(function Checkbox({
  label,
  className,
  checked,
  onChange,
}: IFilterCheckboxProps) {
  return (
    <label
      htmlFor={label}
      className={`${className} font-base flex items-center gap-5 text-accent-secondary-700`}
    >
      <div className="relative">
        {checked && (
          <Image
            className={`absolute left-0 right-0 m-auto translate-y-1/2`}
            src={checkmark}
            alt=""
          />
        )}
        <input
          onChange={() => onChange(!checked)}
          checked={checked}
          className="h-6 w-6 appearance-none rounded-md border border-primary-400 transition-all checked:bg-black hover:border-transparent hover:ring hover:ring-black-500 focus:border-transparent focus:outline-none focus:ring-accent-600 focus:ring-opacity-50"
          id={label}
          type="checkbox"
        />
      </div>
      {label}
    </label>
  );
});

export default Checkbox;
