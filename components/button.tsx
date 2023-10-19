import { memo, ReactNode } from 'react';

const buttonTypes = {
  filled: 'rounded-md bg-black-900 px-6 py-[14px] text-white transition-colors hover:bg-black',
  empty: 'rounded-md px-4 py-2 transition-all hover:bg-black-100',
} as const;

interface IButtonProps {
  children: ReactNode;
  type?: keyof typeof buttonTypes;
  onClick?: () => void;
  className?: string;
}

const Button = memo(function Button({
  children,
  type = 'filled',
  onClick,
  className,
}: IButtonProps) {
  const classes = `${buttonTypes[type]} ${className ?? ''}`;

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
});

export default Button;
