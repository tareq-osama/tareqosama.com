"use client"

// Features.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

interface Feature {
  id: string;
  category: string;
  title: string;
  imagePath: string;
}

const features: Feature[] = [
  {
    id: 'client-portal',
    category: 'Client Portal',
    title: 'White-labeled client portals that elevate your brand and streamline communication.',
    imagePath: '/corvex-dashboard.jpg'
  },
  {
    id: 'proposals',
    category: 'AI Proposals',
    title: 'Generate professional proposals in minutes with AI-powered content creation.',
    imagePath: '/corvex-dashboard.jpg'
  },
  {
    id: 'invoicing',
    category: 'Smart Invoicing',
    title: 'Professional invoicing with automated reminders and payment tracking.',
    imagePath: '/corvex-dashboard.jpg'
  },
  {
    id: 'project-management',
    category: 'Project Management',
    title: 'Comprehensive task and project management with real-time collaboration.',
    imagePath: '/corvex-dashboard.jpg'
  }
];

export default function FeaturesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="relative w-full bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center pt-24 pb-16 lg:pt-32 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-medium text-zinc-300 tracking-wide">FEATURES</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
              Where agency management
              <span className="block mt-2 text-zinc-300">becomes effortless</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Powerful tools designed specifically for modern agencies to streamline operations and delight clients.
            </p>
          </motion.div>
        </div>

        {/* Current Feature Info */}
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
            {features[currentIndex].category}
          </span>
          <h3 className="text-xl lg:text-3xl font-bold text-white max-w-4xl mx-auto leading-relaxed">
            {features[currentIndex].title}
          </h3>
        </motion.div>

        {/* Swiper Section */}
        <div className="relative mb-16">
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            grabCursor
            spaceBetween={50}
            centeredSlides
            loop={false}
            slidesPerView="auto"
            modules={[EffectCoverflow, Navigation]}
            className="features-swiper"
          >
            {features.map((feature, index) => (
              <SwiperSlide 
                key={feature.id} 
                className="w-[320px] sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px]"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                  <Image
                    src={feature.imagePath}
                    alt={feature.category}
                    fill
                    className="object-cover"
                    unoptimized
                    priority={index === currentIndex}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="bg-zinc-900/50 backdrop-blur-sm border-t border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between py-8 gap-6">
            {/* Feature Tabs */}
            <div className="relative w-full lg:w-auto">
              <div className="flex gap-8 overflow-x-auto scrollbar-hide py-2 px-1 w-full lg:w-auto">
                {features.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => swiper?.slideTo(index)}
                    className={`
                      relative text-sm font-medium whitespace-nowrap transition-all duration-300 py-2 px-1 flex-shrink-0
                      ${index === currentIndex 
                        ? 'text-white' 
                        : 'text-zinc-400 hover:text-zinc-200'
                      }
                    `}
                  >
                    {feature.category}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3 flex-shrink-0">
              <button 
                onClick={() => swiper?.slidePrev()}
                className="p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white transition-colors duration-200 border border-zinc-700"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => swiper?.slideNext()}
                className="p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white transition-colors duration-200 border border-zinc-700"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}