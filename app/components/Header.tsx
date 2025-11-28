"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  hideGetStartedButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ hideGetStartedButton = false }) => {
  const pathname = usePathname();
  const isDownloadPage = pathname === '/download';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getHref = (hash: string) => {
    return isDownloadPage ? `/${hash}` : hash;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <svg
                className="h-10 w-auto text-cyan-400 animate-spin-slow"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
                <path d="M12 2 L12 6" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" />
                <path d="M22 12 L18 12" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" />
                <path d="M12 22 L12 18" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" />
                <path d="M2 12 L6 12" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" />
                <g strokeWidth="1.5" transform="scale(0.7) translate(5, 5)">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" />
                  <path d="M14 14L17 17" stroke="currentColor" />
                </g>
              </svg>
              <span className="ml-3 text-2xl font-bold text-white">Quantum</span>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href={getHref('#features')}
                className="text-gray-300 px-3 py-2 rounded-md text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-cyan-400 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                Features
              </Link>
              <Link
                href={getHref('#testimonials')}
                className="text-gray-300 px-3 py-2 rounded-md text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-cyan-400 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                Testimonials
              </Link>
              <Link
                href={getHref('#contact')}
                className="text-gray-300 px-3 py-2 rounded-md text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-cyan-400 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                Contact
              </Link>
            </div>
          </nav>
          {!hideGetStartedButton && (
            <div className="hidden md:block">
              <Link
                href="/download"
                className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href={getHref('#features')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Features
            </Link>
            <Link href={getHref('#testimonials')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Testimonials
            </Link>
            <Link href={getHref('#contact')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            {!hideGetStartedButton && (
              <div className="mt-4">
                <Link
                  href="/download"
                  className="block w-full text-center bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
