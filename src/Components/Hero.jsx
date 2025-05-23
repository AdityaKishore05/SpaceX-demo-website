import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { SiMailgun } from 'react-icons/si';
import Spline from '@splinetool/react-spline';
import { FaRegHeart } from "react-icons/fa";


const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="relative w-full overflow-hidden select-none">
      {/* Main container */}
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center justify-between md:py-20">
        {/* Text Content */}
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
                data-aos-duration= "1000"
          className="z-10 w-full lg:w-1/2 pt-10 lg:pt-0">
          <div className="flex flex-col items-center lg:items-start max-w-md mx-auto lg:mx-0">
            {/* Badge */}
            <div className="flex items-center justify-center gap-2 px-4 py-2 mb-16 md:mb-8 rounded-full bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20">
              <SiMailgun className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">NEW PLATFORM</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-center lg:text-left mb-6">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-2">
                PLACE FOR
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                ASTRONAUTS
              </span>
            </h1>

            {/* Description */}
            <p className="text-center lg:text-left text-base md:text-lg text-white mb-10 max-w-md font-medium">
            Join SpaceX's elite astronaut team as we journey to new frontiers. Experience our groundbreaking missions, cutting-edge spacecraft, and the pioneering spirit driving humanity's multiplanetary future.</p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 sm:w-auto">
              <a 
                className="flex flex-row items-center justify-center gap-2 py-2 px-4 rounded-full font-semibold tracking-wider transition-all duration-300 hover:bg-white hover:text-black text-lg backdrop-blur-xs shadow-[0_0_5px_3px_white]"
                href="#"
              >
                SEE MORE <FaArrowRight className="w-4 h-4" />
              </a>
              <a 
                className="flex flex-row items-center justify-center gap-2 py-2 px-4 rounded-full font-semibold tracking-wider transition-all duration-300 hover:bg-white hover:text-black text-lg backdrop-blur-xs shadow-[0_0_5px_3px_white]"
                href="#"
              >
                JOIN US <FaRegHeart className="w-4 h-4"/>
              </a>
            </div>
          </div>
        </div>

        {/* 3D Model Container */}
        <div className="w-full lg:w-1/2 h-96 md:h-[500px] lg:h-full relative mt-12 lg:mt-0">
             
          {/* Spline 3D object */}
          {windowWidth > 768 && (
            <div>
              <Spline
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration= "1000"
                className="w-full h-full ml-30"
                scene="https://prod.spline.design/jeVzQSaHENWb6HmG/scene.splinecode"
              />
            </div>
)}
          {/* Gradient overlay for mobile */}
          <div className="absolute bottom-0 left-0 right-0 h-24 lg:hidden"></div>
        </div>
      </div>
  
    </main>
  );
};

export default Hero;