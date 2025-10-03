import { useRef } from "react";
import { TfiClose } from "react-icons/tfi";
import { FaKeyboard } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

type Props = {
  isTyping: boolean;
  inputValue: string;
  onFocus: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  shouldShowClear: boolean;
};

const SearchInput = ({
  isTyping,
  inputValue,
  onFocus,
  onChange,
  onClear,
  shouldShowClear,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const isActiveStyles = isTyping ? "border-[#065fd4]" : "border-[#303030]";

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
        <form className="block w-full" onSubmit={(e) => e.preventDefault()}>
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
          <button className="flex items-center gap-2">
            <FaKeyboard size={18} />
          </button>
          <button className="flex items-center gap-2" onClick={onClear}>
            {shouldShowClear && (
              <TfiClose
                size={30}
                className="hover:bg-[rgba(255,255,255,0.1)] p-1 rounded-full transition"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
