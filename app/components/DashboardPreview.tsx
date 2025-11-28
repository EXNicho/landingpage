import React from "react";
import Image from "next/image"; // Import Image component
import {
  ChartBarIcon,
  CpuChipIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const DashboardPreview = () => {
  return (
    <section className="py-24 bg-black" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white">
            Dashboard Preview
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            A glimpse into our powerful, intuitive, and data-rich trading
            dashboard.
          </p>
        </div>
        <div className="relative rounded-2xl glassmorphism p-8">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-900/10 rounded-2xl" />
          <div className="relative grid md:grid-cols-2 gap-8">
            {/* Main Panel */}
            <div className="md:col-span-1 glassmorphism p-6 rounded-lg overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-4">
                Live Dashboard 1
              </h3>
              <div className="w-full h-auto rounded-lg flex flex-col gap-4">
                <Image
                  src="/beranda.png"
                  alt="Dashboard Preview 1"
                  width={1200}
                  height={800}
                  layout="responsive"
                  className="rounded-lg border border-cyan-400/20"
                />
              </div>
            </div>
            <div className="md:col-span-1 glassmorphism p-6 rounded-lg overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-4">
                Live Dashboard 2
              </h3>
              <div className="w-full h-auto rounded-lg flex flex-col gap-4">
                <Image
                  src="/editprofile.png"
                  alt="Dashboard Preview 2"
                  width={1200}
                  height={800}
                  layout="responsive"
                  className="rounded-lg border border-cyan-400/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
