"use client";

import Link from "next/link";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { FaKeyboard, FaMicrophone } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";

import useTopBar from "@/hooks/useTopBar";
import HamburgerIcon from "./HamburgerIcon";

const TopBar = () => {
  const {
    isInputFocusedStyles,
    shouldShowClear,
    isTyping,
    inputValue,
    showToolTip,
    setShowToolTip,
    handleChangeInput,
    setIsTyping,
    setInputValue,
  } = useTopBar();

  return (
    <div className="flex justify-between items-center px-8 pt-2 w-full h-[56px]">
      <div className="flex items-center gap-1">
        <HamburgerIcon onClick={() => {}} />
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

      <div className="flex items-center w-[640px]">
        <div
          className={`flex items-center border ${isInputFocusedStyles} rounded-l-4xl h-[40px] overflow-hidden cursor-text w-full`}
        >
          {isTyping && (
            <div className="pl-4">
              <IoSearchOutline size={20} />
            </div>
          )}
          <div className="flex items-center ml-auto w-full h-[24px]">
            <input
              type="text"
              placeholder="Szukaj"
              className="ml-6 outline-none w-full"
              value={inputValue}
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
              onChange={handleChangeInput}
            />

            <div className="flex items-center gap-2 px-2">
              <button className="flex items-center gap-2">
                <FaKeyboard size={18} />
              </button>
              <button className="flex items-center gap-2">
                {shouldShowClear && (
                  <TfiClose
                    size={30}
                    className="hover:bg-[rgba(255,255,255,0.1)] p-1 rounded-full transition"
                    onClick={() => setInputValue("")}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <button className="bg-[#222222] px-6 rounded-r-4xl h-[40px]">
          <IoSearchOutline size={24} />
        </button>
        <button
          className="relative bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] active:bg-[rgba(255,255,255,0.3)] ml-4 p-3 border active:border-[rgba(255,255,255,0.3)] border-transparent rounded-full transition"
          onMouseEnter={() => setShowToolTip(true)}
          onMouseLeave={() => setShowToolTip(false)}
          onClick={() => console.log("clicked")}
        >
          <FaMicrophone size={18} />
          {showToolTip && (
            <div className="top-[150%] left-[50%] absolute bg-[rgba(255,255,255,0.2)] p-2 rounded-md text-[12px] text-nowrap -translate-x-[50%]">
              Wyszukaj głosowo
            </div>
          )}
        </button>
      </div>

      <div className="">right section</div>
    </div>
  );
};

export default TopBar;
