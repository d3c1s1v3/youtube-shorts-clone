import { fetchVideos } from "@/lib/api/videos";

import { VideoSlider } from "@/components";

const ShortsPage = async () => {
  const videos = await fetchVideos();

  console.log(videos);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <VideoSlider videos={videos} />
    </div>
  );
};

export default ShortsPage;
