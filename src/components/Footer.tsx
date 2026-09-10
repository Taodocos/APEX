import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { APEX_INFO, PROGRAM_PILLARS } from '../data/apexData';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-300 pt-16 pb-10 border-t-4 border-brand-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#3b3a3b]">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" viewBox="0 0 100 100" fill="none">
                  <polygon points="50,15 88,85 12,85" stroke="currentColor" strokeWidth="8" fill="none" />
                  <polygon points="50,38 74,80 26,80" fill="#f4a623" />
                  <circle cx="50" cy="58" r="8" fill="#ffffff" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-white tracking-tight">APEX</h3>
                <p className="text-[11px] text-gray-400 font-medium tracking-wide">
                  Action for People, Empowerment and Excellence
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              A national non-profit humanitarian and development organization connecting humanitarian action, 
              recovery, development, and peacebuilding through locally led and community-centered approaches in Ethiopia.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>ACSO Reg. No. 7880 | Registered March 2026</span>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={APEX_INFO.contact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#333233] hover:bg-brand-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={APEX_INFO.contact.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter"
                className="w-9 h-9 rounded-full bg-[#333233] hover:bg-brand-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={APEX_INFO.contact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#333233] hover:bg-brand-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-base font-semibold font-heading tracking-wide uppercase border-b-2 border-gold-500 pb-1.5 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about-us' },
                { name: 'What We Do', path: '/what-we-do' },
                { name: 'Where We Work', path: '/where-we-work' },
                { name: 'News & Stories', path: '/news' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-gold-400 flex items-center gap-1.5 transition-colors group"
                  >
                    <span className="text-gold-500/60 group-hover:text-gold-400">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Program Pillars (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-semibold font-heading tracking-wide uppercase border-b-2 border-gold-500 pb-1.5 inline-block">
              Our Pillars
            </h4>
            <ul className="space-y-2.5 text-sm">
              {PROGRAM_PILLARS.map((pillar) => (
                <li key={pillar.id}>
                  <Link
                    to="/what-we-do"
                    className="text-gray-400 hover:text-gold-400 block transition-colors leading-snug"
                  >
                    <span className="text-white/90 font-medium block">{pillar.title}</span>
                    <span className="text-xs text-gray-500">{pillar.subtitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-semibold font-heading tracking-wide uppercase border-b-2 border-gold-500 pb-1.5 inline-block">
              Contact Us
            </h4>
            <div className="space-y-3.5 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {APEX_INFO.contact.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${APEX_INFO.contact.phone}`} className="hover:text-white transition-colors">
                  {APEX_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${APEX_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {APEX_INFO.contact.email}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-700/80 hover:bg-brand-600 text-white text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <span>Send an Inquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} APEX - Action for People, Empowerment and Excellence. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/about-us" className="hover:text-gray-300 transition-colors">Governance & Board</Link>
            <Link to="/what-we-do" className="hover:text-gray-300 transition-colors">Program Pillars</Link>
            <Link to="/where-we-work" className="hover:text-gray-300 transition-colors">Priority Regions</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Privacy & Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
