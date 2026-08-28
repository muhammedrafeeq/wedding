'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Clock, MapPin, ChevronDown } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/weddingConfig';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between pt-12 pb-8 px-4 text-center overflow-hidden bg-[#F2F1E8]">
      
      {/* Background Soft Ivory (#F2F1E8) Spotlight Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-radial from-[#ffffff] via-[#D2C08A]/15 to-transparent blur-3xl pointer-events-none" />

      {/* 1. Header Bismillah Calligraphy */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center gap-1.5 mt-2"
      >
        <span className="font-arabic text-3xl sm:text-4xl text-[#D2C08A] font-bold tracking-wide drop-shadow-sm">
          {WEDDING_CONFIG.bismillahText}
        </span>
        <div className="flex items-center gap-2 text-[#9E824A] text-xs uppercase tracking-[0.25em] font-semibold mt-1">
          <Sparkles className="w-3.5 h-3.5 text-[#D2C08A]" />
          <span>The Blessed Wedding</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D2C08A]" />
        </div>
      </motion.div>

      {/* 2. Central Islamic Arch Couple Portrait & English Names */}
      <div className="relative z-10 my-auto py-6 flex flex-col items-center w-full max-w-lg">
        
        {/* Single Arched Couple Photo Frame (couple.png) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative w-64 sm:w-72 aspect-[3/4] p-2 bg-gradient-to-b from-[#ffffff] via-[#F2F1E8] to-[#D2C08A]/30 rounded-t-[140px] rounded-b-2xl shadow-[0_20px_50px_rgba(158,130,74,0.2)] border-2 border-[#D2C08A]"
        >
          <div className="relative w-full h-full rounded-t-[132px] rounded-b-xl overflow-hidden border border-[#D2C08A]/50">
            <Image
              src={WEDDING_CONFIG.images.hero}
              alt={`${WEDDING_CONFIG.groomName} & ${WEDDING_CONFIG.brideName}`}
              fill
              priority
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3a2c18]/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Groom FIRST in Swirly Curly Script */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-6 text-center"
        >
          <h1 className="font-curly text-5xl sm:text-6xl text-[#3a2c18] gold-text-gradient leading-tight">
            {WEDDING_CONFIG.groomName}
          </h1>

          <div className="flex items-center justify-center gap-3 my-1">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D2C08A] to-transparent" />
            <span className="font-script text-3xl text-[#D2C08A]">&</span>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D2C08A] to-transparent" />
          </div>

          <h2 className="font-curly text-5xl sm:text-6xl text-[#3a2c18] gold-text-gradient leading-tight">
            {WEDDING_CONFIG.brideName}
          </h2>
        </motion.div>

      </div>

      {/* 3. Event Summary Details Pills (Date, Time, Venue) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 w-full max-w-md flex flex-col gap-2.5 mb-4"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
          
          <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 text-[#3a2c18] border border-[#D2C08A]/50">
            <Calendar className="w-4 h-4 text-[#D2C08A]" />
            <span>{WEDDING_CONFIG.weddingDayOfWeek}, {WEDDING_CONFIG.weddingDateDisplay}</span>
          </div>

          <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 text-[#3a2c18] border border-[#D2C08A]/50">
            <Clock className="w-4 h-4 text-[#D2C08A]" />
            <span>{WEDDING_CONFIG.weddingTime}</span>
          </div>

        </div>

        <div className="glass-panel px-5 py-2.5 rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm text-[#3a2c18] font-semibold border border-[#D2C08A]/50 w-full">
          <MapPin className="w-4 h-4 text-[#D2C08A] shrink-0" />
          <span className="truncate">{WEDDING_CONFIG.venueName}, {WEDDING_CONFIG.venueAddress}</span>
        </div>
      </motion.div>

      {/* 4. Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity } }}
        className="relative z-10 flex flex-col items-center gap-1 text-[#9E824A] text-[10px] uppercase tracking-widest font-semibold cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
        }}
      >
        <span>Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 text-[#D2C08A]" />
      </motion.div>

    </section>
  );
};
