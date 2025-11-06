"use client";

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
import { Tooltip } from "@/components";
import { useTooltip } from "@/hooks";

const Topbar = () => {
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

  const voiceTooltip = useTooltip();
  const notificationTooltip = useTooltip();

  return (
    <div className="right-0 z-10 fixed flex justify-between items-center pt-2 pr-5 pl-1 w-[calc(100%-80px)] h-[56px]">
      <Link href="/">
        <Image
          src="/logo-full.png"
          alt="Youtube Premium"
          width={130}
          height={20}
          priority
        />
      </Link>
      <div className="flex justify-center items-center w-[740px]">
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
          className="relative bg-overlay-light hover:bg-overlay-medium active:bg-overlay-heavy ml-4 p-3 border border-transparent active:border-overlay-heavy rounded-full transition"
          {...voiceTooltip.tooltipHandlers("Wyszukaj głosowo")}
        >
          <FaMicrophone size={18} />
          {voiceTooltip.tooltip.isVisible && (
            <Tooltip text={voiceTooltip.tooltip.text} position="bottom" />
          )}
        </Button>
      </div>

      <div className="flex items-center gap-5">
        <Button className="bg-overlay-light hover:bg-overlay-medium active:bg-overlay-heavy ml-4 px-4 py-2 border border-transparent active:border-[rgba(255,255,255,0.3)] rounded-full transition">
          <div className="flex gap-3">
            <FaPlus size={18} />
            <span className="text-sm">Utwórz</span>
          </div>
        </Button>
        <Button
          className="relative"
          {...notificationTooltip.tooltipHandlers("Powiadomienia")}
        >
          <IoNotificationsOutline size={24} />
          <div className="-top-1 -right-2 absolute flex justify-center items-center rounded-lg w-5 h-4 text-[12px] bg-accent-red">
            9+
          </div>
          {notificationTooltip.tooltip.isVisible && (
            <Tooltip
              text={notificationTooltip.tooltip.text}
              position="bottom"
            />
          )}
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
