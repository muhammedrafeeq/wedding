'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/weddingConfig';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      // September 27, 2026 at 11:00:00 AM local time
      const targetDate = new Date(2026, 8, 27, 11, 0, 0).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: mounted ? timeLeft.days : 0 },
    { label: 'Hours', value: mounted ? timeLeft.hours : 0 },
    { label: 'Minutes', value: mounted ? timeLeft.minutes : 0 },
    { label: 'Seconds', value: mounted ? timeLeft.seconds : 0 },
  ];

  return (
    <section className="relative py-16 px-4 bg-[#F2F1E8] flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Ambient Spotlight */}
      <div className="absolute inset-0 bg-radial from-[#ffffff] via-transparent to-transparent opacity-80 pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl">
        
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-2 mb-8"
        >
          <div className="flex items-center gap-2 text-[#9E824A] text-xs uppercase tracking-[0.25em] font-semibold">
            <Sparkles className="w-4 h-4 text-[#D2C08A]" />
            <span>The Sacred Moment Approaches</span>
            <Sparkles className="w-4 h-4 text-[#D2C08A]" />
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#3a2c18] font-bold">
            {WEDDING_CONFIG.nikahHeading}
          </h2>

          <div className="flex items-center gap-2 text-xs text-[#9E824A] font-medium mt-1">
            <Calendar className="w-3.5 h-3.5 text-[#D2C08A]" />
            <span>{WEDDING_CONFIG.weddingDayOfWeek}, {WEDDING_CONFIG.weddingDateDisplay} at {WEDDING_CONFIG.weddingTime}</span>
          </div>
        </motion.div>

        {/* 4 Countdown Counter Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-5 sm:p-6 rounded-2xl border-2 border-[#D2C08A]/60 flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(158,130,74,0.1)] relative"
            >
              <div className="font-serif-display text-4xl sm:text-5xl text-[#3a2c18] font-bold tracking-tight">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-xs uppercase tracking-widest text-[#9E824A] font-semibold mt-2">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};
