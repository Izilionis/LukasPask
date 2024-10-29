import React from "react";
import styles from "./GalleryVideos.module.css";

const VideoGallery = () => {
  const videoIds = [
    "e-nV62cp2NE",
    "BPsAswrcKB4",
    "6FIQ0SJsNKw",
    "rswC4iZnTR4",
    "fSFnPn81Aqw",
    "p2q2hGU6_-U",
    "Yi4m3oabSs8",
    "4AVayYKEiZA",
    "zQjo5xwByV8",
    "lzun1Br4oM0",
    "vrMw4Rh9_FE",
    "g90BQaOpoOE",
    "cCBVigMNWJA",
    "xemU_GGI02o",
    "MEjzWsWkjxc",
    "-4UcHpxAtIc",
  ];

  return (
    <div className={styles.videoContainer}>
      {videoIds.map((id) => (
        <div className={styles.video} key={id}>
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&loop=1&mute=1&playlist=${id}`}
            title={`YouTube video player ${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
