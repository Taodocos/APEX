import React from 'react';
import { ShieldAlert, HeartPulse, Users, Network, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STRATEGIC_GOALS } from '../data/apexData';

const iconMap: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-7 h-7 text-brand-600" />,
  HeartPulse: <HeartPulse className="w-7 h-7 text-brand-600" />,
  Users: <Users className="w-7 h-7 text-brand-600" />,
  Network: <Network className="w-7 h-7 text-brand-600" />,
};

export default function StrategicGoalsGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block mb-3">
            Strategic Direction
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 tracking-tight">
            Our Strategic Goals
          </h2>
          <div className="heading-divider-center" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            APEX’s work is organized around four interconnected goals that span the entire nexus from emergency relief 
            to sustainable systemic self-reliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STRATEGIC_GOALS.map((goal) => (
            <div
              key={goal.id}
              className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-xl hover:border-brand-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-600 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header with Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-brand-50 group-hover:bg-brand-600 flex items-center justify-center transition-colors">
                    {React.cloneElement(iconMap[goal.icon] as React.ReactElement, {
                      className: 'w-7 h-7 text-brand-600 group-hover:text-white transition-colors',
                    })}
                  </div>
                  <span className="text-3xl font-extrabold font-heading text-gray-200 group-hover:text-gold-500/40 transition-colors">
                    {goal.number}
                  </span>
                </div>

                <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider block mb-1">
                  {goal.tagline}
                </span>

                <h3 className="text-xl font-bold font-heading text-gray-900 group-hover:text-brand-700 transition-colors mb-3">
                  {goal.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {goal.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center text-xs font-bold text-brand-600 group-hover:text-brand-700">
                <Link to="/what-we-do" className="inline-flex items-center gap-1 hover:underline">
                  <span>Explore Interventions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
