'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Heart } from 'lucide-react';
import { WEDDING_CONFIG } from '@/config/weddingConfig';

export const ScratchToRevealDate: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const isDrawingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    // Draw Gold Scratch Surface Pattern
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#D2C08A');
    gradient.addColorStop(0.5, '#9E824A');
    gradient.addColorStop(1, '#D2C08A');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add subtle luxury sparkle text onto the scratch surface
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ SCRATCH HERE TO REVEAL DATE ✨', width / 2, height / 2);
  }, []);

  const getPos = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      const touch = e.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const scratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getPos(e);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    // Check scratched percentage threshold
    checkScratchPercentage(ctx, canvas.width, canvas.height);
  };

  const checkScratchPercentage = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const imageData = ctx.getImageData(0, 0, width, height);
    const pixels = imageData.data;
    let transparentCount = 0;
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentCount++;
      }
    }
    const percent = Math.round((transparentCount / (pixels.length / 4)) * 100);
    setScratchPercent(percent);

    if (percent > 45 && !isRevealed) {
      setIsRevealed(true);
    }
  };

  return (
    <section className="relative py-20 px-4 bg-[#F2F1E8] overflow-hidden text-center">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial from-[#ffffff] via-transparent to-transparent opacity-80 pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-2 mb-8"
        >
          <div className="flex items-center gap-2 text-[#9E824A] text-xs uppercase tracking-[0.25em] font-semibold">
            <Sparkles className="w-4 h-4 text-[#D2C08A]" />
            <span>Interactive Reveal</span>
            <Sparkles className="w-4 h-4 text-[#D2C08A]" />
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#3a2c18] font-bold">
            A Beautiful Date Awaits
          </h2>

          <p className="font-serif-display text-base text-[#9E824A] italic">
            Scratch the gold surface below to unveil the official Wedding date!
          </p>
        </motion.div>

        {/* Scratch Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-md h-56 rounded-3xl overflow-hidden glass-panel border-2 border-[#D2C08A] shadow-[0_20px_50px_rgba(158,130,74,0.15)] flex flex-col items-center justify-center p-6 cursor-pointer"
        >
          {/* Revealed Secret Content underneath */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#ffffff] via-[#F2F1E8] to-[#D2C08A]/30 p-6 text-center">
            
            <div className="w-10 h-10 bg-[#ffffff] rounded-full border border-[#D2C08A] flex items-center justify-center mb-2 shadow-sm">
              <Calendar className="w-5 h-5 text-[#D2C08A]" />
            </div>

            <h3 className="font-curly text-4xl sm:text-5xl text-[#3a2c18] gold-text-gradient mb-1">
              {WEDDING_CONFIG.weddingDayOfWeek}, {WEDDING_CONFIG.weddingDateDisplay}
            </h3>

            <p className="text-xs uppercase tracking-widest text-[#9E824A] font-semibold">
              at {WEDDING_CONFIG.weddingTime}
            </p>

            <div className="flex items-center gap-1.5 text-xs text-[#3a2c18] font-medium mt-2 bg-[#ffffff]/90 px-4 py-1.5 rounded-full border border-[#D2C08A]/40">
              <Heart className="w-3.5 h-3.5 text-[#D2C08A] fill-[#D2C08A]/40" />
              <span>{WEDDING_CONFIG.venueName}, {WEDDING_CONFIG.venueCity}</span>
            </div>
          </div>

          {/* Scratch Canvas Overlay */}
          <AnimatePresence>
            {!isRevealed && (
              <motion.canvas
                ref={canvasRef}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
                onMouseDown={() => (isDrawingRef.current = true)}
                onMouseUp={() => (isDrawingRef.current = false)}
                onMouseLeave={() => (isDrawingRef.current = false)}
                onMouseMove={scratch}
                onTouchStart={() => (isDrawingRef.current = true)}
                onTouchEnd={() => (isDrawingRef.current = false)}
                onTouchMove={scratch}
                className="absolute inset-0 w-full h-full z-10 touch-none"
              />
            )}
          </AnimatePresence>

        </motion.div>

        {/* Scratch Progress Helper Button */}
        {!isRevealed && (
          <button
            onClick={() => setIsRevealed(true)}
            className="mt-4 text-[11px] text-[#9E824A] uppercase tracking-widest font-semibold underline hover:text-[#3a2c18] transition-colors cursor-pointer"
          >
            Click to auto-reveal date
          </button>
        )}

      </div>

    </section>
  );
};
