import { useState } from "react";

import { SUGGESTIONS } from "@/constants";

const LAST_VIDEO = SUGGESTIONS.length - 1;

const useVideo = () => {
  const [current, setCurrent] = useState(0);

  function prev() {
    if (current === 0) return;
    setCurrent((c) => Math.min(c - 1, current));
  }

  const next = () => {
    if (current === LAST_VIDEO) return;
    setCurrent((c) => Math.min(c + 1, LAST_VIDEO));
  };

  return {
    current,
    prev,
    next,
  };
};

export default useVideo;
