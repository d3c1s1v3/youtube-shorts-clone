"use client";

import { useVideo } from "@/hooks";
import { VideoSlideControls } from "@/components";
import { Video } from "@/components";
import { SUGGESTIONS } from "@/constants";

const VideoSlider = () => {
  const { current, nextVideo, handlePrev, handleNext } = useVideo();

  return (
    <div className="relative flex justify-center items-center pl-24 w-full h-screen overflow-hidden">
      <div
        className="top-0 left-0 absolute w-full h-full transition-transform duration-300"
        style={{
          transform: `translateY(-${current * 100}vh)`,
          transitionTimingFunction: "cubic-bezier(0.7, 0.01, 0.3, 0.9)",
        }}
      >
        {SUGGESTIONS.slice(0, nextVideo).map(({ label }) => (
          <div
            className="relative flex justify-center items-center h-full"
            key={label}
          >
            <Video label={label} />
            <div className="bottom-0 left-24 absolute bg-red-300 w-[500px] h-[300px]"></div>
          </div>
        ))}
      </div>
      <VideoSlideControls
        current={current}
        prev={handlePrev}
        next={handleNext}
      />
    </div>
  );
};

export default VideoSlider;
