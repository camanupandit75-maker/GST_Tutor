'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';
import { cn, getDifficultyColor, getRelevanceColor } from '@/lib/utils';
import GST_MODULES from '@/data/curriculum';

export default function SectionDetailPage() {
  const params = useParams();
  const moduleId = params?.moduleId as string;
  const chapterSlug = params?.chapterSlug as string;
  const sectionId = params?.sectionId as string;

  const module = GST_MODULES.find(m => m.id === moduleId);
  const chapter = module?.chapters.find(ch => ch.slug === chapterSlug);
  const section = chapter?.sections.find(sec => sec.id === sectionId);

  if (!module || !chapter || !section) {
    return (
      <div className="space-y-6 animate-in">
        <div className="card p-8 text-center bg-slate-800 border-slate-700">
          <h1 className="text-2xl font-bold text-white mb-4">Section Not Found</h1>
          <p className="text-gray-300 mb-6">The section you're looking for doesn't exist.</p>
          <Link href={`/modules/${moduleId}/${chapterSlug}`} className="btn btn-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Chapter
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <Link href={`/modules/${moduleId}/${chapterSlug}`} className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {chapter.title}
        </Link>
        <div className="flex items-start gap-4">
          <div className={cn(
            "flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg",
            "bg-blue-500/20 text-blue-400 border border-blue-500/30"
          )}>
            {section.number}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Section {section.number}: {section.title}
            </h1>
            <p className="text-gray-300 mt-2">{section.description}</p>
            <div className="flex items-center gap-2 mt-4">
              <span className={cn("px-2 py-1 rounded text-xs font-medium", getDifficultyColor(section.difficulty))}>
                {section.difficulty}
              </span>
              <span className={cn("px-2 py-1 rounded text-xs font-medium", getRelevanceColor(section.practicalRelevance))}>
                {section.practicalRelevance} relevance
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Clock className="w-3 h-3" />
                {section.estimatedMinutes}m
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Full Legal Text */}
      {section.fullText ? (
        <div className="card p-6 bg-slate-800 border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            Full Legal Text
          </h2>
          <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap text-gray-200 leading-relaxed">
            {section.fullText.split('\n').map((line, idx) => {
              // Handle markdown bold formatting
              const parts = line.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={idx} className="mb-3">
                  {parts.map((part, pIdx) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={pIdx} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
                    }
                    return <span key={pIdx}>{part}</span>;
                  })}
                </p>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <p className="text-xs text-gray-400 italic">
              Source: ICAI Publication - November 2025 Edition
            </p>
          </div>
        </div>
      ) : (
        <div className="card p-6 border-2 border-dashed border-slate-600 bg-slate-800">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            Full Legal Text
          </h2>
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
            <p className="text-white mb-2">
              <strong>Full legal text for Section {section.number} is available in the ICAI Publication - November 2025 Edition.</strong>
            </p>
            <p className="text-sm text-gray-300">
              The complete text of this section, including all clauses, sub-clauses, and legal provisions, can be found in the official ICAI study material. 
              Refer to the publication for the authoritative legal text.
            </p>
            <p className="text-xs text-gray-400 mt-3 italic">
              Source: ICAI Publication - November 2025 Edition
            </p>
          </div>
        </div>
      )}

      {/* Key Points */}
      {section.keyPoints && section.keyPoints.length > 0 && (
        <div className="card p-6 bg-slate-800 border-slate-700">
          <h2 className="text-lg font-semibold text-white mb-4">Key Points</h2>
          <ul className="space-y-2">
            {section.keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-blue-400 mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Reference */}
      <div className="card p-6 bg-slate-800 border-slate-700">
        <h2 className="text-lg font-semibold text-white mb-4">Reference</h2>
        <p className="text-sm text-gray-300">
          <Link 
            href={`/modules/${moduleId}`}
            className="text-blue-400 hover:text-blue-300 hover:underline font-medium"
          >
            {module.name}
          </Link>
          {' - '}
          <Link 
            href={`/modules/${moduleId}/${chapterSlug}`}
            className="text-blue-400 hover:text-blue-300 hover:underline font-medium"
          >
            {chapter.title}
          </Link>
          {' '}(Section {section.number})
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Source: ICAI Publication - November 2025 Edition
        </p>
      </div>
    </div>
  );
}

