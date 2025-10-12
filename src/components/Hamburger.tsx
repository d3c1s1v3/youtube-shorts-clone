import { Button } from "@/components";

type Props = {
  onClick: () => void;
};

const Hamburger = ({ onClick }: Props) => {
  return (
    <Button
      onClick={onClick}
      className="flex flex-col justify-center gap-1.5 hover:bg-overlay-light active:bg-overlay-heavy p-3 border active:border-overlay-heavy border-transparent rounded-full w-[50px] h-[50px] transition-all"
    >
      <div className="bg-white w-full h-[1px]" />
      <div className="bg-white w-full h-[1px]" />
      <div className="bg-white w-full h-[1px]" />
    </Button>
  );
};

export default Hamburger;
