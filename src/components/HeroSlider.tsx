import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { APEX_INFO } from '../data/apexData';

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Locally Led Humanitarian Action',
    title: 'Building Resilient and Self-Reliant Communities',
    description: 'APEX partners with communities, government, and local organizations to deliver integrated humanitarian, development, and peacebuilding solutions that save lives and protect dignity.',
    primaryCta: { text: 'Explore APEX', link: '/about-us' },
    secondaryCta: { text: 'What We Do', link: '/what-we-do' }
  },
  {
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Equitable Health & Education',
    title: 'Nurturing Well-Being Across Fragile Contexts',
    description: 'Expanding access to primary health, maternal-child nutrition, safe schooling, and psychosocial care in priority regions including Afar, Amhara, Gambela, Oromia, and Tigray.',
    primaryCta: { text: 'Where We Work', link: '/where-we-work' },
    secondaryCta: { text: 'Our Pillars', link: '/what-we-do' }
  },
  {
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Strategic Ambition 2030',
    title: 'A Trusted Partner Delivering Locally Led Solutions',
    description: 'Strengthening community systems, climate-resilient livelihoods, and youth opportunities for lasting self-reliance across Ethiopia.',
    primaryCta: { text: 'Partner With Us', link: '/contact' },
    secondaryCta: { text: 'Read Ambition 2030', link: '/about-us' }
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="relative w-full h-[540px] sm:h-[620px] lg:h-[680px] overflow-hidden bg-dark-950">
      {SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Cinematic Overlay */}
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center transform transition-transform duration-[8000ms] ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Multilayer gradient: bottom dark, subtle top vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-black/30" />

            {/* Slide Content */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <div className="max-w-3xl space-y-4 sm:space-y-6">
                {/* Micro badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold-400 text-xs font-bold uppercase tracking-wider animate-fade-in">
                  <Award className="w-3.5 h-3.5" />
                  <span>{slide.tagline}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15] drop-shadow-md">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl font-normal drop-shadow">
                  {slide.description}
                </p>

                {/* 3 CTAs as specified in prompt */}
                <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    to={slide.primaryCta.link}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-900/40 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>{slide.primaryCta.text}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to={slide.secondaryCta.link}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>{slide.secondaryCta.text}</span>
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-gold-400 hover:text-white transition-colors"
                  >
                    <span>Partner With Us</span>
                    <span className="text-gold-500">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-brand-600 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all opacity-70 hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-brand-600 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all opacity-70 hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 h-2.5 bg-gold-500'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
