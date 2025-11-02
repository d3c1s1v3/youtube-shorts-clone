import { EventHandler } from "react";

interface KeyboardKeyProps {
  label: string | undefined;
  icon: React.ComponentType | undefined;
}

const KeyboardKey = ({ label, icon: Icon }: KeyboardKeyProps) => {
  return (
    <button className="flex flex-1 justify-center items-center">
      {label && <div>{label}</div>}
      {Icon && <Icon />}
    </button>
  );
};

export default KeyboardKey;
