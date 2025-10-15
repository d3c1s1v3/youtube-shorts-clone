"use client";

import { createContext, useContext, useReducer } from "react";

import type { KeyboardActionT, KeyboardStateI, KeyI } from "@/types/keyboard";

interface KeyboardContextI {
  state: KeyboardStateI;
  toggleShift: () => void;
  toggleCapsLock: () => void;
  toggleVisibility: () => void;
}

interface KeyboardProviderProps {
  children: React.ReactNode;
}

const KeyboardContext = createContext<KeyboardContextI | null>(null);

const initialState: KeyboardStateI = {
  capsLock: false,
  shift: false,
  isVisible: false,
};

const keyboardReducer = (
  state: KeyboardStateI,
  action: KeyboardActionT
): KeyboardStateI => {
  switch (action.type) {
    case "TOGGLE_SHIFT":
      return { ...state, shift: !state.shift };
    case "TOGGLE_CAPS_LOCK":
      return { ...state, capsLock: !state.capsLock };
    case "TOGGLE_VISIBILITY":
      return { ...state, isVisible: !state.isVisible };
    default:
      return state;
  }
};

export const KeyboardProvider = ({ children }: KeyboardProviderProps) => {
  const [state, dispatch] = useReducer(keyboardReducer, initialState);

  const toggleShift = () => dispatch({ type: "TOGGLE_SHIFT" });
  const toggleCapsLock = () => dispatch({ type: "TOGGLE_CAPS_LOCK" });
  const toggleVisibility = () => dispatch({ type: "TOGGLE_VISIBILITY" });

  const value: KeyboardContextI = {
    state,
    toggleShift,
    toggleCapsLock,
    toggleVisibility,
  };

  return (
    <KeyboardContext.Provider value={value}>
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboardContext = () => {
  const context = useContext(KeyboardContext);
  if (!context) {
    throw new Error("useKeyboardContext must be used within KeyboardProvider");
  }
  return context;
};
