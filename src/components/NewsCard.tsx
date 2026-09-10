import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { NewsArticle } from '../data/apexData';

interface NewsCardProps {
  article: NewsArticle;
  onReadMore?: (article: NewsArticle) => void;
}

export default function NewsCard({ article, onReadMore }: NewsCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
      {/* Image with category badge */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-600/90 text-white backdrop-blur-sm shadow">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gold-600" />
              <span>{article.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gold-600" />
              <span>{article.readTime}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold font-heading text-gray-900 group-hover:text-brand-700 transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
            <User className="w-3.5 h-3.5 text-brand-600" />
            <span className="truncate max-w-[140px]">{article.author}</span>
          </div>

          <button
            onClick={() => onReadMore && onReadMore(article)}
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-brand-900 transition-colors group/btn"
          >
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
}
