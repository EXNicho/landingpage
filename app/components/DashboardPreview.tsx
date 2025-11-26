import React from 'react';
import { ChartBarIcon, CpuChipIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const DashboardPreview = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">Analytics & Dashboard Preview</h2>
          <p className="mt-4 text-lg text-gray-400">
            A glimpse into our powerful, intuitive, and data-rich trading dashboard.
          </p>
        </div>
        <div className="relative rounded-2xl glassmorphism p-8">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-900/10 rounded-2xl" />
          <div className="relative grid md:grid-cols-3 gap-8">
            {/* Left Panel */}
            <div className="md:col-span-1 space-y-8">
              <div className="glassmorphism p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Profit</span>
                      <span className="text-green-400">+25.8%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
                      <div className="bg-green-400 h-2.5 rounded-full w-[75%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Win Rate</span>
                      <span className="text-cyan-400">92%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
                      <div className="bg-cyan-400 h-2.5 rounded-full w-[92%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glassmorphism p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Active Bots</h3>
                <div className="flex items-center space-x-4">
                  <CpuChipIcon className="h-10 w-10 text-cyan-400" />
                  <div >
                    <p className="text-white font-bold">ETH/BTC Arbitrage</p>
                    <p className="text-gray-400 text-sm">Running...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Panel */}
            <div className="md:col-span-2 glassmorphism p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Profit & Loss</h3>
              <div className="w-full h-64 bg-gray-900/50 rounded-lg flex items-center justify-center">
                <ChartBarIcon className="h-24 w-24 text-cyan-400/50" />
                <p className="absolute text-white/50">Chart data placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;