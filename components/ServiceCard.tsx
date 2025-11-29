import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="glass-panel p-6 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:bg-slate-800/80 group">
      <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform border border-slate-700 group-hover:border-indigo-500">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}