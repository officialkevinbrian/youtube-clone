import ShortVideoFull from "@/components/ui/short-video-full";
import shortVideosList from "@/data/video-list.json";
import React from "react";

function ShortsScreen() {
  return (
    <>
      {shortVideosList.map((item) => (
        <ShortVideoFull video={item} key={item.title} />
      ))}
    </>
  );
}

export default ShortsScreen;
