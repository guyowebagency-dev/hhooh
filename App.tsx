import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ServiceCard from './components/ServiceCard';
import { laptops } from './constants';
import { Laptop } from './types';

// Services Data
const services = [
  {
    id: 1,
    title: "Screen Replacement",
    description: "Original screens for all major brands. Done in 30 mins.",
    icon: "🖥️"
  },
  {
    id: 2,
    title: "Battery Replacement",
    description: "Extend your laptop's life with a high-capacity battery.",
    icon: "🔋"
  },
  {
    id: 3,
    title: "OS & Software",
    description: "Windows installation, Office packages, and virus removal.",
    icon: "💿"
  },
  {
    id: 4,
    title: "Motherboard Repair",
    description: "Chip-level repairs for liquid damage and power issues.",
    icon: "🔧"
  }
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Laptop | null>(null);

  const openModal = (product: Laptop) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Helper to handle image errors in modal
  const handleModalImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800";
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[100px]"></div>
      </div>

      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="animate-fade-in inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
            <span className="text-slate-300 text-sm font-medium">Sally Electronics • Nairobi's Best</span>
          </div>
          
          <h1 className="animate-slide-up text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Premium Laptops <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Expert Repairs
            </span>
          </h1>
          
          <p className="animate-slide-up-delay-1 mt-4 max-w-2xl text-xl text-slate-400 mb-10">
            Welcome to Sally Electronics. We provide top-tier refurbished and new laptops at unbeatable prices, plus professional repair services you can trust.
          </p>
          
          <div className="animate-slide-up-delay-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#inventory" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/40 hover:scale-105">
              View Inventory
            </a>
            <a href="tel:0799618902" className="inline-flex justify-center items-center px-8 py-4 border border-slate-700 text-lg font-bold rounded-xl text-slate-200 bg-slate-800/50 hover:bg-slate-800 hover:text-white transition-all backdrop-blur-md hover:scale-105">
              Call 0799618902
            </a>
          </div>
        </section>

        {/* Inventory Section */}
        <section id="inventory" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Inventory</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              High-performance machines for work, gaming, and creativity. Click on any laptop for details.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {laptops.map((laptop) => (
              <React.Fragment key={laptop.id}>
                <ProductCard product={laptop} onClick={() => openModal(laptop)} />
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-800/30 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Trusted by thousands in Nairobi. We bring your dead devices back to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <React.Fragment key={service.id}>
                  <ServiceCard service={service} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="glass-panel p-10 md:p-16 rounded-3xl border border-slate-700 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
             
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Visit Our Shop</h2>
             <p className="text-xl text-slate-300 mb-8 max-w-xl mx-auto relative z-10">
               We are located in Nairobi CBD. <br/>
               Open Mon - Sat: 8:00 AM - 7:00 PM
             </p>
             <a href="tel:0799618902" className="relative z-10 inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl hover:from-indigo-700 hover:to-cyan-700 transition-all shadow-xl shadow-indigo-500/30 transform hover:scale-105">
               Contact Us: 0799618902
             </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-center">
        <p className="text-slate-500">© 2024 Sally Electronics. All rights reserved.</p>
        <p className="text-slate-600 text-sm mt-2">Nairobi, Kenya</p>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity" 
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-slate-800 border border-slate-700 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-slide-up">
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative h-64 md:h-80 bg-slate-900 shrink-0">
               <img 
                 src={selectedProduct.image} 
                 alt={selectedProduct.name} 
                 onError={handleModalImageError}
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent opacity-60"></div>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedProduct.name}</h3>
                <span className="text-xl md:text-2xl font-bold text-cyan-400">{selectedProduct.price}</span>
              </div>
              
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Specifications</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.specs.map((spec, index) => (
                    <span key={index} className="px-3 py-1 rounded-md bg-slate-700/50 border border-slate-600 text-slate-200 text-sm">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a href={`tel:0799618902`} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold text-center transition-colors shadow-lg shadow-indigo-500/25">
                  Order Now
                </a>
                <button onClick={closeModal} className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl font-bold transition-colors">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;