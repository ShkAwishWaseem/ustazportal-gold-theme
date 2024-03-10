"use client"
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Whatshot } from '@mui/icons-material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    controls.start({ opacity: isVisible ? 1 : 0 });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, controls]);

  return (
    <motion.div
      className={`flex justify-evenly fixed bottom-0 right-0 z-40 bg-slate-900 p-5 w-full text-white px-4 py-4 opacity-0 transition-opacity duration-300 ease-in-out ${isVisible ? 'visible' : 'invisible'}`}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <div className=""><Whatshot /></div>
      <button className='text-sm bg-[#38664D] text-white duration-500 px-6 py-2 w-[200px] rounded hover:-translate-y-2 hover:bg-[#C0A842] '>Get a free trial</button>
      <button onClick={scrollToTop} className="text-2xl"><KeyboardArrowUpIcon /></button>
    </motion.div>
  );
};

export default ScrollToTopButton;
