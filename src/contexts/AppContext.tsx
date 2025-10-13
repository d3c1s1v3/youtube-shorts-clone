"use client";

import { createContext, use, ReactNode, useState } from "react";

import { useTopbar } from "@/hooks";

type KeyboardState = "off" | "on";

type AppContextType = {
  isTyping: boolean;
  inputValue: string;
  sidebarOpen?: boolean;
  shouldShowClear: boolean;
  setIsTyping: (typing: boolean) => void;
  setInputValue?: (value: string) => void;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (value: string) => void;
  onFocus: () => void;
  onClear: () => void;
  setSidebarOpen?: (open: boolean) => void;
  isKeyboardActive: KeyboardState;
  toggleKeyboard: () => void;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isKeyboardActive, setIsKeyboardActive] =
    useState<KeyboardState>("off");
  const topbarState = useTopbar();

  const toggleKeyboard = () =>
    setIsKeyboardActive((prev) => (prev === "off" ? "on" : "off"));

  const value = {
    ...topbarState,
    isKeyboardActive,
    toggleKeyboard,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = use(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
