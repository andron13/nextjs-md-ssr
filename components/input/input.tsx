import { useState } from 'react';

interface IInputProps {
  className?: string;
  placeholder?: string;

  // Extend the type if there is no types you need
  type?: 'text' | 'number';
}

function Input({ className, placeholder, type = 'text' }: IInputProps) {
  const [value, setValue] = useState('');

  return (
    <input
      placeholder={placeholder}
      className={`h-10 w-full rounded-[9px] border border-primary-400 px-[10px] py-[9px] transition-all placeholder:text-accent-secondary-400 focus:border-transparent focus:outline-none focus:ring focus:ring-accent-600 focus:ring-opacity-50 ${className}`}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Input;
