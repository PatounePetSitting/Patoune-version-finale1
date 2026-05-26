import { useState, useEffect, useRef } from 'react';
import { Testimonial } from '../types';
import { Star, Quote, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TestimonialsProps {
  testimonials: Testimonial[];
  language: 'fr' | 'en';
  translations: any;
}

export default function Testimonials({ testimonials, language, translations }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Clear interval on unmount
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        handleNext();
      }, 5500);
    }
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const activeTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  // Magnified lux rating stars
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-8 w-8 sm:h-9 sm:w-9 transition-all drop-shadow-[0_2px_10px_rgba(245,158,11,0.35)] ${
            i < rating 
              ? 'text-amber-500 fill-amber-500 hover:scale-110 active:scale-95 cursor-pointer' 
              : 'text-stone-200'
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-charcoal-luxe tracking-tight">
          <span>{translations[language].reviewsTitle}</span>
        </h2>
        <p className="text-stone-600 text-sm md:text-base">
          {translations[language].reviewsSubtitle}
        </p>
      </div>

      {/* Main Interactive Slider Box */}
      <div 
        className="relative max-w-4xl mx-auto mt-8 px-4"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Decorative Quote Icon on Top Right background */}
        <div className="absolute top-0 right-10 text-stone-100 select-none pointer-events-none transition-all">
          <Quote className="h-32 w-32 rotate-180 fill-current text-stone-100/70" />
        </div>

        {/* Carousel Card Container */}
        <div className="min-h-[380px] sm:min-h-[340px] flex items-center justify-center relative overflow-hidden bg-white/60 backdrop-blur-md rounded-3xl border-2 border-stone-200/90 shadow-xl p-6 sm:p-10 md:p-12">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeTestimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full space-y-6 md:space-y-8 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header elements inside the card: Pet sticker, rating & date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Pet Name & Badge */}
                  <div className="inline-flex items-center gap-2 self-start bg-amber-500/10 text-amber-800 text-sm font-bold px-3.5 py-1.5 rounded-xl border border-amber-500/25 shadow-2xs">
                    <Heart className="h-4 w-4 text-amber-600 fill-amber-600" />
                    <span>
                      {activeTestimonial.petName} — {activeTestimonial.petType === 'dog' ? (language === 'fr' ? '🐶 Golden Retriever d\'Exception' : '🐶 Premium Golden Retriever') : activeTestimonial.petType === 'cat' ? (language === 'fr' ? '🐱 Chat Royal' : '🐱 Royal Cat') : '🐹 NAC'}
                    </span>
                  </div>

                  {/* Verified tag */}
                  <span className="text-[11px] select-none uppercase font-mono tracking-widest font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100 self-start sm:self-auto">
                    ✓ {translations[language].verifiedOwner}
                  </span>
                </div>

                {/* Highly Prominent Luxury Golden Review Rating Box */}
                <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-4 sm:p-5 rounded-2xl border-2 border-amber-500/40 shadow-sm inline-flex flex-col sm:flex-row items-center gap-4.5">
                  <div className="flex items-center gap-1.5 shrink-0 bg-white/85 px-3 py-1.5 rounded-lg border border-amber-500/20 shadow-2xs">
                    {renderStars(activeTestimonial.rating)}
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="block text-xs font-black text-amber-800 uppercase tracking-widest font-mono">
                      {language === 'fr' ? "NOTATION EXCELLENCE : 5.0 / 5.0" : "EXCELLENCE SCORE: 5.0 / 5.0"}
                    </span>
                    <span className="text-[11px] text-stone-500 font-sans block mt-0.5">
                      {language === 'fr' ? "Services hôteliers & villas de grand luxe approuvés" : "Approved for luxury hotel & private villa stays"}
                    </span>
                  </div>
                </div>

                {/* Review Core text with gorgeous typography */}
                <div className="pt-2">
                  <p className="text-stone-850 text-base sm:text-lg md:text-xl font-medium italic leading-relaxed text-stone-800 font-serif">
                    "{activeTestimonial.comment[language]}"
                  </p>
                </div>
              </div>

              {/* Author Info footer inside the card */}
              <div className="border-t border-stone-150 pt-5 mt-4 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-lg font-serif font-extrabold text-charcoal-luxe leading-tight">
                    {activeTestimonial.author}
                  </h4>
                  <p className="text-[11px] text-stone-500 font-mono mt-1 uppercase tracking-wider font-semibold">
                    📍 {activeTestimonial.location} • <span className="text-stone-400 font-normal">{activeTestimonial.date}</span>
                  </p>
                </div>

                {/* Subtle swipe helper on mobile */}
                <span className="text-[10px] text-stone-400 font-mono hidden md:inline">
                  {language === 'fr' ? "Défilement automatique actif" : "Auto-scrolling active"}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrow Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[-15px] sm:left-[-25px] z-10">
          <button
            onClick={handlePrev}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-stone-200 text-stone-800 hover:text-amber-600 hover:border-amber-400 hover:shadow-lg active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 pointer-events-none" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-[-15px] sm:right-[-25px] z-10">
          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-stone-200 text-stone-800 hover:text-amber-600 hover:border-amber-400 hover:shadow-lg active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 pointer-events-none" />
          </button>
        </div>
      </div>

      {/* Dots Index Indicators */}
      <div className="flex items-center justify-center gap-2 select-none">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              index === currentIndex 
                ? 'w-8 bg-amber-500 border border-amber-600' 
                : 'w-2.5 bg-stone-300 hover:bg-stone-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
