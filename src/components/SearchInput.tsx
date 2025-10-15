"use client";

import { FormEvent, useRef } from "react";

import { IoSearchOutline, FaKeyboard, TfiClose } from "@/components/icons";
import { Button } from "@/components";
import { useKeyboardContext } from "@/contexts";

interface SearchInputProps {
  isTyping: boolean;
  inputValue: string;
  onFocus: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  shouldShowClear: boolean;
}

const SearchInput = ({
  isTyping,
  inputValue,
  onFocus,
  onChange,
  onClear,
  shouldShowClear,
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { toggleVisibility } = useKeyboardContext();

  const isActiveStyles = isTyping ? "border-accent-blue" : "border-accent-gray";

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div
      className={`flex items-center border ${isActiveStyles} rounded-l-4xl h-[40px] cursor-text w-full relative`}
    >
      {isTyping && (
        <div className="pl-4">
          <IoSearchOutline size={20} />
        </div>
      )}
      <div className="flex items-center ml-auto w-full h-[24px]">
        <form className="block w-full" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Szukaj"
            className="ml-6 outline-none w-full h-[40px]"
            value={inputValue}
            onFocus={onFocus}
            onChange={onChange}
            ref={inputRef}
          />
        </form>
        <div className="flex items-center gap-2 px-2">
          <Button
            className="flex items-center gap-2"
            onClick={toggleVisibility}
          >
            <FaKeyboard size={18} />
          </Button>
          <Button className="flex items-center gap-2" onClick={onClear}>
            {shouldShowClear && (
              <TfiClose
                size={30}
                className="hover:bg-overlay-light p-1 rounded-full transition"
              />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
