import React, { useState } from 'react';
import { Search, Filter, X, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import NewsCard from '../components/NewsCard';
import CallToAction from '../components/CallToAction';
import { NEWS_STORIES, NewsArticle } from '../data/apexData';

export default function NewsStoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const categories = ['All', 'Organization', 'Where We Work', 'Strategic Insights'];

  const filteredArticles = NEWS_STORIES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-0">
      {/* Banner */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-brand-900 via-brand-800 to-[#0c4021] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-white/10 px-3.5 py-1 rounded-full border border-white/20 inline-block mb-3">
            Updates & Voices
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
            News & Stories
          </h1>
          <div className="heading-divider-center" />
          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
            Insights, field updates, and stories of community empowerment and resilience from across Ethiopia.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-gray-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    selectedCategory === cat
                      ? 'bg-brand-600 text-white shadow-sm font-bold'
                      : 'bg-gray-50 text-gray-700 hover:bg-brand-50 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full md:w-72 relative">
              <input
                type="text"
                placeholder="Search articles & updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-600 focus:bg-white transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-[#f7faf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  onReadMore={(art) => setSelectedArticle(art)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 p-8">
              <p className="text-gray-500 text-sm">No articles matched your current filter criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-5 py-2 rounded-full text-xs font-bold text-brand-700 bg-brand-50 hover:bg-brand-100 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Story Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              aria-label="Close modal"
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
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gold-600" />
                {selectedArticle.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-brand-600" />
                {selectedArticle.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gold-600" />
                {selectedArticle.readTime}
              </span>
            </div>

            <div className="rounded-xl overflow-hidden mb-6 h-64">
              <img
                src={selectedArticle.imageUrl}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-4 mb-6">
              <p className="font-medium text-brand-900 leading-snug">
                {selectedArticle.excerpt}
              </p>
              <p className="whitespace-pre-line text-gray-600">
                {selectedArticle.content}
              </p>
            </div>

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

      {/* Call to action */}
      <CallToAction />
    </div>
  );
}
