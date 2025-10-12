import { useCallback, useEffect, useState } from "react";

const useTopbar = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const shouldShowClear = !!inputValue;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const onFocus = useCallback(() => setIsTyping(true), [setIsTyping]);

  const onClear = useCallback(() => {
    setInputValue("");
    setIsTyping(false);
  }, [setInputValue, setIsTyping]);

  const handleSubmit = (selectedValue: string) => {
    setInputValue(selectedValue);

    setTimeout(() => {
      setIsTyping(false);
    }, 80);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isTyping) setIsTyping(false);
    };

    if (isTyping) document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isTyping, setIsTyping]);

  return {
    shouldShowClear,
    isTyping,
    inputValue,
    handleChangeInput,
    setIsTyping,
    onFocus,
    onClear,
    handleSubmit,
  };
};
export default useTopbar;
