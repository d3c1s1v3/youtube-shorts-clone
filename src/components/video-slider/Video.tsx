interface VideoProps {
  label: string;
}

const Video = ({ label }: VideoProps) => {
  return (
    <div className="flex justify-center items-center bg-gray-500 rounded-xl w-[600px] h-9/10">
      {label}
    </div>
  );
};

export default Video;
