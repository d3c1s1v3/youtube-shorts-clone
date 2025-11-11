import { IoCloseSharp } from "@/components/icons";
import { useKeyboardContext } from "@/contexts";
import { useDrag } from "@/hooks";

interface KeyboardHeaderProps {
  handleDrag: (e: React.MouseEvent) => void;
}

const KeyboardHeader = ({ handleDrag }: KeyboardHeaderProps) => {
  const { toggleVisibility } = useKeyboardContext();

  return (
    <div className="flex">
      <span
        className="flex-1 text-[14px] text-light-gray cursor-move"
        onMouseDown={handleDrag}
      >
        Polski
      </span>
      <div>
        <IoCloseSharp
          className="text-light-gray hover:text-black"
          size={20}
          onClick={toggleVisibility}
        />
      </div>
    </div>
  );
};

export default KeyboardHeader;
