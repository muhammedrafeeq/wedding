'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Play, Sparkles } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/weddingConfig';

interface EnvelopeExperienceProps {
  onOpen: () => void;
}

export const EnvelopeExperience: React.FC<EnvelopeExperienceProps> = ({ onOpen }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasTriggeredFade, setHasTriggeredFade] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      // Seek to 0.001s to freeze & display initial video thumbnail frame without autoplaying
      video.currentTime = 0.001;

      if (video.readyState >= 2) {
        setIsVideoLoaded(true);
      }
    }
  }, []);

  const handleVideoLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const handleTapAnywhere = async () => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video) return;

    if (!isPlaying) {
      setIsPlaying(true);
      video.muted = true;
      try {
        if (audio) {
          audio.currentTime = 0;
          await audio.play().catch((err) => console.warn('Audio play error:', err));
        }
        await video.play();
      } catch (err) {
        console.warn('Video play error:', err);
      }
    } else {
      if (video.paused) {
        try {
          if (audio) await audio.play().catch(console.warn);
          await video.play();
        } catch (err) {
          console.warn('Video play error:', err);
        }
      } else {
        video.pause();
        if (audio) audio.pause();
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

      {/* Clean Spinner Loading Screen Only */}
      <AnimatePresence>
        {!isVideoLoaded && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-[#F2F1E8] z-30 flex items-center justify-center"
          >
            <div className="relative w-16 h-16 rounded-full border-2 border-[#D2C08A] flex items-center justify-center bg-[#ffffff] shadow-lg">
              <Loader2 className="w-8 h-8 text-[#9E824A] animate-spin" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Element (Paused initially on thumbnail until tap/click) */}
      <video
        ref={videoRef}
        src={`${WEDDING_CONFIG.envelopeVideoUrl}#t=0.001`}
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoadedData}
        onCanPlay={handleVideoLoadedData}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnded}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Floating Champagne Gold Button Prompt Overlay */}
      <AnimatePresence>
        {isVideoLoaded && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-10 z-30 pointer-events-none flex flex-col items-center px-4 text-center"
          >
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#D2C08A] via-[#9E824A] to-[#D2C08A] text-[#ffffff] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] px-7 py-3.5 rounded-full shadow-[0_10px_35px_rgba(158,130,74,0.45)] border-2 border-[#ffffff]/50 animate-bounce">
              <Play className="w-4 h-4 fill-[#ffffff] text-[#ffffff]" />
              <span>Tap Golden Button / Screen to Open Invitation 🎵</span>
              <Sparkles className="w-4 h-4 text-[#ffffff]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};
