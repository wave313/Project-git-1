import React from "react";

const VideoPlayer = ({ videoUrl }) => (
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      className="w-full h-64"
      src={videoUrl}
      title="บทเรียน"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
);

export default VideoPlayer;
