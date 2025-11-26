import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <svg className="h-8 w-auto text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.77 17.3c-.5-.28-.77-.85-.5-1.35l3.25-6.03-3.26-6.03c-.28-.5.08-1.07.58-1.2l5.65-1.5c.5-.13 1.03.14 1.2.64l1.5 4.5c.13.4-.04.83-.4.96l-3.5 1.25 3.5 1.25c.36.13.53.56.4.96l-1.5 4.5c-.17.5-.7.77-1.2.64l-5.62-1.5zm.98-7.3l2.25 4.18 2.25-4.18-2.25-4.17-2.25 4.17z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-3 text-2xl font-bold text-white">Quantum</span>
            </a>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Features
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </nav>
          <div className="hidden md:block">
            <a
              href="#"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
