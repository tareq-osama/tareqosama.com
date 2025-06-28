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
    id: 'design',
    category: 'Design',
    title: 'A true design canvas, not just a visual HTML editor.',
    imagePath: '/screenshot.jpg'
  },
  {
    id: 'animations',
    category: 'Animations',
    title: 'A true design canvas, not just a visual HTML editor.',
    imagePath: '/screenshot.jpg'
  },
  {
    id: 'collaborate',
    category: 'Collaborate',
    title: 'A true design canvas, not just a visual HTML editor.',
    imagePath: '/screenshot.jpg'
  },
  {
    id: 'publish',
    category: 'Publish',
    title: 'A true design canvas, not just a visual HTML editor.',
    imagePath: '/screenshot.jpg'
  }
];

export default function FeaturesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="relative max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-24 pt-12 md:pt-24">
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            Where designing and
            <span className="block mt-2">building become one</span>
          </h2>
        </div>

        <div className="text-center mb-8 md:mb-16">
          <p className="text-blue-400 text-sm font-medium mb-2 md:mb-4">{features[currentIndex].category}</p>
          <h3 className="text-xl md:text-3xl font-bold text-white max-w-2xl mx-auto px-4">
            {features[currentIndex].title}
          </h3>
        </div>

        <div className="relative">
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
                className="w-[280px] sm:w-[480px] md:w-[720px] lg:w-[960px] xl:w-[1200px]"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={feature.imagePath}
                    alt={feature.category}
                    fill
                    className="object-cover"
                    unoptimized
                    priority={index === currentIndex}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        
      </div>
      <div className="mt-8 bg-black/90 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-[1800px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-6 gap-4 md:gap-0">
              <div className="flex gap-4 md:gap-8 overflow-x-auto pb-6 md:pb-0 w-full md:w-auto">
                {features.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => swiper?.slideTo(index)}
                    className={`
                      relative text-sm font-medium pb-6 whitespace-nowrap
                      transition-colors
                      ${index === currentIndex ? 'text-white' : 'text-gray-500 hover:text-gray-300'}
                    `}
                  >
                    {feature.category}
                    {index === currentIndex && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-px bg-white"
                        layoutId="activeTab"
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={() => swiper?.slidePrev()}
                  className="p-2 rounded-full bg-slate-500/15 text-white hover:bg-slate-800 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => swiper?.slideNext()}
                  className="p-2 rounded-full bg-slate-500/15 text-white hover:bg-slate-800 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}