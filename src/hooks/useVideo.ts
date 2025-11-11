import { useState, useEffect, useCallback, useRef } from "react";

import { SUGGESTIONS } from "@/constants";

const LAST_VIDEO = SUGGESTIONS.length - 1;
const SCROLL_COOLDOWN = 400;
const SCROLL_THRESHOLD = 60;

const useVideo = () => {
  const [current, setCurrent] = useState(0);

  const coolDownRef = useRef(false);

  const handlePrev = useCallback(() => {
    if (current === 0) return;
    setCurrent((c) => Math.min(c - 1, current));
  }, [current]);

  const handleNext = useCallback(() => {
    if (current === LAST_VIDEO) return;
    setCurrent((c) => Math.min(c + 1, LAST_VIDEO));
  }, [current]);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (coolDownRef.current) return;
      if (Math.abs(e.deltaY) < SCROLL_THRESHOLD) return;
      if (e.deltaY > 0) handleNext();
      if (e.deltaY < 0) handlePrev();
      coolDownRef.current = true;
      setTimeout(() => {
        coolDownRef.current = false;
      }, SCROLL_COOLDOWN);
    },
    [handlePrev, handleNext]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  return {
    current,
    handlePrev,
    handleNext,
    handleWheel,
  };
};

export default useVideo;
