import React, { useState } from 'react';
import { Laptop } from '../types';

interface ProductCardProps {
  product: Laptop;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  // Fallback image in case the main one fails
  const fallbackImage = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800";

  return (
    <div 
      className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={imageError ? fallbackImage : product.image} 
          alt={product.name} 
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
          <span className="inline-block px-2 py-1 bg-indigo-600 text-white text-xs font-bold rounded">In Stock</span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-1 truncate">{product.name}</h3>
        <p className="text-cyan-400 font-bold text-xl mb-3">{product.price}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {product.specs.slice(0, 2).map((spec, i) => (
            <span key={i} className="text-xs text-slate-400 bg-slate-900/50 px-2 py-1 rounded border border-slate-700">
              {spec}
            </span>
          ))}
          {product.specs.length > 2 && (
             <span className="text-xs text-slate-400 bg-slate-900/50 px-2 py-1 rounded border border-slate-700">
              +{product.specs.length - 2} more
            </span>
          )}
        </div>
        
        <button className="w-full py-2 bg-slate-700 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}