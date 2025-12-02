'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Clock, BookOpen, Target, ChevronDown, ChevronUp } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { cn, getDifficultyColor, getRelevanceColor } from '@/lib/utils';
import GST_MODULES from '@/data/curriculum';

export default function ChapterPage() {
  const params = useParams();
  const moduleId = params?.moduleId as string;
  const chapterSlug = params?.chapterSlug as string;
  const { completedSections, markSectionComplete, addTimeSpent } = useAppStore();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const module = GST_MODULES.find(m => m.id === moduleId);
  const chapter = module?.chapters.find(ch => ch.slug === chapterSlug);

  if (!module || !chapter) {
    return (
      <div className="space-y-6 animate-in">
        <div className="card p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Chapter Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The chapter you're looking for doesn't exist.</p>
          <Link href={`/modules/${moduleId}`} className="btn btn-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Module
          </Link>
        </div>
      </div>
    );
  }

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  // Ensure completedSections is a Set
  const completedSet = completedSections instanceof Set 
    ? completedSections 
    : new Set(Array.isArray(completedSections) ? completedSections : []);

  const handleSectionComplete = (sectionId: string, minutes: number) => {
    const sectionKey = `${moduleId}-${chapter.id}-${sectionId}`;
    if (!completedSet.has(sectionKey)) {
      markSectionComplete(sectionKey);
      addTimeSpent(minutes * 60);
    }
  };
  
  const completedCount = chapter.sections.filter(s => 
    completedSet.has(`${moduleId}-${chapter.id}-${s.id}`)
  ).length;
  const progressPercent = chapter.sections.length > 0 
    ? Math.round((completedCount / chapter.sections.length) * 100) 
    : 0;
  const totalMinutes = chapter.sections.reduce((acc, s) => acc + s.estimatedMinutes, 0);

  return (
    <div className="space-y-6 animate-in">
      {/* Header */}
      <div>
        <Link href={`/modules/${moduleId}`} className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {module.name}
        </Link>
        <div className="flex items-start gap-4">
          <span className="text-5xl">{chapter.icon}</span>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {chapter.category === 'cgst-rules' ? chapter.title : `Chapter ${chapter.id}: ${chapter.title}`}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{chapter.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {chapter.sections.length} Sections
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                ~{Math.round(totalMinutes / 60)}h {totalMinutes % 60}m
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                {completedCount}/{chapter.sections.length} Completed
              </span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className={cn("h-full transition-all", progressPercent === 100 ? "bg-green-500" : "bg-primary-500")} 
                  style={{ width: `${progressPercent}%` }} 
                />
              </div>
              <span className="text-sm font-medium">{progressPercent}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {chapter.sections.map((section, index) => {
          const sectionKey = `${moduleId}-${chapter.id}-${section.id}`;
          const isCompleted = completedSet.has(sectionKey);
          const isExpanded = expandedSections.has(section.id);

          return (
            <div 
              key={section.id} 
              className={cn(
                "card overflow-hidden transition-all",
                isCompleted && "border-green-500 dark:border-green-500"
              )}
            >
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm",
                    isCompleted 
                      ? "bg-green-500 text-white" 
                      : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  )}>
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : section.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Section {section.number}: {section.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {section.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={cn("px-2 py-1 rounded text-xs font-medium", getDifficultyColor(section.difficulty))}>
                            {section.difficulty}
                          </span>
                          <span className={cn("px-2 py-1 rounded text-xs font-medium", getRelevanceColor(section.practicalRelevance))}>
                            {section.practicalRelevance} relevance
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            {section.estimatedMinutes}m
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSectionComplete(section.id, section.estimatedMinutes);
                        }}
                        className={cn(
                          "btn btn-sm flex-shrink-0",
                          isCompleted 
                            ? "btn-success" 
                            : "btn-primary"
                        )}
                      >
                        {isCompleted ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            Completed
                          </>
                        ) : (
                          <>
                            <Target className="w-4 h-4 mr-2" />
                            Mark Complete
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="flex-shrink-0 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className="px-6 pb-6 pt-0 border-t border-gray-200 dark:border-gray-700">
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Key Points:</h4>
                    <ul className="space-y-2">
                      {section.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-primary-500 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

