
import React, { useState } from 'react';
import VideoThumbnail from './VideoThumbnail';
import VideoModal from './VideoModal';
import {FadeInStagger} from "@/components/FadeIn";


import { motion, useReducedMotion } from 'framer-motion'

const videos = [
  {
    title: 'The ‘Kivugo’ Commercial, 2023',
    category: 'Conceptualizing, script writing, casting, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/v1692625893/Ndi_Rwema_TVC_cnftxc.mp4",
  },
  {
    title: 'The ‘Shoulder Tap’ Commercial, 2022',
    category: 'Conceptualizing, casting, script writing, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_scale,w_1280/v1692626422/Hatana_Teaser_Video_without_coming_soon_ljcyim.mp4",
  },
  {
    title: 'The Hatana Teaser Commercial, 2022',
    category: 'Conceptualizing, casting, script writing, sound production, video production and editing, animation',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/c_scale,w_1280/v1692626422/Hatana_Teaser_Video_without_coming_soon_ljcyim.mp4",
  },
  {
    title: 'The Wavumbuzi Award Ceremony, 2021',
    category: 'Conceptualizing, live streaming, video production, animation production',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/v1692625893/Ndi_Rwema_TVC_cnftxc.mp4",
  },
  {
    title: 'Sanlam Repositioning Ceremony, 2020',
    category: 'Planned,coordinated,and curated the Sanlam repositioning campaign',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
    videoUrl: "https://res.cloudinary.com/dyn4t1qng/video/upload/v1692625893/Ndi_Rwema_TVC_cnftxc.mp4",
  },
  // Add more video objects...
];

const PortfolioPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <div className="grid grid-cols-1 gap-4">
        {videos.map((video, index) => (
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FadeInStagger key={video.title}>
              <VideoThumbnail
                key={index}
                video={video}
                onClick={openVideoModal}
              />
            </FadeInStagger>
          </motion.div>

        ))}
      </div>
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={closeVideoModal} />
      )}
    </div>
  );
};

export default PortfolioPage;
