import { useCallback, useState } from "react";

const useTopbar = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showToolTip, setShowToolTip] = useState(false);

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

  return {
    shouldShowClear,
    isTyping,
    inputValue,
    showToolTip,
    setShowToolTip,
    handleChangeInput,
    setIsTyping,
    onFocus,
    onClear,
    handleSubmit,
  };
};
export default useTopbar;
