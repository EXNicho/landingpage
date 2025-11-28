"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChartBarIcon,
  CpuChipIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const DashboardPreview = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setSelectedImage(null);
    }, 300);
  };

  useEffect(() => {
    if (selectedImage) {
      setIsAnimating(true);
    }
  }, [selectedImage]);

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
          <div className="relative flex md:flex-row flex-col gap-8">
            {/* Main Panel */}
            <div className="md:w-1/2 glassmorphism p-6 rounded-lg overflow-hidden flex flex-col">
              <h3 className="text-xl font-bold text-white mb-4">
                Live Dashboard 1
              </h3>
              <div
                className="w-full h-full rounded-lg flex flex-col gap-4 cursor-pointer"
                onClick={() => openModal("/beranda.png")}
              >
                <Image
                  src="/beranda.png"
                  alt="Dashboard Preview 1"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover rounded-lg border border-cyan-400/20"
                />
              </div>
            </div>
            <div className="md:w-1/2 glassmorphism p-6 rounded-lg overflow-hidden flex flex-col">
              <h3 className="text-xl font-bold text-white mb-4">
                Live Dashboard 2
              </h3>
              <div
                className="w-full h-full rounded-lg flex flex-col gap-4 cursor-pointer"
                onClick={() => openModal("/editprofile.png")}
              >
                <Image
                  src="/editprofile.png"
                  alt="Dashboard Preview 2"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover object-left rounded-lg border border-cyan-400/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal with Animation */}
      {selectedImage && (
        <div
          className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-300 ${
            isAnimating ? "bg-opacity-75" : "bg-opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative max-w-6xl max-h-full transition-all duration-300 ease-in-out transform ${
              isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged Preview"
              width={1920}
              height={1080}
              className="w-full h-full object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DashboardPreview;

