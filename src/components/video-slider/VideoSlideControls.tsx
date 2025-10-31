"use client";

import { Button } from "@/components";
import { FaArrowDown } from "@/components/icons";
import { useTooltip } from "@/hooks";

interface VideoSlideControlsProps {
  current: number;
  prev: () => void;
  next: () => void;
}

const VideoSlideControls = ({
  current,
  prev,
  next,
}: VideoSlideControlsProps) => {
  const prevTooltip = useTooltip();
  const nextTooltip = useTooltip();

  const scrolled = current > 0;
  const buttonClasses = `w-14 h-14 bg-overlay-light p-4 rounded-full flex items-center justify-center`;
  const scrollButtonAnimation = scrolled
    ? "-translate-y-20"
    : "-translate-0 opacity-0";

  return (
    <div className="right-0 fixed flex flex-col justify-center gap-4 px-4 h-[300px]">
      <Button
        className={`${buttonClasses} absolute transition ${scrollButtonAnimation} duration-200 bg-overlay-light hover:bg-overlay-medium active:bg-overlay-heavy -z-10 border border-transparent active:border-overlay-heavy`}
        onClick={prev}
        {...prevTooltip.tooltipHandlers("Poprzedni film")}
      >
        <FaArrowDown className="rotate-180" />
        {prevTooltip.tooltip.isVisible && (
          <div className="top-[50%] absolute bg-overlay-medium p-2 rounded-md text-[12px] text-nowrap -translate-x-[100%] -translate-y-[50%] animate-fade-in">
            {prevTooltip.tooltip.text}
          </div>
        )}
      </Button>
      <Button
        className={`${buttonClasses} transition duration-200 bg-overlay-light hover:bg-overlay-medium active:bg-overlay-heavy border border-transparent active:border-overlay-heavy`}
        onClick={next}
        {...nextTooltip.tooltipHandlers("Następny film")}
      >
        <FaArrowDown />
        {nextTooltip.tooltip.isVisible && (
          <div className="top-[50%] absolute bg-overlay-medium p-2 rounded-md text-[12px] text-nowrap -translate-x-[100%] -translate-y-[50%] animate-fade-in">
            {nextTooltip.tooltip.text}
          </div>
        )}
      </Button>
    </div>
  );
};

export default VideoSlideControls;
