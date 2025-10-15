import { useState, useEffect, useRef, useCallback } from "react";

const useDrag = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const keyboardRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
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
    },
    [isDragging, dragStart.x, dragStart.y]
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

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
  }, [isDragging, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    const initialX = window.innerWidth - 517;
    const initialY = window.innerHeight - 214;
    setPosition({ x: initialX, y: initialY });
  }, []);

  const positionStyles = {
    position: "fixed" as const,
    left: position.x,
    top: position.y,
    userSelect: "none" as const,
  };

  return {
    keyboardRef,
    handleMouseDown,
    positionStyles,
  };
};

export default useDrag;
