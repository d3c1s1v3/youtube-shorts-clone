"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useAppContext } from "@/contexts";
import {
  FaPlus,
  FaMicrophone,
  IoSearchOutline,
  IoNotificationsOutline,
} from "@/components/icons";

import { Button, SuggestionDropdown, SearchInput } from "@/components";
import { useTooltip } from "@/hooks";

const Topbar = () => {
  const [voiceSearch, setVoiceSearch] = useState<"off" | "on">("off");

  const toggleVoiceSearch = () => {
    const state = voiceSearch === "off" ? "on" : "off";
    setVoiceSearch(state);
    console.log("Voice Search:", state);
  };

  const {
    shouldShowClear,
    isTyping,
    inputValue,
    handleChangeInput,
    setIsTyping,
    onFocus,
    onClear,
    handleSubmit,
  } = useAppContext();

  const { tooltip, tooltipHandlers } = useTooltip();

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
          <Button className="bg-background-dark px-6 rounded-r-4xl h-[40px]">
            <IoSearchOutline size={24} />
          </Button>
        </div>
        <Button
          className="relative bg-overlay-light hover:bg-overlay-medium active:bg-overlay-heavy ml-4 p-3 border active:border-overlay-heavy border-transparent rounded-full transition"
          {...tooltipHandlers("Wyszukaj głosowo")}
          onClick={toggleVoiceSearch}
        >
          <FaMicrophone size={18} />
          {tooltip.isVisible && (
            <div className="top-[150%] left-[50%] absolute bg-overlay-medium p-2 rounded-md text-[12px] text-nowrap -translate-x-[50%]">
              {tooltip.text}
            </div>
          )}
        </Button>
      </div>

      <div className="flex items-center gap-5">
        <Button className="bg-overlay-light hover:bg-overlay-medium active:bg-overlay-heavy ml-4 px-4 py-2 border active:border-[rgba(255,255,255,0.3)] border-transparent rounded-full transition">
          <div className="flex gap-3">
            <FaPlus size={18} />
            <span className="text-sm">Utwórz</span>
          </div>
        </Button>
        <Button className="relative">
          <IoNotificationsOutline size={24} />
          <div className="-top-1 -right-2 absolute flex justify-center items-center rounded-lg w-5 h-4 text-[12px] bg-accent-red">
            9+
          </div>
        </Button>
        <Button>
          <div className="flex justify-center items-center bg-avatar-icon rounded-full w-8 h-8 text-[18px]">
            O
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
