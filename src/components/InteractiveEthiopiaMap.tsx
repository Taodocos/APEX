import React, { useState } from 'react';
import { MapPin, CheckCircle2, ArrowRight, Compass, Layers } from 'lucide-react';
import { PRIORITY_REGIONS, PriorityRegion } from '../data/apexData';

export default function InteractiveEthiopiaMap() {
  const [selectedRegion, setSelectedRegion] = useState<PriorityRegion>(PRIORITY_REGIONS[0]);
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-2xl border border-brand-100 shadow-sm overflow-hidden">
      <div className="p-6 sm:p-8 bg-gradient-to-r from-brand-50/70 to-emerald-50/40 border-b border-brand-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-gold-600" />
              <span>Geographic Footprint</span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-gray-900">
              Initial Priority Regions of Ethiopia
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Select or hover over any of our 5 initial operational entry regions on the interactive map.
            </p>
          </div>

          {/* Quick Region Selector Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {PRIORITY_REGIONS.map((region) => {
              const isSelected = selectedRegion.id === region.id;
              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region)}
                  onMouseEnter={() => setHoveredRegionId(region.id)}
                  onMouseLeave={() => setHoveredRegionId(null)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    isSelected
                      ? 'bg-brand-600 text-white shadow-sm ring-2 ring-brand-600/30 font-bold'
                      : 'bg-white text-gray-700 hover:bg-brand-50 border border-gray-200 hover:border-brand-300'
                  }`}
                >
                  {region.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left/Center: Interactive SVG Map Container (7 cols) */}
        <div className="lg:col-span-7 p-4 sm:p-8 flex items-center justify-center bg-[#f7faf8] relative min-h-[420px]">
          <div className="w-full max-w-[540px] relative">
            <svg
              viewBox="0 0 600 480"
              className="w-full h-auto drop-shadow-md select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
                  <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0f4e29" floodOpacity="0.12" />
                </filter>
                <linearGradient id="priorityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#146b3a" />
                  <stop offset="100%" stopColor="#0a4623" />
                </linearGradient>
                <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f4a623" />
                  <stop offset="100%" stopColor="#d98207" />
                </linearGradient>
              </defs>

              {/* Background contextual regions (Other Ethiopian regions) */}
              <g id="context-regions" opacity="0.45" stroke="#cbd5e1" strokeWidth="1.5">
                {/* Somali region placeholder polygon */}
                <path
                  d="M330,220 L480,240 L550,290 L520,380 L440,430 L380,390 L340,300 Z"
                  fill="#e2e8f0"
                  className="transition-colors hover:fill-gray-300"
                >
                  <title>Somali Region (Future Expansion)</title>
                </path>
                {/* Benishangul-Gumuz placeholder polygon */}
                <path
                  d="M130,170 L190,160 L180,220 L130,240 Z"
                  fill="#e2e8f0"
                  className="transition-colors hover:fill-gray-300"
                >
                  <title>Benishangul-Gumuz Region</title>
                </path>
                {/* Southern / Sidama / SW Ethiopia placeholder polygon */}
                <path
                  d="M180,320 L270,300 L290,400 L210,420 L170,360 Z"
                  fill="#e2e8f0"
                  className="transition-colors hover:fill-gray-300"
                >
                  <title>Southern Regions</title>
                </path>
              </g>

              {/* Priority Region 1: TIGRAY (North) */}
              <path
                d="M210,40 L310,45 L320,110 L250,120 L200,100 Z"
                fill={
                  selectedRegion.id === 'tigray'
                    ? 'url(#activeGrad)'
                    : hoveredRegionId === 'tigray'
                    ? '#1f8a4e'
                    : '#146b3a'
                }
                stroke="#ffffff"
                strokeWidth="2.5"
                className="cursor-pointer transition-all duration-300 hover:opacity-95"
                onClick={() => setSelectedRegion(PRIORITY_REGIONS.find((r) => r.id === 'tigray')!)}
                onMouseEnter={() => setHoveredRegionId('tigray')}
                onMouseLeave={() => setHoveredRegionId(null)}
              >
                <title>Tigray - Initial Priority Region</title>
              </path>

              {/* Priority Region 2: AFAR (North-East) */}
              <path
                d="M315,50 L400,100 L430,170 L340,220 L320,120 Z"
                fill={
                  selectedRegion.id === 'afar'
                    ? 'url(#activeGrad)'
                    : hoveredRegionId === 'afar'
                    ? '#1f8a4e'
                    : '#146b3a'
                }
                stroke="#ffffff"
                strokeWidth="2.5"
                className="cursor-pointer transition-all duration-300 hover:opacity-95"
                onClick={() => setSelectedRegion(PRIORITY_REGIONS.find((r) => r.id === 'afar')!)}
                onMouseEnter={() => setHoveredRegionId('afar')}
                onMouseLeave={() => setHoveredRegionId(null)}
              >
                <title>Afar - Initial Priority Region</title>
              </path>

              {/* Priority Region 3: AMHARA (North-Central) */}
              <path
                d="M190,110 L255,125 L320,125 L325,210 L260,250 L195,210 L185,160 Z"
                fill={
                  selectedRegion.id === 'amhara'
                    ? 'url(#activeGrad)'
                    : hoveredRegionId === 'amhara'
                    ? '#1f8a4e'
                    : '#146b3a'
                }
                stroke="#ffffff"
                strokeWidth="2.5"
                className="cursor-pointer transition-all duration-300 hover:opacity-95"
                onClick={() => setSelectedRegion(PRIORITY_REGIONS.find((r) => r.id === 'amhara')!)}
                onMouseEnter={() => setHoveredRegionId('amhara')}
                onMouseLeave={() => setHoveredRegionId(null)}
              >
                <title>Amhara - Initial Priority Region</title>
              </path>

              {/* Priority Region 4: GAMBELA (West) */}
              <path
                d="M90,260 L145,250 L155,320 L105,340 Z"
                fill={
                  selectedRegion.id === 'gambela'
                    ? 'url(#activeGrad)'
                    : hoveredRegionId === 'gambela'
                    ? '#1f8a4e'
                    : '#146b3a'
                }
                stroke="#ffffff"
                strokeWidth="2.5"
                className="cursor-pointer transition-all duration-300 hover:opacity-95"
                onClick={() => setSelectedRegion(PRIORITY_REGIONS.find((r) => r.id === 'gambela')!)}
                onMouseEnter={() => setHoveredRegionId('gambela')}
                onMouseLeave={() => setHoveredRegionId(null)}
              >
                <title>Gambela - Initial Priority Region</title>
              </path>

              {/* Priority Region 5: OROMIA (Central, East, West, South Belt) */}
              <path
                d="M140,245 L200,220 L265,255 L330,225 L360,285 L320,390 L260,385 L260,305 L175,325 L150,285 Z"
                fill={
                  selectedRegion.id === 'oromia'
                    ? 'url(#activeGrad)'
                    : hoveredRegionId === 'oromia'
                    ? '#1f8a4e'
                    : '#146b3a'
                }
                stroke="#ffffff"
                strokeWidth="2.5"
                className="cursor-pointer transition-all duration-300 hover:opacity-95"
                onClick={() => setSelectedRegion(PRIORITY_REGIONS.find((r) => r.id === 'oromia')!)}
                onMouseEnter={() => setHoveredRegionId('oromia')}
                onMouseLeave={() => setHoveredRegionId(null)}
              >
                <title>Oromia - Initial Priority Region</title>
              </path>

              {/* Addis Ababa Center Point */}
              <circle cx="265" cy="245" r="5" fill="#f4a623" stroke="#ffffff" strokeWidth="1.5">
                <title>Addis Ababa (APEX National Office HQ)</title>
              </circle>
              <text x="275" y="248" fontSize="10" fontWeight="bold" fill="#0f4e29">
                Addis Ababa (HQ)
              </text>

              {/* Priority Region Labels */}
              <text x="235" y="80" fontSize="11" fontWeight="bold" fill="#ffffff" textAnchor="middle" pointerEvents="none">
                TIGRAY
              </text>
              <text x="360" y="130" fontSize="11" fontWeight="bold" fill="#ffffff" textAnchor="middle" pointerEvents="none">
                AFAR
              </text>
              <text x="240" y="175" fontSize="11" fontWeight="bold" fill="#ffffff" textAnchor="middle" pointerEvents="none">
                AMHARA
              </text>
              <text x="120" y="295" fontSize="10" fontWeight="bold" fill="#ffffff" textAnchor="middle" pointerEvents="none">
                GAMBELA
              </text>
              <text x="250" y="340" fontSize="12" fontWeight="bold" fill="#ffffff" textAnchor="middle" pointerEvents="none">
                OROMIA
              </text>
            </svg>

            {/* Map Legend */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-600 bg-white/80 p-2.5 rounded-xl border border-gray-200/80 backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-brand-600 inline-block" />
                <span className="font-medium">Initial Priority Entry Region</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-gold-500 inline-block" />
                <span className="font-medium">Currently Selected</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-gray-200 inline-block" />
                <span className="font-medium">Future Phased Expansion</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Selected Region Deep Dive Card (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-brand-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                <span>Priority Entry Hub</span>
              </div>
              <span className="text-xs text-gray-500 font-medium">
                Capital: <strong className="text-gray-800">{selectedRegion.capital}</strong>
              </span>
            </div>

            <div>
              <h4 className="text-2xl font-bold font-heading text-brand-700 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-gold-500" />
                <span>{selectedRegion.name} Region</span>
              </h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {selectedRegion.description}
              </p>
            </div>

            {/* Humanitarian & Operational Context */}
            <div className="p-3.5 rounded-xl bg-[#f8faf9] border border-gray-100 text-xs space-y-1">
              <span className="font-bold text-gray-900 block">Context & Rationale:</span>
              <p className="text-gray-600 leading-relaxed">{selectedRegion.humanitarianContext}</p>
            </div>

            {/* Focus Interventions */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-brand-600" />
                <span>Key Program Interventions</span>
              </h5>
              <ul className="space-y-1.5">
                {selectedRegion.focusInterventions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategic Entry Points */}
            <div className="pt-1 text-xs text-gray-500">
              <strong className="text-gray-700">Local Entry Points:</strong> {selectedRegion.entryPoints}
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500 italic">
              1 of 5 Priority Launch Regions
            </span>
            <a
              href="/where-we-work"
              className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 hover:text-brand-800 transition-colors group"
            >
              <span>Full Footprint Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
