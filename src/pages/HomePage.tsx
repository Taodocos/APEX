import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, HeartHandshake, Sparkles, X } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import CounterBanner from '../components/CounterBanner';
import StrategicGoalsGrid from '../components/StrategicGoalsGrid';
import ProgramPillarsGrid from '../components/ProgramPillarsGrid';
import InteractiveEthiopiaMap from '../components/InteractiveEthiopiaMap';
import PartnerMarquee from '../components/PartnerMarquee';
import CallToAction from '../components/CallToAction';
import NewsCard from '../components/NewsCard';
import { APEX_INFO, NEWS_STORIES, NewsArticle } from '../data/apexData';

export default function HomePage() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <div className="space-y-0">
      {/* Hero Slider */}
      <HeroSlider />

      {/* About APEX - Intro Split Section (Nexus Style) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image with accent frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80"
                  alt="APEX Community Empowerment in Ethiopia"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">
                    Locally Led Solutions
                  </span>
                  <p className="text-lg font-bold font-heading">
                    Empowering Ethiopian Communities Toward Sustainable Self-Reliance
                  </p>
                </div>
              </div>

              {/* Float badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-brand-100 max-w-[260px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">ACSO Reg. 7880</span>
                    <span className="text-[11px] text-gray-500 block">Legally Registered March 2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200 inline-block">
                  About APEX
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 tracking-tight leading-tight">
                  Action for People, Empowerment and Excellence
                </h2>
                <div className="heading-divider" />
              </div>

              <p className="text-base text-gray-700 leading-relaxed">
                Founded by five dedicated Ethiopian citizens, APEX is a national, non-profit humanitarian and 
                development organization legally registered with the Authority for Civil Society Organizations (ACSO) 
                under Registration No. 7880.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We connect emergency humanitarian response, recovery, long-term development, and peacebuilding 
                through locally led, community-centered approaches. Our teams work hand-in-hand with grassroots leaders 
                and institutional partners to strengthen local systems and build permanent pathways toward resilience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Locally led and community centered',
                  'Humanitarian-Development-Peace Nexus',
                  'Registered with ACSO (Reg. 7880)',
                  'Focus on high-vulnerability regions'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-600 hover:bg-brand-700 text-white shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <span>Explore APEX</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/what-we-do"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-brand-700 hover:bg-brand-50 transition-colors"
                >
                  <span>Our Strategic Goals</span>
                  <span className="text-gold-600">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <CounterBanner />

      {/* Strategic Goals Grid */}
      <StrategicGoalsGrid />

      {/* Program Pillars Grid */}
      <ProgramPillarsGrid />

      {/* Where We Work - Interactive Ethiopia Map Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block mb-3">
              Geographic Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 tracking-tight">
              Where We Work: Priority Regions
            </h2>
            <div className="heading-divider-center" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              APEX concentrates initial operational delivery across five strategic entry regions in Ethiopia: 
              <strong> Afar, Amhara, Gambela, Oromia, and Tigray</strong>, setting a foundation for phased national scaling.
            </p>
          </div>

          <InteractiveEthiopiaMap />
        </div>
      </section>

      {/* Strategic Partners Infinite Marquee */}
      <PartnerMarquee />

      {/* Recent News & Stories */}
      <section className="py-16 bg-[#f7faf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200 inline-block mb-2">
                Field Updates
              </span>
              <h2 className="text-3xl font-bold font-heading text-gray-900 tracking-tight">
                Latest News & Impact Stories
              </h2>
              <div className="heading-divider mt-2" />
            </div>

            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-900 transition-colors group"
            >
              <span>View All Stories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_STORIES.slice(0, 3).map((article) => (
              <NewsCard
                key={article.id}
                article={article}
                onReadMore={(art) => setSelectedArticle(art)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <CallToAction />

      {/* Story Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200 inline-block mb-3">
              {selectedArticle.category}
            </span>

            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3">
              {selectedArticle.title}
            </h3>

            <div className="text-xs text-gray-500 mb-6 flex items-center gap-4">
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>By {selectedArticle.author}</span>
            </div>

            <div className="rounded-xl overflow-hidden mb-6 h-64">
              <img
                src={selectedArticle.imageUrl}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line mb-6">
              {selectedArticle.content}
            </p>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-600 hover:bg-brand-700 text-white transition-colors"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
