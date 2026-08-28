'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_CONFIG } from '@/config/weddingConfig';

interface EnvelopeExperienceProps {
  onOpen: () => void;
}

export const EnvelopeExperience: React.FC<EnvelopeExperienceProps> = ({ onOpen }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasTriggeredFade, setHasTriggeredFade] = useState(false);

  const handleTapAnywhere = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false; // Unmute audio on click
      try {
        await video.play();
      } catch (err) {
        console.warn('Play error:', err);
      }
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || hasTriggeredFade) return;

    // Trigger smooth fade 3 seconds before video ends
    if (video.duration && video.currentTime >= video.duration - 3.0) {
      setHasTriggeredFade(true);
      onOpen();
    }
  };

  const handleVideoEnded = () => {
    if (!hasTriggeredFade) {
      setHasTriggeredFade(true);
      onOpen();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: hasTriggeredFade ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      onClick={handleTapAnywhere}
      className="fixed inset-0 w-full h-[100dvh] bg-[#F2F1E8] overflow-hidden select-none touch-none cursor-pointer z-50 flex items-center justify-center"
    >
      {/* Video Thumbnail (Click Anywhere to Play) -> Fades 3s Before Video Completion */}
      <video
        ref={videoRef}
        src={WEDDING_CONFIG.envelopeVideoUrl}
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnded}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};
