import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <a 
      href="tel:0799618902"
      className="block glass-panel p-6 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:bg-slate-800/80 group flex flex-col h-full cursor-pointer decoration-0"
    >
      <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform border border-slate-700 group-hover:border-indigo-500">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{service.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>
      <div 
        className="mt-auto w-full block text-center py-2 rounded-lg border border-slate-600 text-slate-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-transparent transition-colors font-medium text-sm"
      >
        Book Service
      </div>
    </a>
  );
}