import { fetchShorts } from "@/models/shortModel";
import { fetchVideos } from "@/models/videosModel";
import { YouTubeShort, YouTubeVideo } from "@/type/video.type";
import { useEffect, useState } from "react";

const organizeDataIntoSections = (videos: any[], shorts: any[]) => {
  return [
    {
      title: "Videos",
      data: videos.map((video: YouTubeVideo, index) => ({
        id: `video-${index}`,
        type: "video",
        content: video,
      })),
    },
    {
      title: "Shorts",
      data: shorts.map((short: YouTubeShort, index) => ({
        id: `short-${index}`,
        type: "short",
        content: short,
      })),
    },
  ];
};

export const useContentViewModel = () => {
  const [sections, setSections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [videos, shorts] = await Promise.all([
          fetchVideos(),
          fetchShorts(),
        ]);

        if (!videos || !shorts) {
          setSections([]);
          return;
        }

        //now lets organize our data into sections
        const organizedData = organizeDataIntoSections(videos, shorts);

        setSections(organizedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    sections,
    loading,
    error,
  };
};
