import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {FadeIn} from "@/components/FadeIn";
import ReactPlayer from 'react-player/lazy'
import dynamic from "next/dynamic";

const DynamicVideoPlayer = dynamic(() => import("../components/VideoPlayer"), {
  ssr: false, // Avoid server-side rendering
});

const VideoThumbnail = ({ video, onClick }) => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <FadeIn>
      <div className="group relative overflow-hidden bg-neutral-100">
        <div
          className="cursor-none relative"
          onClick={() => onClick(video)}
        >
          {showVideo &&
            <DynamicVideoPlayer
              url={video.videoUrl}
              width="100%"
              height="100%"
              alt={video.title}
              className="h-[38rem] w-screen object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
          />}

          {/*<ReactPlayer
            url={video.thumbnailUrl}
          />*/}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
            <p className="font-display text-xl/8 font-semibold tracking-wide text-white">
              {video.title}
            </p>
            <p className="mt-2 text-gray-200">
              {video.category}
            </p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default VideoThumbnail;
