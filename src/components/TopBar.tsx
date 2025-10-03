"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";

import { useAppContext } from "@/contexts/AppContext";
import SearchInput from "./SearchInput";
import SuggestionDropdown from "./SuggestionDropdown";
import HamburgerIcon from "./Hamburger";

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
    <div className="flex justify-between items-center px-5 pt-2 w-full h-[56px]">
      {/* Left section */}
      <div className="flex items-center gap-1">
        <HamburgerIcon onClick={() => console.log("hamburger clicked.")} />
        <Link href="/">
          <Image
            src="/logo-full.png"
            alt="Youtube Premium"
            width={130}
            height={20}
            priority
          />
        </Link>
      </div>

      {/* Center section */}
      <div className="relative flex items-center w-[640px]">
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
        <button className="bg-[#222222] px-6 rounded-r-4xl h-[40px]">
          <IoSearchOutline size={24} />
        </button>
        <button
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
        </button>
      </div>

      {/* Right section */}
      <div className="">right section</div>
    </div>
  );
};

export default Topbar;
