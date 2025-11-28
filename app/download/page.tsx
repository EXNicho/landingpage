import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header'; // Import the Header component

const DownloadPage = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black">
      <Header hideGetStartedButton={true} /> {/* Hide the Get Started button on the download page */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-full h-full bg-gradient-to-b from-blue-900/10 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
          Download <span className="text-cyan-400">Quantum</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Get started with the most powerful automated arbitrage trading system.
        </p>
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <a href="https://github.com/EXNicho/QUANTUM/releases/download/Quantum-Arbitrage/Quantum.Arbitrage.zip" className="p-8 rounded-2xl glassmorphism glow flex flex-col items-center justify-center">
            <ArrowDownTrayIcon className="h-12 w-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold text-white">Windows x64 Executable</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
