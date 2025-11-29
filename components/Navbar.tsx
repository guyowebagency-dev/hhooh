import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
              Sally Electronics
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
              <button onClick={() => scrollToSection('inventory')} className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Laptops</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Repairs</button>
              <button onClick={() => scrollToSection('contact')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/30">
                Call 0799618902
              </button>
            </div>
          </div>

          {/* Mobile Menu Button & Call Icon */}
          <div className="md:hidden flex items-center gap-4">
             <a href="tel:0799618902" className="bg-indigo-600 p-2 rounded-full text-white shadow-lg shadow-indigo-500/30">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
               </svg>
             </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Home</button>
            <button onClick={() => scrollToSection('inventory')} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Laptops</button>
            <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Repairs</button>
            <div className="pt-4 pb-2">
                <a href="tel:0799618902" className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg text-base font-bold transition-colors">
                    Call 0799618902
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}