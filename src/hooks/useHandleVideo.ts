import { useState } from "react";

import { SUGGESTIONS } from "@/constants";

const useHandleVideo = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(SUGGESTIONS[0]);

  const handleScrolled = () => setScrolled((prev) => !prev);

  return {
    scrolled,
    currentVideo,
    handleScrolled,
  };
};

export default useHandleVideo;
