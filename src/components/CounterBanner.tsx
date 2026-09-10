import React from 'react';
import { MapPin, Target, Users, CalendarCheck2 } from 'lucide-react';

const STATS = [
  {
    icon: <MapPin className="w-6 h-6 text-gold-400" />,
    number: '5',
    suffix: '',
    label: 'Initial Priority Regions',
    subtext: 'Afar, Amhara, Gambela, Oromia, Tigray'
  },
  {
    icon: <Target className="w-6 h-6 text-gold-400" />,
    number: '4',
    suffix: '',
    label: 'Core Program Pillars',
    subtext: 'Protection, Health, Education, Livelihoods'
  },
  {
    icon: <Users className="w-6 h-6 text-gold-400" />,
    number: '7',
    suffix: '',
    label: 'Board of Directors',
    subtext: 'Strategic oversight & fiduciary compliance'
  },
  {
    icon: <CalendarCheck2 className="w-6 h-6 text-gold-400" />,
    number: '2030',
    suffix: '',
    label: 'Strategic Horizon',
    subtext: 'Transformative self-reliance ambition'
  }
];

export default function CounterBanner() {
  return (
    <section className="bg-brand-900 text-white py-12 border-y border-brand-800 relative overflow-hidden">
      {/* Subtle background ornament */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-brand-800/80">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                {stat.icon}
              </div>
              <div className="flex items-baseline justify-center gap-0.5">
                <span className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
                  {stat.number}
                </span>
                {stat.suffix && (
                  <span className="text-xl font-bold text-gold-400">{stat.suffix}</span>
                )}
              </div>
              <h4 className="text-sm font-bold text-gray-100 uppercase tracking-wide mt-1">
                {stat.label}
              </h4>
              <p className="text-xs text-emerald-200/70 mt-1 max-w-[200px] leading-snug">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
