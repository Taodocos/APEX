import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Building2, 
  Clock,
  ShieldCheck
} from 'lucide-react';
import CallToAction from '../components/CallToAction';
import { APEX_INFO } from '../data/apexData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: 'Partnership',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-0">
      {/* Banner */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-brand-900 via-brand-800 to-[#0c4021] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-white/10 px-3.5 py-1 rounded-full border border-white/20 inline-block mb-3">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
            Contact APEX
          </h1>
          <div className="heading-divider-center" />
          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
            Connect with our headquarters in Addis Ababa to explore partnerships, humanitarian alliances, 
            or program collaborations.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Office Guide (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200 inline-block mb-2">
                  Head Office
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 tracking-tight">
                  National Headquarters
                </h2>
                <div className="heading-divider mt-2" />
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  Our national office coordinates regional entry hubs, manages fiduciary compliance with ACSO, 
                  and directs technical programs.
                </p>
              </div>

              {/* Office Details Card */}
              <div className="p-6 rounded-2xl bg-[#f8faf9] border border-gray-100 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Office Location</h4>
                    <p className="text-sm text-gray-700 font-medium mt-1 leading-snug">
                      {APEX_INFO.contact.address}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Lemi Kura Sub-city, Wereda 03, Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Direct Phone</h4>
                    <a
                      href={`tel:${APEX_INFO.contact.phone}`}
                      className="text-sm text-brand-700 font-bold hover:underline mt-1 block"
                    >
                      {APEX_INFO.contact.phone}
                    </a>
                    <span className="text-xs text-gray-500">Working days: Mon – Fri (8:30 AM – 5:30 PM EAT)</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">Official Inquiries</h4>
                    <a
                      href={`mailto:${APEX_INFO.contact.email}`}
                      className="text-sm text-brand-700 font-bold hover:underline mt-1 block"
                    >
                      {APEX_INFO.contact.email}
                    </a>
                    <span className="text-xs text-gray-500">General and partner correspondence</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">
                  Follow & Connect on Social Media
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href={APEX_INFO.contact.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f0f4f2] hover:bg-brand-600 text-gray-700 hover:text-white text-xs font-semibold transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href={APEX_INFO.contact.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f0f4f2] hover:bg-brand-600 text-gray-700 hover:text-white text-xs font-semibold transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>X (Twitter)</span>
                  </a>
                  <a
                    href={APEX_INFO.contact.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f0f4f2] hover:bg-brand-600 text-gray-700 hover:text-white text-xs font-semibold transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* ACSO Certificate Note */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-600 shrink-0" />
                <span>
                  <strong>Legal Status:</strong> Authority for Civil Society Organizations (ACSO) Reg. 7880. Total compliance with Ethiopian civil society regulations.
                </span>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 sm:p-10 relative">
                {submitted ? (
                  <div className="text-center py-16 space-y-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-gray-900">
                      Thank You for Reaching Out!
                    </h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been received by the APEX team. We will review your message and respond promptly via <strong>{formData.email}</strong>.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          organization: '',
                          inquiryType: 'Partnership',
                          message: ''
                        });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-600 text-white hover:bg-brand-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-bold font-heading text-gray-900">
                        Send a Message or Partnership Request
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Please fill out the form below and our team will get back to you shortly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-brand-600 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@organization.org"
                          className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-brand-600 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+251..."
                          className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-brand-600 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                          Organization / Entity
                        </label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="Agency or community group"
                          className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-brand-600 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-brand-600 focus:bg-white transition-all"
                      >
                        <option value="Partnership">Strategic Partnership & Alliance</option>
                        <option value="ProgramCollaboration">Program Collaboration (Pillars)</option>
                        <option value="RegionalOperations">Regional Operations & Entry</option>
                        <option value="GeneralInquiry">General Inquiry & Information</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please outline how we can collaborate or assist..."
                        className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-brand-600 focus:bg-white transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-600 hover:bg-brand-700 text-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CallToAction />
    </div>
  );
}
