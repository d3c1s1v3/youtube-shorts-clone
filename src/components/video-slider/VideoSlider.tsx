"use client";

import { useVideo } from "@/hooks";
import { VideoSlideControls } from "@/components";
import { Video } from "@/components";
import { SUGGESTIONS } from "@/constants";

const VideoSlider = () => {
  const { current, prev, next } = useVideo();

  return (
    <div className="relative flex justify-center items-center w-full h-screen overflow-hidden">
      <div
        className="top-0 left-0 absolute w-full h-full transition-transform duration-300"
        style={{
          transform: `translateY(-${current * 100}vh)`,
          transitionTimingFunction: "cubic-bezier(0.7, 0.01, 0.3, 0.9)",
        }}
      >
        {SUGGESTIONS.slice(0.5).map(({ label }) => (
          <div
            className="flex justify-center items-center h-screen"
            key={label}
          >
            <Video label={label} />
          </div>
        ))}
      </div>
      <VideoSlideControls current={current} prev={prev} next={next} />
    </div>
  );
};

export default VideoSlider;
