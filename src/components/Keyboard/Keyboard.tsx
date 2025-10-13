"use client";

import { useState, useEffect, useRef } from "react";

import { useAppContext } from "@/contexts/AppContext";

const Keyboard = () => {
  const { isKeyboardActive } = useAppContext();

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const keyboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialX = window.innerWidth - 517;
    const initialY = window.innerHeight - 214;
    setPosition({ x: initialX, y: initialY });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !keyboardRef.current) return;

    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const keyBoardWidth = keyboardRef.current.offsetWidth;
    const keyBoardHeight = keyboardRef.current.offsetHeight;

    const constrainedX = Math.max(
      0,
      Math.min(newX, viewportWidth - keyBoardWidth)
    );
    const constrainedY = Math.max(
      0,
      Math.min(newY, viewportHeight - keyBoardHeight)
    );

    setPosition({ x: constrainedX, y: constrainedY });
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const positionStyles = {
    position: "fixed" as const,
    left: position.x,
    top: position.y,
    userSelect: "none" as const,
  };

  if (isKeyboardActive === "off") return null;

  return (
    <div
      className="fixed bg-white p-2.5 w-[517px] h-[214px] text-black cursor-move"
      ref={keyboardRef}
      style={positionStyles}
      onMouseDown={handleMouseDown}
    >
      Keyboard
    </div>
  );
};

export default Keyboard;
