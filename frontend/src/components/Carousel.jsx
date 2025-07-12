import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'Swap Fashion. Save the Planet.',
    image: 'https://source.unsplash.com/1600x900/?clothes,swap',
  },
  {
    id: 2,
    title: 'Refresh Your Wardrobe for Free',
    image: 'https://source.unsplash.com/1600x900/?fashion,thrift',
  },
  {
    id: 3,
    title: 'Join the Clothing Exchange Revolution',
    image: 'https://source.unsplash.com/1600x900/?vintage,clothing',
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto slide every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setCurrent((prev) => (prev + 1) % slides.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          <div className="w-full h-full bg-black/50 flex items-center justify-center px-6 text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white"
            >
              {slides[current].title}
            </motion.h2>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left/Right Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/60 transition"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/60 transition"
      >
        ›
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === i ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;