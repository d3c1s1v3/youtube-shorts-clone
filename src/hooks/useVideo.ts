import { useState, useEffect, useCallback, useRef } from "react";

import { SUGGESTIONS } from "@/constants";

const LAST_VIDEO = SUGGESTIONS.length - 1;
const SCROLL_COOLDOWN = 400;

const useVideo = () => {
  const [current, setCurrent] = useState(0);

  const coolDownRef = useRef(false);

  const prev = useCallback(() => {
    if (current === 0) return;
    setCurrent((c) => Math.min(c - 1, current));
  }, [current]);

  const next = useCallback(() => {
    if (current === LAST_VIDEO) return;
    setCurrent((c) => Math.min(c + 1, LAST_VIDEO));
  }, [current]);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (coolDownRef.current) return;
      if (e.deltaY > 0) next();
      if (e.deltaY < 0) prev();
      coolDownRef.current = true;
      setTimeout(() => {
        coolDownRef.current = false;
      }, SCROLL_COOLDOWN);
    },
    [prev, next]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  return {
    current,
    prev,
    next,
    handleWheel,
  };
};

export default useVideo;
