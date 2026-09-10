import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Handshake } from 'lucide-react';
import { PARTNERS_LIST } from '../data/apexData';

export default function PartnerMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 240;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Duplicate for seamless infinite feeling
  const doubledPartners = [...PARTNERS_LIST, ...PARTNERS_LIST];

  return (
    <section className="py-14 bg-[#f8faf9] border-y border-[#e5eee8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-bold text-brand-700 uppercase tracking-widest mb-2">
            <Handshake className="w-3.5 h-3.5 text-gold-500" />
            <span>Collaboration & Partnerships</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-brand-700 uppercase tracking-wide">
            Strategic Partners & Stakeholders
          </h2>
          <div className="heading-divider-center" />
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            APEX actively collaborates with regulatory bodies, government ministries, community leadership, 
            and civil society coalitions to maximize grassroots localization and long-term impact.
          </p>
        </div>

        {/* Carousel / Marquee Container */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-2 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/95 text-brand-700 shadow-md border border-brand-100 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all opacity-0 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrolling Track */}
          <div
            ref={scrollRef}
            className="flex items-center gap-5 overflow-x-auto no-scrollbar py-3 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {doubledPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-60 h-28 bg-white rounded-xl border border-[#e2eae5] p-4 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md hover:border-brand-300 hover:-translate-y-1 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-brand-700 flex items-center justify-center font-bold text-xs mb-2 border border-emerald-100">
                  {partner.logo}
                </div>
                <h4 className="text-xs font-bold text-gray-800 line-clamp-1">{partner.name}</h4>
                <span className="text-[10px] text-gray-500 font-medium tracking-wide mt-0.5">{partner.type}</span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-2 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/95 text-brand-700 shadow-md border border-brand-100 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
