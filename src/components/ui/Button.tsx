import { ReactNode } from "react";
import { MouseEventHandler } from "react";

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
