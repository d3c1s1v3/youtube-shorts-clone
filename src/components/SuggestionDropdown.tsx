"use client";

import { useClickOutside } from "@/hooks/useClickOutside";
import { useRef } from "react";

import { SUGGESTIONS } from "@/constants";

type Props = {
  handleSubmit: (selectedValue: string) => void;
  isOpen: boolean;
  onClose: () => void;
};

const SuggestionDropdown = ({ handleSubmit, isOpen, onClose }: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, onClose, isOpen);

  const displayedSuggestions = SUGGESTIONS.slice(0, 15);

  if (!isOpen) return null;

  return (
    <div
      className="top-[120%] z-10 absolute bg-[#222222] p-2 rounded-lg w-full"
      ref={dropdownRef}
    >
      <ul>
        {displayedSuggestions.slice(0, 15).map((suggestion) => (
          <li
            key={suggestion.label}
            className="hover:bg-[rgba(255,255,255,0.2)] p-2 rounded-md cursor-pointer"
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
