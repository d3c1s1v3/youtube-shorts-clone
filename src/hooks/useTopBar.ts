import { useState } from "react";

const useTopBar = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showToolTip, setShowToolTip] = useState(false);

  const isInputFocusedStyles = isTyping
    ? "border-[#065fd4]"
    : "border-[#303030]";

  const shouldShowClear = !!inputValue;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return {
    isInputFocusedStyles,
    shouldShowClear,
    isTyping,
    inputValue,
    showToolTip,
    setShowToolTip,
    handleChangeInput,
    setIsTyping,
    setInputValue,
  };
};

export default useTopBar;
