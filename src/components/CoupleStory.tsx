'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/weddingConfig';

export const CoupleStory: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-[#F2F1E8] overflow-hidden">
      
      {/* Background Soft Ivory Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-radial from-[#ffffff] via-[#D2C08A]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center gap-2 mb-16"
        >
          <div className="flex items-center gap-2 text-[#9E824A] text-xs uppercase tracking-[0.25em] font-semibold">
            <Sparkles className="w-4 h-4 text-[#D2C08A]" />
            <span>Two Souls Joined in Faith</span>
            <Sparkles className="w-4 h-4 text-[#D2C08A]" />
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#3a2c18] font-bold">
            {WEDDING_CONFIG.weddingStoryTitle}
          </h2>

          <p className="font-serif-display text-lg text-[#9E824A] italic max-w-xl mx-auto mt-1">
            "{WEDDING_CONFIG.weddingStoryText}"
          </p>
        </motion.div>

        {/* Groom & Bride Dual Arched Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* 1. Groom Card (Muhammed Rafeeq FIRST) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-panel p-6 rounded-3xl border-2 border-[#D2C08A]/60 flex flex-col items-center text-center shadow-[0_15px_40px_rgba(158,130,74,0.1)] relative"
          >
            {/* Groom Arched Photo */}
            <div className="relative w-56 aspect-[3/4] p-1.5 bg-gradient-to-b from-[#ffffff] to-[#D2C08A]/30 rounded-t-[110px] rounded-b-xl border border-[#D2C08A] overflow-hidden mb-6 shadow-md">
              <div className="relative w-full h-full rounded-t-[104px] rounded-b-lg overflow-hidden">
                <Image
                  src={WEDDING_CONFIG.images.groom}
                  alt={WEDDING_CONFIG.groomName}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <h3 className="font-curly text-4xl text-[#3a2c18] gold-text-gradient my-1">
              {WEDDING_CONFIG.groomName}
            </h3>

            <span className="text-xs uppercase tracking-widest text-[#9E824A] font-semibold mb-3">
              The Groom
            </span>

            <p className="text-xs text-[#3a2c18] leading-relaxed font-medium">
              {WEDDING_CONFIG.groomBio}
            </p>
          </motion.div>

          {/* 2. Bride Card (Jumana SECOND) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-panel p-6 rounded-3xl border-2 border-[#D2C08A]/60 flex flex-col items-center text-center shadow-[0_15px_40px_rgba(158,130,74,0.1)] relative"
          >
            {/* Bride Arched Photo */}
            <div className="relative w-56 aspect-[3/4] p-1.5 bg-gradient-to-b from-[#ffffff] to-[#D2C08A]/30 rounded-t-[110px] rounded-b-xl border border-[#D2C08A] overflow-hidden mb-6 shadow-md">
              <div className="relative w-full h-full rounded-t-[104px] rounded-b-lg overflow-hidden">
                <Image
                  src={WEDDING_CONFIG.images.bride}
                  alt={WEDDING_CONFIG.brideName}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <h3 className="font-curly text-4xl text-[#3a2c18] gold-text-gradient my-1">
              {WEDDING_CONFIG.brideName}
            </h3>

            <span className="text-xs uppercase tracking-widest text-[#9E824A] font-semibold mb-3">
              The Bride
            </span>

            <p className="text-xs text-[#3a2c18] leading-relaxed font-medium">
              {WEDDING_CONFIG.brideBio}
            </p>
          </motion.div>

        </div>

        {/* Central Interlocking Hearts Icon */}
        <div className="flex justify-center mt-12">
          <div className="w-12 h-12 bg-[#ffffff] rounded-full border border-[#D2C08A] flex items-center justify-center shadow-sm">
            <Heart className="w-5 h-5 text-[#D2C08A] fill-[#D2C08A]/40" />
          </div>
        </div>

      </div>

    </section>
  );
};
