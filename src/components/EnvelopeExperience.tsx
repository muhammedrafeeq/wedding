'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2, Volume2 } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/weddingConfig';

interface EnvelopeExperienceProps {
  onOpen: () => void;
}

export const EnvelopeExperience: React.FC<EnvelopeExperienceProps> = ({ onOpen }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasStartedAudio, setHasStartedAudio] = useState(false);
  const [hasTriggeredFade, setHasTriggeredFade] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;

      // Check if video is already ready to play from cache
      if (video.readyState >= 3) {
        setIsVideoLoaded(true);
      }

      video.play().catch((err) => {
        console.warn('Autoplay initiated:', err);
      });
    }
  }, []);

  const handleVideoLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const handleTapAnywhere = async () => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video) return;

    setHasStartedAudio(true);
    video.muted = true;
    try {
      if (audio && audio.paused) {
        audio.currentTime = 0;
        await audio.play().catch((err) => console.warn('Audio play error:', err));
      }
      if (video.paused) {
        await video.play();
      }
    } catch (err) {
      console.warn('Video play error:', err);
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

      {/* Luxury Soft Ivory & Champagne Gold Loading Screen (Until Video Loads) */}
      <AnimatePresence>
        {!isVideoLoaded && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-[#F2F1E8] z-30 flex flex-col items-center justify-center p-6 text-center"
          >
            {/* Soft Ambient Glow */}
            <div className="absolute w-[350px] h-[350px] bg-radial from-[#ffffff] via-[#D2C08A]/25 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-3">
              <span className="font-arabic text-3xl sm:text-4xl text-[#D2C08A] font-bold tracking-wide">
                {WEDDING_CONFIG.bismillahText}
              </span>

              {/* Glowing Monogram Spinner */}
              <div className="relative w-16 h-16 rounded-full border-2 border-[#D2C08A] flex items-center justify-center bg-[#ffffff] shadow-lg my-3">
                <Loader2 className="w-8 h-8 text-[#9E824A] animate-spin" />
              </div>

              <h2 className="font-curly text-4xl sm:text-5xl text-[#3a2c18] gold-text-gradient">
                {WEDDING_CONFIG.groomName} & {WEDDING_CONFIG.brideName}
              </h2>

              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#9E824A] font-semibold mt-1">
                <Sparkles className="w-3.5 h-3.5 text-[#D2C08A] animate-pulse" />
                <span>Loading Invitation Video...</span>
                <Sparkles className="w-3.5 h-3.5 text-[#D2C08A] animate-pulse" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Element */}
      <video
        ref={videoRef}
        src={WEDDING_CONFIG.envelopeVideoUrl}
        autoPlay
        loop
        muted
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

      {/* Floating Champagne Gold Button Hint Overlay */}
      <AnimatePresence>
        {isVideoLoaded && !hasStartedAudio && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-10 z-30 pointer-events-none flex flex-col items-center px-4 text-center"
          >
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#D2C08A] via-[#9E824A] to-[#D2C08A] text-[#ffffff] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] px-7 py-3.5 rounded-full shadow-[0_10px_35px_rgba(158,130,74,0.45)] border-2 border-[#ffffff]/50 animate-bounce">
              <Volume2 className="w-4 h-4 text-[#ffffff] animate-pulse" />
              <span>Tap Golden Button / Screen to Play Sound 🎵</span>
              <Sparkles className="w-4 h-4 text-[#ffffff]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};
