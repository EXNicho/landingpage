import React from 'react';
import { GlobeAltIcon, BoltIcon, ShieldCheckIcon, ChartBarIcon, LockClosedIcon, CogIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Auto-Scan Multi-Exchange',
    description: 'Memindai peluang arbitrage di berbagai bursa 24/7.',
    icon: GlobeAltIcon,
  },
  {
    name: 'High-Speed Execution',
    description: 'Eksekusi ultra-cepat untuk menangkap peluang sebelum hilang.',
    icon: BoltIcon,
  },
  {
    name: 'Risk Control AI',
    description: 'Sistem otomatis yang menyeimbangkan risiko dan potensi profit.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Realtime Dashboard',
    description: 'Pantau semua transaksi dan profit secara realtime.',
    icon: ChartBarIcon,
  },
  {
    name: 'Secure Encryption',
    description: 'Perlindungan tingkat tinggi untuk data dan API pengguna.',
    icon: LockClosedIcon,
  },
  {
    name: 'Zero Manual Work',
    description: 'Anda hanya mengatur, sistem yang bekerja sepenuhnya otomatis.',
    icon: CogIcon,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">Premium Features</h2>
          <p className="mt-4 text-lg text-gray-400">
            Everything you need for automated, intelligent, and secure trading.
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
