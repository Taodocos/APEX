import React from 'react';
import { Shield, Heart, GraduationCap, Sprout, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROGRAM_PILLARS } from '../data/apexData';

const pillarIcons = [
  <Shield className="w-5 h-5 text-white" />,
  <Heart className="w-5 h-5 text-white" />,
  <GraduationCap className="w-5 h-5 text-white" />,
  <Sprout className="w-5 h-5 text-white" />
];

export default function ProgramPillarsGrid() {
  return (
    <section className="py-16 bg-[#f7faf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200 inline-block mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 tracking-tight">
            Our Program Pillars
          </h2>
          <div className="heading-divider-center" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Holistic, community-driven programming structured across four core pillars designed to protect dignity, 
            improve well-being, and generate economic independence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAM_PILLARS.map((pillar, index) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image banner with overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <div>
                    <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider block">
                      Pillar 0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-white drop-shadow-sm">
                      {pillar.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand-600/90 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-lg">
                    {pillarIcons[index]}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <p className="text-sm font-semibold text-brand-700 mb-2">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Focus Areas Badges */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-2.5 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-gold-600" />
                    <span>Key Focus Areas</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.focusAreas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#f2f7f4] text-brand-900 border border-brand-100 hover:border-brand-300 transition-colors"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">
                    {pillar.statsLabel}: <strong className="text-brand-700">{pillar.statsValue}</strong>
                  </span>
                  <Link
                    to="/what-we-do"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-900 transition-colors group/link"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
