"use client";

import { useEffect, useState } from "react";

const VIDEOS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const VideoSlider = () => {
  const [currVid, setCurrVid] = useState<number>(1);

  const handleSwipe = (direction: "up" | "down") => {
    if (direction === "up") setCurrVid((prev) => prev + 1);
    if (direction === "down") setCurrVid((prev) => prev - 1);
    if (!direction) return;
  };

  useEffect(() => {
    console.log(currVid);
  }, [currVid]);

  const buttonClasses = `w-14 h-14 bg-overlay-light p-4 rounded-full`;

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <h1>Video Slider</h1>
      <div className="flex gap-2 w-[300px]">
        <button onClick={() => handleSwipe("down")} className={buttonClasses}>
          p
        </button>
        <button onClick={() => handleSwipe("up")} className={buttonClasses}>
          n
        </button>
      </div>
    </div>
  );
};

export default VideoSlider;
