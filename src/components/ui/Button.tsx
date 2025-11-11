import { CSSProperties, ReactNode } from "react";
import { MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  children,
  className = "",
  style = {},
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) => {
  return (
    <button
      type="button"
      style={style}
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
