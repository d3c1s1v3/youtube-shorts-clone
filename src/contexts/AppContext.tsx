"use client";

import { createContext, useContext, ReactNode } from "react";

import { useTopbar } from "@/hooks";

interface AppContextI {
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
}

const AppContext = createContext<AppContextI | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const topbarState = useTopbar();

  const value = {
    ...topbarState,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
