"use client";

import { useKeyboardContext } from "@/contexts";
import { useDrag } from "@/hooks";
import { IoCloseSharp } from "@/components/icons";
import { KeyboardBody } from "@/components";

const Keyboard = () => {
  const { state, toggleVisibility } = useKeyboardContext();
  const { keyboardRef, positionStyles, handleMouseDown } = useDrag();

  if (!state.isVisible) return null;

  return (
    <div
      ref={keyboardRef}
      className="z-10 fixed bg-white p-2.5 w-[517px] h-[214px] text-black"
      style={positionStyles}
    >
      <div className="flex">
        <span
          className="flex-1 text-[14px] text-light-gray cursor-move"
          onMouseDown={handleMouseDown}
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
      <KeyboardBody />
    </div>
  );
};

export default Keyboard;
