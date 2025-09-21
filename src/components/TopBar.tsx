"use client";

import { useState, useRef, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaKeyboard } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";
import Image from "next/image";
import Link from "next/link";

import HamburgerIcon from "./HamburgerIcon";

const TopBar = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const isInputFocusedStyles = isTyping
    ? "border-[#065fd4]"
    : "border-[#303030]";

  const shouldShowClear = !!inputValue;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

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
                    size={24}
                    className="hover:bg-[rgba(255,255,255,0.3)] p-1 rounded-full"
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
        <button>microphone</button>
      </div>

      <div className="">right section</div>
    </div>
  );
};

export default TopBar;
