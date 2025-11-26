import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 flex items-center justify-center text-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-blue-900 via-transparent to-transparent rounded-full animate-spin-slow" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-cyan-400 font-semibold">
            Realtime Execution · Smart Risk Control · Multi-Exchange Scanning
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
          Trade Smarter with Automated Arbitrage Intelligence
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Sistem perdagangan otomatis yang menganalisis pasar, mengeksekusi
          peluang arbitrage, dan memaksimalkan profit — tanpa intervensi manual.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 glow"
          >
            Mulai Sekarang
          </a>
          <a
            href="#HowItWorks"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            Lihat Cara Kerjanya
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
