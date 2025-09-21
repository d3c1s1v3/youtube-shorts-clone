type Props = {
  onClick: () => void;
};

const HamburgerIcon = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center gap-1.5 hover:bg-[rgba(255,255,255,0.1)] active:bg-[rgba(255,255,255,0.3)] p-3 border active:border-[rgba(255,255,255,0.3)] border-transparent rounded-full w-[50px] h-[50px] transition-all"
    >
      <div className="bg-white w-full h-[1px]" />
      <div className="bg-white w-full h-[1px]" />
      <div className="bg-white w-full h-[1px]" />
    </button>
  );
};

export default HamburgerIcon;
