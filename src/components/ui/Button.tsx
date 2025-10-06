import { ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { MouseEventHandler } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  children,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  return (
    <button
      className={twMerge(clsx(className))}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
