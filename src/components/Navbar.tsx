import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight, ShieldCheck } from 'lucide-react';
import { APEX_INFO } from '../data/apexData';

interface NavItem {
  name: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about-us' },
  { name: 'WHAT WE DO', path: '/what-we-do' },
  { name: 'WHERE WE WORK', path: '/where-we-work' },
  { name: 'NEWS & STORIES', path: '/news' },
  { name: 'CONTACT', path: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all">
      {/* Top micro-bar like Nexus */}
      <div className="bg-[#0f4e29] text-white py-1.5 px-4 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-emerald-100">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span className="truncate">ACSO Reg. No. 7880 (March 2026) | National Non-Profit Organization</span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-gray-200">
            <a 
              href={`mailto:${APEX_INFO.contact.email}`} 
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>{APEX_INFO.contact.email}</span>
            </a>
            <a 
              href={`tel:${APEX_INFO.contact.phone}`} 
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{APEX_INFO.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center shadow-md shadow-brand-900/10 group-hover:scale-105 transition-transform">
              <svg className="w-7 h-7 text-white" viewBox="0 0 100 100" fill="none">
                <polygon points="50,15 88,85 12,85" stroke="currentColor" strokeWidth="8" fill="none" />
                <polygon points="50,38 74,80 26,80" fill="#f4a623" />
                <circle cx="50" cy="58" r="8" fill="#ffffff" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading tracking-tight text-brand-700 leading-none">
                APEX
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-gray-500 max-w-[210px] leading-tight mt-0.5">
                Action for People, Empowerment and Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3.5 py-2 text-sm font-semibold tracking-wide transition-all relative ${
                    active
                      ? 'text-brand-700 font-bold'
                      : 'text-gray-700 hover:text-brand-600'
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[3px] bg-gold-500 rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-600 hover:bg-brand-700 text-white shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Partner With Us</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-gray-700 hover:text-brand-600 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-xl animate-fade-in">
          <div className="px-4 pt-3 pb-6 space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                    active
                      ? 'bg-brand-50 text-brand-700 border-l-4 border-gold-500 font-bold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-brand-600'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-gray-100">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider bg-brand-600 text-white shadow hover:bg-brand-700 transition-colors"
              >
                <span>Partner With Us</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <div className="mt-4 pt-3 text-xs text-gray-500 space-y-1 px-1">
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-600" />
                  <span>{APEX_INFO.contact.email}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-600" />
                  <span>{APEX_INFO.contact.phone}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
