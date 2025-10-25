"use client";

import { Button } from "@/components";
import { FaArrowDown } from "@/components/icons";

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
  const scrolled = current > 0;
  const buttonClasses = `w-14 h-14 bg-overlay-light p-4 rounded-full flex items-center justify-center`;
  const scrollButtonAnimation = scrolled
    ? "-translate-y-20"
    : "-translate-0 opacity-0";

  return (
    <div className="right-0 fixed flex flex-col justify-center gap-4 px-4 h-[300px]">
      <Button
        className={`${buttonClasses} transition bg-overlay-light hover:bg-overlay-medium active:bg-overlay-heavy`}
        onClick={next}
      >
        <FaArrowDown />
      </Button>
      <Button
        className={`${buttonClasses} absolute transition ${scrollButtonAnimation} bg-overlay-light hover:bg-overlay-medium active:bg-overlay-heavy -z-10`}
        onClick={prev}
      >
        <FaArrowDown className="rotate-180" />
      </Button>
    </div>
  );
};

export default VideoSlideControls;
