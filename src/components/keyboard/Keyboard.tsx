"use client";

import { useKeyboardContext } from "@/contexts";
import { useDrag } from "@/hooks";

import { KeyboardBody } from "@/components";
import KeyboardHeader from "./KeyboardHeader";

const Keyboard = () => {
  const { state } = useKeyboardContext();
  const { keyboardRef, positionStyles, handleMouseDown } = useDrag();

  if (!state.isVisible) return null;

  return (
    <div
      style={positionStyles}
      ref={keyboardRef}
      className="z-10 fixed bg-white p-2.5 w-[517px] h-[214px] text-black"
    >
      <KeyboardHeader handleDrag={handleMouseDown} />
      <KeyboardBody />
    </div>
  );
};

export default Keyboard;
