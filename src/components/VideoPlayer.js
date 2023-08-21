import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={url}
        className="react-player"
        width="100%"
        height="100%"
        controls // Show video controls
      />
    </div>
  );
};

export default VideoPlayer;
