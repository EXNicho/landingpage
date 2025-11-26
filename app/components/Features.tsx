import React from 'react';
import { BeakerIcon, BoltIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'AI-Powered Arbitrage',
    description: 'Our proprietary AI continuously scans thousands of assets across multiple exchanges to identify and execute profitable arbitrage opportunities in real-time.',
    icon: BeakerIcon,
  },
  {
    name: 'Lightning-Fast Execution',
    description: 'Engineered for speed, our system executes trades in milliseconds, ensuring you never miss an opportunity in the fast-paced crypto market.',
    icon: BoltIcon,
  },
  {
    name: 'Advanced Analytics',
    description: 'Gain a competitive edge with our comprehensive analytics dashboard. Track your performance, analyze market trends, and optimize your trading strategy.',
    icon: ChartBarIcon,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">Why Choose Quantum?</h2>
          <p className="mt-4 text-lg text-gray-400">
            Our platform is built on three core principles: intelligence, speed, and transparency.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="p-8 rounded-2xl glassmorphism glow">
              <feature.icon className="h-12 w-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{feature.name}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
