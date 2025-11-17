import { useState, useRef, useEffect } from "react";

const useInput = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const showClearButton = !!inputValue;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const onFocus = () => setIsTyping(true);

  const onClear = () => {
    setInputValue("");
    setIsTyping(false);
  };

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSubmit = (selectedValue: string) => {
    setInputValue(selectedValue);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      timeoutRef.current = null;
    }, 80);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isTyping) setIsTyping(false);
    };

    if (isTyping) document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isTyping]);

  return {
    showClearButton,
    isTyping,
    inputValue,
    handleChangeInput,
    setIsTyping,
    onFocus,
    onClear,
    handleSubmit,
  };
};

export default useInput;
