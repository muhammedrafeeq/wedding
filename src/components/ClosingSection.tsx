'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, RotateCcw, Share2 } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/weddingConfig';

interface ClosingSectionProps {
  onReplay: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onReplay }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: WEDDING_CONFIG.socialSharing.title,
        text: WEDDING_CONFIG.socialSharing.description,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Invitation link copied to clipboard!');
    }
  };

  return (
    <section className="relative py-20 px-4 bg-[#F2F1E8] text-center overflow-hidden">
      
      {/* Soft Ivory Background Spotlight */}
      <div className="absolute inset-0 bg-radial from-[#ffffff] via-transparent to-transparent opacity-80 pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-panel rounded-3xl p-8 sm:p-12 border-2 border-[#D2C08A]/60 shadow-[0_20px_50px_rgba(158,130,74,0.12)] flex flex-col items-center"
        >
          {/* Heart Emblem */}
          <div className="w-14 h-14 bg-[#ffffff] rounded-full border border-[#D2C08A] flex items-center justify-center mb-6 shadow-sm">
            <Heart className="w-6 h-6 text-[#D2C08A] fill-[#D2C08A]/40" />
          </div>

          <span className="font-arabic text-3xl text-[#D2C08A] font-bold mb-2">
            {WEDDING_CONFIG.bismillahText}
          </span>

          <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#3a2c18] font-bold mb-3">
            We Look Forward to Celebrating With You
          </h2>

          <p className="font-serif-display text-lg text-[#9E824A] italic max-w-lg mx-auto mb-8">
            Your presence and prayers will make our Wedding truly blessed.
          </p>

          {/* Dual Signatures (Groom FIRST) */}
          <div className="my-4 text-center border-t border-b border-[#D2C08A]/40 py-6 w-full max-w-md">
            <h3 className="font-curly text-4xl sm:text-5xl text-[#3a2c18] gold-text-gradient">
              {WEDDING_CONFIG.groomName}
              <span className="font-script text-2xl text-[#D2C08A] mx-2">&</span>
              {WEDDING_CONFIG.brideName}
            </h3>
          </div>

          {/* Action Buttons (Replay Video Invitation & Share) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            
            <button
              onClick={onReplay}
              className="inline-flex items-center gap-2 bg-[#ffffff] border-2 border-[#D2C08A] text-[#3a2c18] font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-[#D2C08A]" />
              <span>Replay Video Envelope</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D2C08A] via-[#9E824A] to-[#D2C08A] text-[#ffffff] font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Invitation</span>
            </button>

          </div>

          {/* Footer Copyright */}
          <div className="mt-12 text-[10px] text-[#9E824A] uppercase tracking-[0.3em] font-medium flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#D2C08A]" />
            <span>Digital Wedding Invitation</span>
            <Sparkles className="w-3 h-3 text-[#D2C08A]" />
          </div>

        </motion.div>

      </div>

    </section>
  );
};
