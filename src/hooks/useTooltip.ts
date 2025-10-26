import { useState } from "react";

interface TooltipState {
  isVisible: boolean;
  text: string;
  position?: TooltipPosition;
}

type TooltipPosition = "bottom" | "left";

const useTooltip = () => {
  const [tooltip, setTooltip] = useState<TooltipState>({
    isVisible: false,
    text: "",
    position: "bottom",
  });

  const showTooltip = (text: string, position: TooltipPosition = "bottom") => {
    setTooltip({ isVisible: true, text, position });
  };

  const hideTooltip = () => {
    setTooltip({ isVisible: false, text: "" });
  };

  const tooltipHandlers = (text: string) => ({
    onMouseEnter: () => showTooltip(text),
    onMouseLeave: () => hideTooltip(),
  });

  return {
    tooltip,
    showTooltip,
    hideTooltip,
    tooltipHandlers,
  };
};

export default useTooltip;
