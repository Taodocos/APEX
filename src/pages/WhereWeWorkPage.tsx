import React, { useState } from 'react';
import { 
  MapPin, 
  Compass, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  TrendingUp, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import InteractiveEthiopiaMap from '../components/InteractiveEthiopiaMap';
import CallToAction from '../components/CallToAction';
import { PRIORITY_REGIONS, PriorityRegion } from '../data/apexData';

export default function WhereWeWorkPage() {
  const [activeRegion, setActiveRegion] = useState<PriorityRegion>(PRIORITY_REGIONS[0]);

  return (
    <div className="space-y-0">
      {/* Banner */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-brand-900 via-brand-800 to-[#0c4021] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-white/10 px-3.5 py-1 rounded-full border border-white/20 inline-block mb-3">
            Geographic Scope
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
            Where We Work
          </h1>
          <div className="heading-divider-center" />
          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
            Targeting high-need frontline environments with community-led resilience models across Ethiopia.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200 inline-block mb-3">
              Operational Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 tracking-tight">
              Five Initial Priority Entry Regions
            </h2>
            <div className="heading-divider-center" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              These initial regions—<strong>Afar, Amhara, Gambela, Oromia, and Tigray</strong>—provide vital strategic 
              entry points for program implementation, partnership development, and organizational learning.
            </p>
          </div>

          <InteractiveEthiopiaMap />
        </div>
      </section>

      {/* Comprehensive Regional Profiles */}
      <section className="py-16 sm:py-20 bg-[#f7faf8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block mb-3">
              Strategic Profiles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 tracking-tight">
              Regional Priorities & Interventions
            </h2>
            <div className="heading-divider-center" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Every region presents distinct agro-ecological contexts, displacement patterns, and community dynamics. 
              Our programmatic priorities are tailored to these local realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRIORITY_REGIONS.map((region) => (
              <div
                key={region.id}
                className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200">
                      Priority Region
                    </span>
                    <span className="text-xs text-gray-500 font-semibold">
                      Capital: {region.capital}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-heading text-gray-900 group-hover:text-brand-700 transition-colors flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gold-500" />
                      <span>{region.name}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                      {region.description}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#f8faf9] border border-gray-100 text-xs">
                    <strong className="text-gray-900 block mb-1">Humanitarian Context:</strong>
                    <p className="text-gray-600 leading-relaxed">{region.humanitarianContext}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-brand-600" />
                      <span>Interventions</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {region.focusInterventions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-gray-100 text-xs text-gray-500">
                  <span className="font-bold text-gray-700">Entry Points:</span> {region.entryPoints}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Principles Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-50/70 border border-brand-200 rounded-3xl p-8 sm:p-12 lg:p-14">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5 text-gold-600" />
                <span>Phased Scaling Strategy</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900">
                Future Regional Expansion Framework
              </h3>
              <div className="heading-divider" />

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Over time, APEX will expand to additional regions based on strict programmatic criteria:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    title: 'Humanitarian Needs',
                    desc: 'Independent assessment of vulnerability, food insecurity, and protection threats.'
                  },
                  {
                    title: 'Operational Readiness',
                    desc: 'Logistical access, community security, and field office establishing capability.'
                  },
                  {
                    title: 'Partnership Opportunities',
                    desc: 'Strong local CSO presence and alignment with regional government line bureaus.'
                  },
                  {
                    title: 'Resource Availability & Quality',
                    desc: 'Guaranteed sustainable funding to maintain program quality, fidelity, and total accountability.'
                  }
                ].map((crit, idx) => (
                  <div key={idx} className="bg-white p-4 sm:p-5 rounded-2xl border border-brand-100 shadow-sm space-y-1">
                    <span className="text-xs font-bold text-brand-700 uppercase tracking-wider block">
                      Criterion 0{idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-gray-900">{crit.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{crit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <CallToAction />
    </div>
  );
}
