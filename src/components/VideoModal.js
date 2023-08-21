import React from 'react';
import { motion } from 'framer-motion';

const VideoModal = ({ video, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-3/4 h-3/4 relative">
        <button
          className="absolute top-0 right-0 p-4 text-white"
          onClick={onClose}
        >
          Close
        </button>
        <iframe
          className="w-full h-full"
          src={video.videoUrl}
          title={video.title}
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
};

export default VideoModal;
