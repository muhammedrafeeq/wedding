'use client';

import React, { useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/weddingConfig';

interface MusicPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onTogglePlay }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log('Audio autoplay prevented:', err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio
        ref={audioRef}
        src={WEDDING_CONFIG.musicTrackUrl}
        loop
        preload="auto"
      />

      <button
        onClick={onTogglePlay}
        aria-label={isPlaying ? 'Mute Background Music' : 'Play Background Music'}
        className="group relative flex items-center justify-center w-12 h-12 bg-[#ffffff]/95 backdrop-blur-md rounded-full border-2 border-[#D2C08A] shadow-[0_8px_25px_rgba(158,130,74,0.25)] hover:scale-110 transition-all duration-300 active:scale-95 cursor-pointer"
      >
        {/* Equalizer Wave Bar Animations */}
        {isPlaying ? (
          <div className="flex items-end justify-center gap-0.5 w-5 h-5">
            <span className="w-1 bg-[#D2C08A] rounded-full animate-pulse h-4" />
            <span className="w-1 bg-[#9E824A] rounded-full animate-pulse h-2" style={{ animationDelay: '0.2s' }} />
            <span className="w-1 bg-[#D2C08A] rounded-full animate-pulse h-5" style={{ animationDelay: '0.4s' }} />
            <span className="w-1 bg-[#9E824A] rounded-full animate-pulse h-3" style={{ animationDelay: '0.1s' }} />
          </div>
        ) : (
          <VolumeX className="w-5 h-5 text-[#9E824A]" />
        )}

        {/* Pulse Glow Ring */}
        {isPlaying && (
          <div className="absolute -inset-1 rounded-full border border-[#D2C08A]/60 animate-ping pointer-events-none opacity-40" />
        )}
      </button>
    </div>
  );
};
