import { RefObject, useEffect } from "react";

const useClickOutside = (
  ref: RefObject<HTMLDivElement | null>,
  callback: () => void,
  enabled = true
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isOutsideClick =
        ref.current && !ref.current.contains(e.target as Node);
      if (isOutsideClick) callback();
    };
    if (enabled) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [enabled, callback, ref]);

  return {
    enabled,
    callback,
    ref,
  };
};

export default useClickOutside;
