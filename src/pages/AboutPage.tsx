import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Users, 
  Heart, 
  CheckCircle2, 
  Award, 
  Share2, 
  TrendingUp, 
  Layers, 
  Building2,
  ArrowRight
} from 'lucide-react';
import CallToAction from '../components/CallToAction';
import { APEX_INFO, CORE_VALUES } from '../data/apexData';

const valueIcons: Record<string, React.ReactNode> = {
  Humanity: <Heart className="w-6 h-6 text-brand-600" />,
  Integrity: <ShieldCheck className="w-6 h-6 text-brand-600" />,
  Accountability: <CheckCircle2 className="w-6 h-6 text-brand-600" />,
  Excellence: <Award className="w-6 h-6 text-brand-600" />,
  Connected: <Share2 className="w-6 h-6 text-brand-600" />
};

export default function AboutPage() {
  return (
    <div className="space-y-0">
      {/* Page Header Banner */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-brand-900 via-brand-800 to-[#0c4021] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-white/10 px-3.5 py-1 rounded-full border border-white/20 inline-block mb-3">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
            About APEX
          </h1>
          <div className="heading-divider-center" />
          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
            Action for People, Empowerment and Excellence (APEX) is an indigenous Ethiopian organization 
            dedicated to pioneering locally led, sustainable community resilience.
          </p>
        </div>
      </section>

      {/* Legal Registration & Background */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-brand-800">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                <span>Legally Registered National NGO</span>
              </div>

              <h2 className="text-3xl font-extrabold font-heading text-gray-900 tracking-tight leading-tight">
                Rooted in Ethiopia, Committed to Dignity & Self-Reliance
              </h2>
              <div className="heading-divider" />

              <p className="text-base text-gray-700 leading-relaxed">
                Action for People, Empowerment and Excellence (APEX) is a national, non-profit humanitarian and development 
                organization legally registered with the <strong>Authority for Civil Society Organizations (ACSO), Registration No. 7880, in March 2026</strong>.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Founded by five Ethiopian citizens, APEX connects humanitarian action, recovery, development, 
                and peacebuilding through locally led and community-centered approaches. We work with communities 
                and partners to strengthen local systems, respond to shocks, improve well-being, and build pathways 
                toward resilience and sustainable self-reliance.
              </p>

              <div className="p-5 rounded-2xl bg-[#f7faf8] border border-brand-100 space-y-3">
                <h4 className="text-sm font-bold text-brand-800 uppercase tracking-wide flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-gold-500" />
                  <span>The APEX Approach</span>
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Rather than treating emergency shocks in isolation, APEX embeds relief within a continuum of 
                  institutional capacity strengthening and long-term socioeconomic agency.
                </p>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=900&q=80"
                  alt="Ethiopian Community Consultation"
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-6 bg-brand-900 text-white space-y-2">
                  <span className="text-xs font-bold text-gold-400 uppercase tracking-wider block">
                    Our Roots
                  </span>
                  <h4 className="text-lg font-bold font-heading">
                    Founded by 5 Ethiopian Citizens
                  </h4>
                  <p className="text-xs text-emerald-100/80 leading-relaxed">
                    Connecting emergency response with community self-governance and structural resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Split Cards */}
      <section className="py-16 bg-[#f7faf8] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 group-hover:bg-brand-600 flex items-center justify-center mb-6 transition-colors">
                <Compass className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">
                Where We Are Headed
              </span>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {APEX_INFO.vision}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-brand-700">
                <span>Dignity • Equitable Access • Sustainable Growth</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className="w-14 h-14 rounded-2xl bg-gold-50 group-hover:bg-gold-500 flex items-center justify-center mb-6 transition-colors">
                <Target className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">
                What Drives Us Every Day
              </span>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {APEX_INFO.mission}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-gold-700">
                <span>Integrated Solutions • Localized Delivery • Shocks Recovery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Ambition 2030 */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold-400 text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Strategic Horizon</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
                Our Strategic Ambition: By 2030
              </h2>
              <div className="heading-divider" />

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
                By 2030, APEX aims to be a <strong>trusted national humanitarian and development organization in Ethiopia</strong>, 
                recognized for delivering locally led and high-impact solutions that save lives, strengthen systems, and enable communities to build resilience and self-reliance.
              </p>

              <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
                We will grow through strong partnerships, technical and organizational excellence, innovation, learning, 
                and responsible resource mobilization while remaining responsive to evolving community needs.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10">
                <div className="space-y-1">
                  <span className="text-2xl font-bold font-heading text-gold-400">High Impact</span>
                  <p className="text-xs text-gray-300">Targeted programs delivering measurable life improvements.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl font-bold font-heading text-gold-400">Systems Focus</span>
                  <p className="text-xs text-gray-300">Reinforcing government bureaus and local community networks.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl font-bold font-heading text-gold-400">Accountability</span>
                  <p className="text-xs text-gray-300">Responsible, audited, and transparent stewardship of resources.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Leadership Structure */}
      <section className="py-16 sm:py-20 bg-[#f7faf8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200 inline-block mb-3">
              Institutional Oversight
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 tracking-tight">
              Governance & Management
            </h2>
            <div className="heading-divider-center" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Total operational accountability, mission alignment, and regulatory transparency overseen by 
              our governing bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Board of Directors */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-700">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 block">
                Highest Governing Body
              </span>
              <h3 className="text-2xl font-bold font-heading text-gray-900">
                Seven-Member Board of Directors
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {APEX_INFO.governance.boardDescription}
              </p>
              <div className="pt-3 border-t border-gray-100 space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Annual work plan and budget approval</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Fiduciary oversight and regulatory ACSO compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Strategic risk management and mission fidelity</span>
                </div>
              </div>
            </div>

            {/* Executive Management */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-700 block">
                Executive Leadership
              </span>
              <h3 className="text-2xl font-bold font-heading text-gray-900">
                Executive Director & Professional Team
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {APEX_INFO.governance.managementDescription}
              </p>
              <div className="pt-3 border-t border-gray-100 space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Program delivery and field operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Financial administration and operational compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Program quality, organizational development, & partnerships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values: What Guides Us */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3.5 py-1 rounded-full border border-gold-200 inline-block mb-3">
              Organizational Culture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 tracking-tight">
              Core Values: What Guides Us
            </h2>
            <div className="heading-divider-center" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              These fundamental principles guide our decisions, program design, operational partnerships, 
              and community interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.name}
                className="bg-[#f8faf9] rounded-2xl p-6 border border-gray-100 hover:border-brand-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col text-center items-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-brand-600 flex items-center justify-center mb-4 shadow-sm border border-gray-100 transition-colors">
                  {valueIcons[val.name]}
                </div>
                <h3 className="text-lg font-bold font-heading text-gray-900 group-hover:text-brand-700 transition-colors mb-2">
                  {val.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <CallToAction />
    </div>
  );
}
