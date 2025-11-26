"use client";
import React from 'react';

const testimonials = [
  {
    quote: 'Quantum has completely transformed my trading strategy. The automated arbitrage system is incredibly powerful and has consistently delivered impressive returns.',
    author: 'John Doe',
    title: 'Crypto Trader',
  },
  {
    quote: "As someone new to automated trading, I was amazed by how easy it was to get started with Quantum. The interface is intuitive, and the results speak for themselves.",
    author: 'Jane Smith',
    title: 'Retail Investor',
  },
  {
    quote: 'The speed and reliability of Quantum are unmatched. I can trust the system to execute trades flawlessly, even in the most volatile market conditions.',
    author: 'Samuel Lee',
    title: 'Institutional Trader',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-full h-full bg-gradient-to-b from-blue-900/30 to-transparent animate-pulse" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-16">
          Trusted by Traders Worldwide
        </h2>
        <div className="relative h-64">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`absolute w-full transition-opacity duration-1000 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="max-w-3xl mx-auto">
                <p className="text-2xl text-gray-300 mb-8">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-white text-xl">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
