"use client";

import { Button } from "@/components";
import { FaArrowDown } from "@/components/icons";
import useHandleVideo from "@/hooks/useHandleVideo";

const VideoSlideControls = () => {
  const { scrolled, handleScrolled } = useHandleVideo();
  const buttonClasses = `w-14 h-14 bg-overlay-light p-4 rounded-full flex items-center justify-center`;
  const scrollButtonAnimation = scrolled
    ? "-translate-y-20"
    : "-translate-0 opacity-0";

  return (
    <div className="right-0 fixed flex flex-col justify-center gap-4 px-4 h-[300px]">
      <Button className={buttonClasses}>
        <FaArrowDown />
      </Button>
      <Button
        className={`${buttonClasses} absolute transition duration-500 ${scrollButtonAnimation}`}
        onClick={handleScrolled}
      >
        <FaArrowDown className="rotate-180" />
      </Button>
    </div>
  );
};

export default VideoSlideControls;
