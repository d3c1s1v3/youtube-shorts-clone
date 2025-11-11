"use client";

import { useVideo } from "@/hooks";
import { VideoDescription, VideoSliderControls } from "@/components";
import { Video } from "@/components";
import { VideoI } from "@/types";

interface VideoSliderProps {
  videos: VideoI[];
}

const VideoSlider = ({ videos }: VideoSliderProps) => {
  const { current, handlePrev, handleNext } = useVideo();

  const videoSwapStyle = {
    transform: `translateY(-${current * 100}vh)`,
    transitionTimingFunction: "cubic-bezier(0.7, 0.01, 0.3, 0.9)",
  };

  return (
    <div className="relative flex justify-center items-center pl-24 w-full h-screen overflow-hidden">
      <div
        className="top-0 left-0 absolute w-full h-full transition-transform duration-300"
        style={videoSwapStyle}
      >
        {videos.slice(0, videos.length - 1).map(({ label }) => (
          <div
            className="relative flex justify-center items-center h-full"
            key={label}
          >
            <Video label={label} />
            <VideoDescription />
          </div>
        ))}
      </div>
      <VideoSliderControls
        current={current}
        prev={handlePrev}
        next={handleNext}
      />
    </div>
  );
};

export default VideoSlider;
