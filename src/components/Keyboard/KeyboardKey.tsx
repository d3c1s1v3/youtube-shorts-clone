interface KeyboardKeyProps {
  label: string | undefined;
  icon?: React.ComponentType | undefined;
}

const KeyboardKey = ({ label, icon: Icon }: KeyboardKeyProps) => {
  const keySize = `${Icon ? "flex-3" : "flex-1"} ${
    label === "|" ? "flex-2" : "flex-1"
  }`;

  return (
    <button
      className={`${keySize} flex flex-1 justify-center items-center bg-keyboard-button-bg mx-0.5 border border-keyboard-button-border rounded-xs text-keyboard-text hover:text-keyboard-button-hover transition`}
    >
      {label && <span>{label}</span>}
      {Icon && (
        <div className="font-bold text-xl">
          <Icon />
        </div>
      )}
    </button>
  );
};

export default KeyboardKey;
