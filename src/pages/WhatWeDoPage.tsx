import React, { useState } from 'react';
import { 
  ShieldAlert, 
  HeartPulse, 
  Users, 
  Network, 
  Shield, 
  Heart, 
  GraduationCap, 
  Sprout, 
  CheckCircle2, 
  Tag, 
  ArrowRight,
  Layers
} from 'lucide-react';
import CallToAction from '../components/CallToAction';
import { STRATEGIC_GOALS, PROGRAM_PILLARS, ProgramPillar } from '../data/apexData';

const goalIcons = [
  <ShieldAlert className="w-8 h-8 text-brand-600" />,
  <HeartPulse className="w-8 h-8 text-brand-600" />,
  <Users className="w-8 h-8 text-brand-600" />,
  <Network className="w-8 h-8 text-brand-600" />
];

const pillarIcons = [
  <Shield className="w-6 h-6 text-white" />,
  <Heart className="w-6 h-6 text-white" />,
  <GraduationCap className="w-6 h-6 text-white" />,
  <Sprout className="w-6 h-6 text-white" />
];

export default function WhatWeDoPage() {
  const [activeTab, setActiveTab] = useState<string>(PROGRAM_PILLARS[0].id);

  const currentPillar = PROGRAM_PILLARS.find((p) => p.id === activeTab) || PROGRAM_PILLARS[0];

  return (
    <div className="space-y-0">
      {/* Banner */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-brand-900 via-brand-800 to-[#0c4021] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-white/10 px-3.5 py-1 rounded-full border border-white/20 inline-block mb-3">
            Integrated Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
            What We Do
          </h1>
          <div className="heading-divider-center" />
          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
            Connecting humanitarian assistance, health, education, and resilient livelihoods to build 
            enduring pathways toward sustainable community self-reliance.
          </p>
        </div>
      </section>

      {/* Part 1: Strategic Goals (01 - 04) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200 inline-block mb-3">
              Strategic Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 tracking-tight">
              Four Interconnected Goals
            </h2>
            <div className="heading-divider-center" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our interventions are structured around four strategic goals that reinforce one another across the 
              Humanitarian-Development-Peace Nexus.
            </p>
          </div>

          <div className="space-y-8">
            {STRATEGIC_GOALS.map((goal, idx) => (
              <div
                key={goal.id}
                className="bg-[#f8faf9] rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-white group-hover:bg-brand-600 shadow-sm border border-gray-100 flex items-center justify-center shrink-0 transition-colors">
                    {React.cloneElement(goalIcons[idx], {
                      className: 'w-8 h-8 text-brand-600 group-hover:text-white transition-colors'
                    })}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-brand-100 text-brand-800">
                        Goal {goal.number}
                      </span>
                      <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider">
                        {goal.tagline}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 group-hover:text-brand-700 transition-colors">
                      {goal.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-4xl pt-1">
                      {goal.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 w-full lg:w-auto pt-3 lg:pt-0 border-t lg:border-t-0 border-gray-200 flex justify-end">
                  <span className="text-4xl font-extrabold font-heading text-gray-200 group-hover:text-brand-600/30 transition-colors">
                    {goal.number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: Detailed Program Pillars Deep Dive */}
      <section className="py-16 sm:py-20 bg-[#f7faf8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block mb-3">
              Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 tracking-tight">
              Our Program Pillars & Focus Areas
            </h2>
            <div className="heading-divider-center" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Explore the dedicated programmatic areas through which APEX delivers evidence-based, community-driven interventions.
            </p>
          </div>

          {/* Interactive Pillar Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {PROGRAM_PILLARS.map((pillar, idx) => {
              const isSelected = pillar.id === activeTab;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-900/10'
                      : 'bg-white text-gray-700 hover:bg-brand-50 border border-gray-200'
                  }`}
                >
                  <span>Pillar 0{idx + 1}: {pillar.title}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Pillar Showcase */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Pillar Image (5 cols) */}
              <div className="lg:col-span-5 relative h-72 lg:h-auto min-h-[350px]">
                <img
                  src={currentPillar.image}
                  alt={currentPillar.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs font-bold text-gold-400 uppercase tracking-wider block">
                    Strategic Focus
                  </span>
                  <h3 className="text-2xl font-bold font-heading">
                    {currentPillar.title}
                  </h3>
                  <p className="text-xs text-emerald-100/90">
                    {currentPillar.statsLabel}: <strong>{currentPillar.statsValue}</strong>
                  </p>
                </div>
              </div>

              {/* Pillar Details & Focus Areas (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-700 block mb-1">
                    {currentPillar.subtitle}
                  </span>
                  <h4 className="text-2xl font-bold font-heading text-gray-900">
                    {currentPillar.title}
                  </h4>
                  <div className="heading-divider mt-2" />
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {currentPillar.description}
                </p>

                {/* Focus Areas Badges with check icons */}
                <div className="space-y-3 pt-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-800 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-gold-600" />
                    <span>Detailed Focus Areas & Interventions</span>
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentPillar.focusAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-[#f7faf8] border border-brand-100 text-xs font-semibold text-gray-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Community-Driven Implementation Framework</span>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 font-bold text-brand-700 hover:text-brand-900"
                  >
                    <span>Partner in this Pillar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
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
