import React, { useEffect } from 'react';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1500,
      once: true,
    });
    
    // Disable scrolling on the entire document
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      // This cleanup function ensures scrolling stays disabled even if the component unmounts
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    };
  }, []);

  return (
    <main className="h-screen w-screen overflow-hidden relative">
      {/* Background image container with overlay for reducing brightness */}
      <div className="fixed inset-0 -z-10">
        {/* Background image */}
        <img
          className="object-cover w-full h-full"
          src="https://i.postimg.cc/JnTtZMhP/ff.jpg"
          alt="Background"
        />
        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Top horizontal glow effect */}
      <div
        className="absolute top-[3%] left-0 right-0 h-10 md:h-14
        shadow-[0_0_15px_15px_rgba(255,255,255,0.7)] -z-10"
      ></div>
      <div
        className="absolute top-[100%] left-0 right-0 h-10 md:h-14
        shadow-[0_0_15px_15px_rgba(255,255,255,0.7)] -z-10"
      ></div>
      
      {/* Content container */}
      <div className="h-full w-full flex flex-col">
        <Header />
        <Hero />
      </div>
    </main>
  );
};

export default App;