'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { WEDDING_CONFIG } from '@/config/weddingConfig';

interface EnvelopeExperienceProps {
  onOpen: () => void;
}

export const EnvelopeExperience: React.FC<EnvelopeExperienceProps> = ({ onOpen }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasTriggeredFade, setHasTriggeredFade] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      // Seek slightly past 0s on iOS Safari to force WebKit frame decoding and eliminate initial blank screen
      video.currentTime = 0.001;
    }
  }, []);

  const handleTapAnywhere = async () => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = true; // Mute video native track so /bgm/audio.mpeg is the sole clean audio
      try {
        if (audio) {
          audio.currentTime = 0;
          audio.play().catch((err) => console.warn('Audio play error:', err));
        }
        await video.play();
      } catch (err) {
        console.warn('Video play error:', err);
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
      {/* Synchronized Background Audio Track */}
      <audio
        ref={audioRef}
        src={WEDDING_CONFIG.musicTrackUrl}
        preload="auto"
      />

      {/* Video Thumbnail with Complete iOS Safari Fixes (muted, playsInline, poster, preload=auto, #t=0.001) */}
      <video
        ref={videoRef}
        src={`${WEDDING_CONFIG.envelopeVideoUrl}#t=0.001`}
        poster={WEDDING_CONFIG.images.hero}
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnded}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};
