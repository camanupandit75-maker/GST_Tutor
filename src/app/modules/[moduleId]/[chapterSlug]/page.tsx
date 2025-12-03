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
        <Link href={`/modules/${moduleId}`} className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {module.name}
        </Link>
        <div className="flex items-start gap-4">
          <span className="text-5xl">{chapter.icon}</span>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {chapter.category === 'cgst-rules' ? chapter.title : `Chapter ${chapter.id}: ${chapter.title}`}
            </h1>
            <p className="text-gray-300 mt-2">{chapter.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-300">
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
              <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className={cn("h-full transition-all", progressPercent === 100 ? "bg-green-500" : "bg-gradient-to-r from-blue-500 to-teal-500")} 
                  style={{ width: `${progressPercent}%` }} 
                />
              </div>
              <span className="text-sm font-medium text-white">{progressPercent}%</span>
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
                "card overflow-hidden transition-all bg-slate-800 border-slate-700",
                isCompleted && "border-green-500"
              )}
            >
              <div 
                className="p-6 cursor-pointer hover:bg-slate-700/50 transition-colors"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm",
                    isCompleted 
                      ? "bg-green-500 text-white" 
                      : "bg-slate-700 text-white"
                  )}>
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : section.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">
                          Section {section.number}: {section.title}
                        </h3>
                        <p className="text-sm text-gray-300 mt-1">
                          {section.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
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
                    className="flex-shrink-0 p-2 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className="px-6 pb-6 pt-0 border-t border-slate-700">
                  <div className="mt-4">
                    <h4 className="font-medium text-white mb-3">Key Points:</h4>
                    <ul className="space-y-2">
                      {section.keyPoints.map((point, idx) => {
                        // Convert section references to hyperlinks using React components
                        const sectionPattern = /(Section|Rule|Sec)\s+(\d+[A-Za-z]*(?:\([^)]+\))?)/gi;
                        const parts: Array<{type: 'text' | 'link', content: string, href?: string}> = [];
                        let lastIndex = 0;
                        let match;
                        
                        while ((match = sectionPattern.exec(point)) !== null) {
                          // Add text before match
                          if (match.index > lastIndex) {
                            parts.push({type: 'text', content: point.substring(lastIndex, match.index)});
                          }
                          
                          // Find the referenced section
                          const type = match[1];
                          const num = match[2];
                          let foundSection: any = null;
                          let foundChapter: any = null;
                          let foundModule: any = null;
                          
                          GST_MODULES.forEach(mod => {
                            mod.chapters.forEach(ch => {
                              ch.sections.forEach(sec => {
                                const secNum = sec.number.replace(/[()]/g, '');
                                const refNum = num.replace(/[()]/g, '');
                                
                                if (secNum === refNum || sec.number === num) {
                                  foundSection = sec;
                                  foundChapter = ch;
                                  foundModule = mod;
                                }
                              });
                            });
                          });
                          
                          if (foundSection && foundChapter && foundModule) {
                            // Link to section detail page to show full legal text
                            const href = `/modules/${foundModule.id}/${foundChapter.slug}/${foundSection.id}`;
                            parts.push({type: 'link', content: match[0], href});
                          } else {
                            parts.push({type: 'text', content: match[0]});
                          }
                          
                          lastIndex = sectionPattern.lastIndex;
                        }
                        
                        // Add remaining text
                        if (lastIndex < point.length) {
                          parts.push({type: 'text', content: point.substring(lastIndex)});
                        }
                        
                        // If no matches, just use original text
                        if (parts.length === 0) {
                          parts.push({type: 'text', content: point});
                        }
                        
                        return (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>
                              {parts.map((part, partIdx) => 
                                part.type === 'link' && part.href ? (
                                  <Link 
                                    key={partIdx}
                                    href={part.href}
                                    className="text-blue-400 hover:text-blue-300 underline font-medium"
                                  >
                                    {part.content}
                                  </Link>
                                ) : (
                                  <span key={partIdx}>{part.content}</span>
                                )
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  
                  {/* Related Sections */}
                  {(() => {
                    // Find related sections based on keywords and topics
                    const relatedSections: Array<{section: any, chapter: any, module: any}> = [];
                    const sectionTitleLower = section.title.toLowerCase();
                    const sectionDescLower = section.description.toLowerCase();
                    
                    // Keywords to match related sections
                    const keywords = [
                      ...sectionTitleLower.split(/\s+/).filter(w => w.length > 3),
                      ...sectionDescLower.split(/\s+/).filter(w => w.length > 3)
                    ];
                    
                    GST_MODULES.forEach(mod => {
                      mod.chapters.forEach(ch => {
                        ch.sections.forEach(sec => {
                          // Skip current section
                          if (mod.id === moduleId && ch.id === chapter.id && sec.id === section.id) return;
                          
                          const secTitleLower = sec.title.toLowerCase();
                          const secDescLower = sec.description.toLowerCase();
                          
                          // Check for keyword matches
                          const hasMatch = keywords.some(keyword => 
                            keyword.length > 3 && (
                              secTitleLower.includes(keyword) || 
                              secDescLower.includes(keyword) ||
                              sec.keyPoints.some((kp: string) => kp.toLowerCase().includes(keyword))
                            )
                          );
                          
                          if (hasMatch) {
                            relatedSections.push({section: sec, chapter: ch, module: mod});
                          }
                        });
                      });
                    });
                    
                    // Limit to 3 most relevant
                    const topRelated = relatedSections.slice(0, 3);
                    
                    return (
                      <>
                        {/* Reference Section */}
                        <div className="mt-6 pt-4 border-t border-slate-700">
                          <h4 className="font-medium text-white mb-3">Reference:</h4>
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
                            {' '}
                            <Link 
                              href={`/modules/${moduleId}/${chapterSlug}/${section.id}`}
                              className="text-blue-400 hover:text-blue-300 hover:underline ml-2"
                            >
                              View Section Details →
                            </Link>
                          </p>
                        </div>
                        
                        {/* Related Sections */}
                        {topRelated.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-slate-700">
                            <h4 className="font-medium text-white mb-3">Related Sections:</h4>
                            <ul className="space-y-2">
                              {topRelated.map((rel, idx) => (
                                <li key={idx}>
                                  <Link 
                                    href={`/modules/${rel.module.id}/${rel.chapter.slug}/${rel.section.id}`}
                                    className="text-sm text-blue-400 hover:text-blue-300 hover:underline flex items-start gap-2"
                                  >
                                    <span className="text-blue-400 mt-1">→</span>
                                    <span>
                                      <span className="font-medium">Section {rel.section.number}: {rel.section.title}</span>
                                      {' '}in{' '}
                                      <span className="font-medium">{rel.chapter.title}</span>
                                      {' '}({rel.module.name})
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

