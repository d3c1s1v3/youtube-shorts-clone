"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

import { useAppContext } from "@/contexts/AppContext";
import {
  FaPlus,
  FaMicrophone,
  IoSearchOutline,
  IoNotificationsOutline,
} from "@/components/icons";
import SearchInput from "./SearchInput";
import SuggestionDropdown from "./SuggestionDropdown";
import Button from "./ui/Button";

const Topbar = () => {
  const {
    shouldShowClear,
    isTyping,
    inputValue,
    showToolTip,
    setShowToolTip,
    handleChangeInput,
    setIsTyping,
    onFocus,
    onClear,
    handleSubmit,
  } = useAppContext();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isTyping) setIsTyping(false);
    };

    if (isTyping) document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isTyping, setIsTyping]);

  return (
    <div className="right-0 fixed flex justify-between items-center pt-2 pr-5 pl-1 w-[calc(100%-80px)] h-[56px]">
      <Link href="/">
        <Image
          src="/logo-full.png"
          alt="Youtube Premium"
          width={130}
          height={20}
          priority
        />
      </Link>
      <div className="flex items-center w-[740px]">
        <div className="relative flex w-[536px]">
          <SearchInput
            isTyping={isTyping}
            inputValue={inputValue}
            onFocus={onFocus}
            onChange={handleChangeInput}
            onClear={onClear}
            shouldShowClear={shouldShowClear}
          />
          {isTyping && (
            <SuggestionDropdown
              handleSubmit={handleSubmit}
              isOpen={isTyping}
              onClose={() => setIsTyping(false)}
            />
          )}
          <Button className="bg-[#222222] px-6 rounded-r-4xl h-[40px]">
            <IoSearchOutline size={24} />
          </Button>
        </div>
        <Button
          className="relative bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] active:bg-[rgba(255,255,255,0.3)] ml-4 p-3 border active:border-[rgba(255,255,255,0.3)] border-transparent rounded-full transition"
          onMouseEnter={() => setShowToolTip(true)}
          onMouseLeave={() => setShowToolTip(false)}
          onClick={() => console.log("clicked microphone icon")}
        >
          <FaMicrophone size={18} />
          {showToolTip && (
            <div className="top-[150%] left-[50%] absolute bg-[rgba(255,255,255,0.2)] p-2 rounded-md text-[12px] text-nowrap -translate-x-[50%]">
              Wyszukaj głosowo
            </div>
          )}
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <Button className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] active:bg-[rgba(255,255,255,0.3)] ml-4 px-4 py-2 border active:border-[rgba(255,255,255,0.3)] border-transparent rounded-full transition">
          <div className="flex gap-3">
            <FaPlus size={18} />
            <span className="text-sm">Utwórz</span>
          </div>
        </Button>
        <Button>
          <IoNotificationsOutline size={22} />
        </Button>
        <Button>
          <div className="flex justify-center items-center bg-[#78909c] rounded-full w-8 h-8 text-[18px]">
            O
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
