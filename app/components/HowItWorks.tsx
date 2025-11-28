import React from 'react';
import { MagnifyingGlassIcon, BoltIcon, BanknotesIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    name: 'Step 1 — Market Scanning',
    description: 'Sistem memindai puluhan pasar dan bursa secara otomatis untuk menemukan perbedaan harga.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Step 2 — Smart Execution',
    description: 'Algoritma mengeksekusi transaksi arbitrage dengan kecepatan tinggi dan risiko terkendali.',
    icon: BoltIcon,
  },
  {
    name: 'Step 3 — Profit Automation',
    description: 'Profit dicatat secara otomatis, transparan, dan dapat dipantau dari dashboard kapan saja.',
    icon: BanknotesIcon,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="pt-0 pb-12 mt-16" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">How It Works</h2>
          <p className="mt-4 text-lg text-gray-400">
            Our automated system works in three simple steps.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.name}
              className="p-8 rounded-2xl glassmorphism text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-900/50 mx-auto mb-6">
                <step.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.name}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
