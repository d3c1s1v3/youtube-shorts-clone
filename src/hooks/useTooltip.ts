import { useState, useRef, useCallback } from "react";

type ToolTipState = {
  isVisible: boolean;
  text: string;
};

const useTooltip = () => {
  const [tooltip, setTooltip] = useState<ToolTipState>({
    isVisible: false,
    text: "",
  });

  const targetRef = useRef<HTMLElement | null>(null);

  const showTooltip = useCallback((text: string) => {
    setTooltip({ isVisible: true, text });
  }, []);

  const hideTooltip = useCallback(() => {
    setTooltip({ isVisible: false, text: "" });
  }, []);

  const tooltipHandlers = useCallback(
    (text: string) => ({
      onMouseEnter: () => showTooltip(text),
      onMouseLeave: () => hideTooltip(),
      ref: targetRef,
    }),
    [showTooltip, hideTooltip]
  );

  return {
    tooltip,
    showTooltip,
    hideTooltip,
    tooltipHandlers,
    targetRef,
  };
};

export default useTooltip;
