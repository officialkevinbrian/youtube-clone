import ShortVideoFull from "@/components/ui/short-video-full";
import shortVideosList from "@/data/video-list.json";
import React from "react";

function ShortsScreen() {
  return (
    <>
      {shortVideosList
        .filter((item, index) => index === 9)
        .map((item) => (
          <ShortVideoFull video={item} key={item.video_title} />
        ))}
    </>
  );
}

export default ShortsScreen;
