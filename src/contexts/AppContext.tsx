"use client";

import { createContext, useContext, ReactNode } from "react";

import useTopbar from "@/hooks/useTopar";

type AppContextType = {
  isTyping: boolean;
  inputValue: string;
  showToolTip: boolean;
  setIsTyping: (typing: boolean) => void;
  setInputValue?: (value: string) => void;
  setShowToolTip: (show: boolean) => void;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (value: string) => void;
  onFocus: () => void;
  onClear: () => void;
  shouldShowClear: boolean;
  sidebarOpen?: boolean;
  setSidebarOpen?: (open: boolean) => void;
};

const AppContext = createContext<AppContextType | null>(null);

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
