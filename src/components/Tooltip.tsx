interface TooltipProps {
  text: string;
  position: "bottom" | "left";
}

const Tooltip = ({ text, position }: TooltipProps) => {
  return (
    <>
      {position === "bottom" && (
        <div className="top-[100%] left-[50%] absolute bg-overlay-medium p-2 rounded-md text-[12px] text-nowrap transition -translate-x-[50%] translate-y-3 animate-fade-in duration-200">
          {text}
        </div>
      )}
      {position === "left" && (
        <div className="top-[50%] absolute bg-overlay-medium p-2 rounded-md text-[12px] text-nowrap -translate-x-[100%] -translate-y-[50%] animate-fade-in">
          {text}
        </div>
      )}
    </>
  );
};

export default Tooltip;
