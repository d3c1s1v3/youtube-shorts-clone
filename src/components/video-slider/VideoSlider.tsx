"use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

import { VideoSlideControls } from "@/components";
import { Video } from "@/components";
import { SUGGESTIONS } from "@/constants";

const VideoSlider = () => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{
        height: `${SUGGESTIONS.length * 100}vh`,
      }}
    >
      {SUGGESTIONS.map(({ label }) => (
        <div className="flex items-center h-screen" key={label}>
          <Video label={label} />
        </div>
      ))}

      <VideoSlideControls />
    </div>
  );
};

export default VideoSlider;
