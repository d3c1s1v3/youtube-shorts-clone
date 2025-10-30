import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react";

const useDrag = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const keyboardRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      const start = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
      setIsDragging(true);
      isDraggingRef.current = true;
      dragStartRef.current = start;
    },
    [position]
  );

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDraggingRef || !keyboardRef.current) return;

    const newX = e.clientX - dragStartRef.current.x;
    const newY = e.clientY - dragStartRef.current.y;

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
  }, []);

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  useLayoutEffect(() => {
    const el = keyboardRef.current;
    const keyboardWidth = el?.offsetWidth || 517;
    const keyboardHeight = el?.offsetHeight || 214;

    const initialX = window.innerWidth - keyboardWidth;
    const initialY = window.innerHeight - keyboardHeight;

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
    positionStyles,
    handleMouseDown,
  };
};

export default useDrag;
