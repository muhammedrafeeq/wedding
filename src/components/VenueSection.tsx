'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Calendar, Clock, Sparkles } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/weddingConfig';

export const VenueSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-[#F2F1E8] overflow-hidden">
      
      {/* Soft Ivory Background Radial Glow */}
      <div className="absolute inset-0 bg-radial from-[#ffffff] via-transparent to-transparent opacity-80 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center gap-2 mb-14"
        >
          <div className="flex items-center gap-2 text-[#9E824A] text-xs uppercase tracking-[0.25em] font-semibold">
            <Sparkles className="w-4 h-4 text-[#D2C08A]" />
            <span>Venue & Location</span>
            <Sparkles className="w-4 h-4 text-[#D2C08A]" />
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#3a2c18] font-bold">
            Where We Say I Do
          </h2>

          <p className="font-serif-display text-lg text-[#9E824A] italic max-w-xl mx-auto mt-1">
            Join us at our beautiful venue as we celebrate our holy union.
          </p>
        </motion.div>

        {/* Venue Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-panel rounded-3xl p-8 sm:p-12 border-2 border-[#D2C08A]/60 shadow-[0_20px_50px_rgba(158,130,74,0.12)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Venue Auditorium Image */}
          <div className="lg:col-span-6 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#D2C08A] shadow-md">
            <Image
              src={WEDDING_CONFIG.images.auditorium}
              alt={WEDDING_CONFIG.venueName}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3a2c18]/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Venue Info & Schedule */}
          <div className="lg:col-span-6 flex flex-col items-start text-left gap-4">
            
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9E824A] font-semibold bg-[#ffffff]/80 px-3 py-1 rounded-full border border-[#D2C08A]/40">
              <MapPin className="w-3.5 h-3.5 text-[#D2C08A]" />
              <span>Auditorium Location</span>
            </div>

            <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#3a2c18] font-bold leading-tight">
              {WEDDING_CONFIG.venueName}
            </h3>

            <p className="text-sm text-[#3a2c18] font-medium leading-relaxed">
              {WEDDING_CONFIG.venueAddress}, {WEDDING_CONFIG.venueCity}
            </p>

            <div className="w-full h-[1px] bg-[#D2C08A]/40 my-1" />

            {/* Schedule Pills */}
            <div className="flex flex-col gap-2.5 w-full text-xs text-[#3a2c18] font-semibold">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#D2C08A] shrink-0" />
                <span>{WEDDING_CONFIG.weddingDayOfWeek}, {WEDDING_CONFIG.weddingDateDisplay}</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D2C08A] shrink-0" />
                <span>Wedding Ceremony at {WEDDING_CONFIG.weddingTime}</span>
              </div>
            </div>

            {/* Google Maps Directions Button */}
            <a
              href={WEDDING_CONFIG.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D2C08A] via-[#9E824A] to-[#D2C08A] text-[#ffffff] font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all mt-3 cursor-pointer w-full sm:w-auto text-center"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
};
