import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartHandshake, Sparkles } from 'lucide-react';
import { APEX_INFO } from '../data/apexData';

export default function CallToAction() {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-[#105e32] via-brand-700 to-[#093d1f] text-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-white/5 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-gold-500/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Mission</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
            {APEX_INFO.finalMessage.title}
          </h2>

          <div className="heading-divider-center" />

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto font-normal">
            {APEX_INFO.finalMessage.body}
          </p>

          <p className="text-xl sm:text-2xl font-bold font-heading text-gold-400 drop-shadow">
            {APEX_INFO.finalMessage.call}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-gold-500 hover:bg-gold-600 text-dark-900 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <HeartHandshake className="w-4 h-4 text-dark-900" />
              <span>Partner With Us</span>
            </Link>

            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
