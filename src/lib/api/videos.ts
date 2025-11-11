export const fetchVideos = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/videos");
    if (!res.ok) throw new Error("Failed to fetch videos");
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
