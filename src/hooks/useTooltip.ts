import { truncate } from "fs/promises";
import { useState } from "react";

interface TooltipState {
  isVisible: boolean;
}

const useTooltip = () => {
  const [tooltip, setTooltip] = useState<TooltipState>({
    isVisible: false,
  });

  const showTooltip = () => setTooltip({ isVisible: true });
  const hideTooltip = () => setTooltip({ isVisible: false });

  const tooltipHandlers = () => ({
    onMouseEnter: () => showTooltip(),
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
