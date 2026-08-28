'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ZoomIn, Heart } from 'lucide-react';
import { WEDDING_CONFIG, GalleryItem } from '@/config/weddingConfig';

export const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section className="relative py-20 px-4 bg-[#F2F1E8] overflow-hidden">
      
      {/* Background Soft Ivory Glow */}
      <div className="absolute inset-0 bg-radial from-[#ffffff] via-transparent to-transparent opacity-80 pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center gap-2 mb-12"
        >
          <div className="flex items-center gap-2 text-[#9E824A] text-xs uppercase tracking-[0.25em] font-semibold">
            <Sparkles className="w-4 h-4 text-[#D2C08A]" />
            <span>Captured Memories</span>
            <Sparkles className="w-4 h-4 text-[#D2C08A]" />
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#3a2c18] font-bold">
            Moments of Our Celebration
          </h2>

          <p className="font-serif-display text-base text-[#9E824A] italic">
            Glimpses of love, joy, and togetherness
          </p>
        </motion.div>

        {/* Gallery Grid - Reduced Height 4/3 Aspect Ratio Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6 sm:gap-8">
          {WEDDING_CONFIG.images.gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel border-2 border-[#D2C08A]/70 shadow-[0_15px_40px_rgba(158,130,74,0.15)] cursor-pointer p-1.5 bg-gradient-to-b from-[#ffffff] to-[#D2C08A]/20"
            >
              <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a2c18]/80 via-[#3a2c18]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-[#ffffff]">
                  <div className="flex items-center justify-between">
                    <span className="font-curly text-xl text-[#D2C08A]">
                      {item.caption}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#ffffff]/25 backdrop-blur-md flex items-center justify-center border border-[#ffffff]/40">
                      <ZoomIn className="w-4 h-4 text-[#ffffff]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-[#3a2c18]/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg glass-panel rounded-3xl p-4 sm:p-6 border-2 border-[#D2C08A] shadow-2xl flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#F2F1E8] border border-[#D2C08A] flex items-center justify-center text-[#3a2c18] hover:scale-105 transition-transform cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#D2C08A]/50">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="mt-4 text-center">
                <p className="font-curly text-3xl text-[#3a2c18] gold-text-gradient">
                  {selectedImage.caption}
                </p>
                <div className="flex items-center justify-center gap-1.5 text-xs text-[#9E824A] mt-1 font-semibold">
                  <Heart className="w-3.5 h-3.5 text-[#D2C08A] fill-[#D2C08A]" />
                  <span>Muhammed Rafeeq & Jumana</span>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
