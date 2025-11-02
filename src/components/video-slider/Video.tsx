interface VideoProps {
  label: string;
}

const Video = ({ label }: VideoProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center border rounded-xl w-[443px] h-[805px] translate-y-6">
      {label}
      <div className="absolute w-full h-full">
        <button className="top-10 left-10 absolute">1</button>
        <button className="top-10 left-25 absolute">2</button>
        <button className="top-10 right-10 absolute">3</button>
      </div>
    </div>
  );
};

export default Video;
