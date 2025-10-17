"use client";

import { useRef, use } from "react";

import { useClickOutside } from "@/hooks";
import { SUGGESTIONS } from "@/constants";

interface SuggestionDropdownProps {
  handleSubmit: (selectedValue: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const SuggestionDropdown = ({
  isOpen,
  onClose,
  handleSubmit,
}: SuggestionDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const displayedSuggestions = SUGGESTIONS.slice(0, 15);

  useClickOutside(dropdownRef, onClose, isOpen);

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
