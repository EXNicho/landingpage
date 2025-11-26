import React from 'react';
import { ShieldCheckIcon, LockClosedIcon, FingerPrintIcon } from '@heroicons/react/24/outline';

const securityFeatures = [
  {
    name: 'Advanced Encryption',
    description: 'Your data is protected with industry-leading encryption protocols, ensuring privacy and security at all times.',
    icon: LockClosedIcon,
  },
  {
    name: 'Regulatory Compliance',
    description: 'We adhere to the highest financial regulatory standards, providing a trustworthy and compliant trading environment.',
    icon: ShieldCheckIcon,
  },
  {
    name: '2FA & Biometric Security',
    description: 'Enhance your account security with two-factor authentication and biometric login options for ultimate protection.',
    icon: FingerPrintIcon,
  },
];

const Security = () => {
  return (
    <section id="security" className="py-24 bg-gray-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">Unwavering Security & Transparency</h2>
          <p className="mt-4 text-lg text-gray-400">
            Trust is the foundation of our platform. We prioritize your security and operate with complete transparency.
          </p>
        </div>
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
