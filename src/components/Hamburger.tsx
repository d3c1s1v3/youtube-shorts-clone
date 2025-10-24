import { Button } from "@/components";

interface HamburgerProps {
  onClick: () => void;
}

const Hamburger = ({ onClick }: HamburgerProps) => {
  return (
    <Button
      onClick={onClick}
      className="flex flex-col justify-center gap-1.5 hover:bg-overlay-light active:bg-overlay-heavy p-3 border border-transparent active:border-overlay-heavy rounded-full w-[50px] h-[50px] transition-all"
    >
      <div className="bg-white w-full h-[1px]" />
      <div className="bg-white w-full h-[1px]" />
      <div className="bg-white w-full h-[1px]" />
    </Button>
  );
};

export default Hamburger;
