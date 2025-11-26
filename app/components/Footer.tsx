import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-black w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-full h-full bg-gradient-to-t from-blue-900/50 to-transparent animate-pulse" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
          Ready to Start Trading Smarter?
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Join Quantum today and unlock the power of automated arbitrage intelligence.
        </p>
        <a
          href="#"
          className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 px-12 rounded-lg text-xl transition-colors duration-300 glow"
        >
          Get Started Now
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Quantum. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
