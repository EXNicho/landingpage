import React from "react";
import {
  GlobeAltIcon,
  BoltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  LockClosedIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Auto-Scan",
    description: "Scans for arbitrage opportunities on exchanges 24/7.",
    icon: GlobeAltIcon,
  },
  {
    name: "Analytic & Insights",
    description: "Real-time performance analytics and in-depth reports.",
    icon: BoltIcon,
  },
  {
    name: "Risk Control ",
    description:
      "An automated system that balances risk and profit potential.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Realtime Dashboard",
    description: "Monitor all transactions and profits in real-time.",
    icon: ChartBarIcon,
  },
  {
    name: "Secure Encryption",
    description: "High-level protection for user data and APIs.",
    icon: LockClosedIcon,
  },
  {
    name: "Zero Manual Work",
    description:
      "You just set it up, the system works completely automatically.",
    icon: CogIcon,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-900/20" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">
            Premium Features
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Everything you need for automated, intelligent, and secure trading.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="p-8 rounded-2xl glassmorphism glow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <feature.icon className="h-12 w-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.name}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
