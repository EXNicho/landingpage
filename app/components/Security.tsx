import React from 'react';
import { ShieldCheckIcon, LockClosedIcon, FingerPrintIcon } from '@heroicons/react/24/outline';

const securityFeatures = [
];

const Security = () => {
  return (
    <section id="security" className="py-24 bg-gray-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature) => (
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

export default Security;
