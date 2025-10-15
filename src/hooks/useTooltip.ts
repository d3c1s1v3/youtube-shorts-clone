import { useState, useRef } from "react";

interface ToolTipState {
  isVisible: boolean;
  text: string;
}

const useTooltip = () => {
  const [tooltip, setTooltip] = useState<ToolTipState>({
    isVisible: false,
    text: "",
  });

  const targetRef = useRef<HTMLElement | null>(null);

  const showTooltip = (text: string) => {
    setTooltip({ isVisible: true, text });
  };

  const hideTooltip = () => {
    setTooltip({ isVisible: false, text: "" });
  };

  const tooltipHandlers = (text: string) => ({
    onMouseEnter: () => showTooltip(text),
    onMouseLeave: () => hideTooltip(),
    ref: targetRef,
  });

  return {
    tooltip,
    showTooltip,
    hideTooltip,
    tooltipHandlers,
    targetRef,
  };
};

export default useTooltip;
