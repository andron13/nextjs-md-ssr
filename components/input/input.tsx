import { ChangeEvent, memo, useState } from 'react';

interface IInputProps {
  className?: string;
  placeholder?: string;
  onBlur?: () => void;
  onChange?: (num: number) => void;
  val?: string | number;

  // Extend the type if there is no types you need
  type?: 'text' | 'number';
}

const Input = memo(function Input({
  className,
  onChange,
  onBlur,
  placeholder,
  type = 'text',
  val,
}: IInputProps) {
  const [value, setValue] = useState(val ?? 0);

  const inputVal = val ?? value;

  function handleChange(e: ChangeEvent) {
    const num = Number((e.target as HTMLInputElement).value);

    setValue(num);
    onChange?.(num);
  }

  return (
    <input
      onBlur={onBlur}
      placeholder={placeholder}
      className={`h-10 w-full rounded-[9px] border border-primary-400 px-[10px] py-[9px] transition-all placeholder:text-accent-secondary-400 focus:border-transparent focus:outline-none focus:ring focus:ring-accent-600 focus:ring-opacity-50 ${className}`}
      type={type}
      value={inputVal || ''}
      onChange={handleChange}
    />
  );
});

export default Input;
