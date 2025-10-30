"use client";

import { useRef, use } from "react";

import { useClickOutside } from "@/hooks";
import { SUGGESTIONS } from "@/constants";

interface SuggestionDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  handleSubmit: (selectedValue: string) => void;
}

const SuggestionDropdown = ({
  isOpen,
  onClose,
  handleSubmit,
}: SuggestionDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const displayedSuggestions = SUGGESTIONS.slice(0, 15);

  useClickOutside(isOpen, onClose, dropdownRef);

  if (!isOpen) return null;

  return (
    <div
      className="top-[120%] z-10 absolute bg-background-dark p-2 rounded-lg w-full"
      ref={dropdownRef}
    >
      <ul>
        {displayedSuggestions.map((suggestion) => (
          <li
            key={suggestion.label}
            className="hover:bg-overlay-medium p-2 rounded-md cursor-pointer"
            onClick={() => handleSubmit(suggestion.label)}
          >
            {suggestion.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionDropdown;
