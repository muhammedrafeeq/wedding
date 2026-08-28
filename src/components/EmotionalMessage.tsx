'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/weddingConfig';

export const EmotionalMessage: React.FC = () => {
  return (
    <section className="relative py-16 px-4 bg-[#F2F1E8] flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Background Soft Ivory Spotlight */}
      <div className="absolute inset-0 bg-radial from-[#ffffff] via-transparent to-transparent opacity-80 pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl">
        
        {/* Main Invitation Card with Gold Foil Trim */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1 }}
          className="glass-panel rounded-3xl p-8 sm:p-12 border-2 border-[#D2C08A]/60 shadow-[0_20px_50px_rgba(158,130,74,0.1)] relative"
        >
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#D2C08A]" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#D2C08A]" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#D2C08A]" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#D2C08A]" />

          {/* Heart Icon Badge */}
          <div className="w-12 h-12 bg-[#ffffff] rounded-full border border-[#D2C08A] flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Heart className="w-5 h-5 text-[#D2C08A] fill-[#D2C08A]/30" />
          </div>

          {/* Headline */}
          <h3 className="font-serif-heading text-lg sm:text-xl text-[#9E824A] uppercase tracking-widest font-semibold mb-4">
            {WEDDING_CONFIG.invitationMessageHeadline}
          </h3>

          {/* Quranic Verse Callout */}
          <div className="my-6 py-4 px-6 bg-[#ffffff]/80 rounded-2xl border border-[#D2C08A]/40 shadow-inner">
            <p className="font-serif-display text-xl sm:text-2xl text-[#3a2c18] italic leading-relaxed">
              "{WEDDING_CONFIG.emotionalQuote}"
            </p>
          </div>

          {/* Invitation Message Body */}
          <p className="font-serif-display text-lg sm:text-xl text-[#3a2c18] leading-relaxed max-w-xl mx-auto my-6">
            {WEDDING_CONFIG.invitationMessageBody}
          </p>

          {/* Signature Centerpiece */}
          <div className="mt-8 pt-6 border-t border-[#D2C08A]/40 flex flex-col items-center gap-2">
            
            <div className="flex items-center gap-2 text-[#9E824A] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D2C08A]" />
              <span>With Love & Prayers</span>
              <Sparkles className="w-3.5 h-3.5 text-[#D2C08A]" />
            </div>

            {/* English Signature */}
            <p className="font-curly text-4xl sm:text-5xl text-[#3a2c18] gold-text-gradient mt-2">
              {WEDDING_CONFIG.groomName} & {WEDDING_CONFIG.brideName}
            </p>
          </div>

        </motion.div>

      </div>

    </section>
  );
};
