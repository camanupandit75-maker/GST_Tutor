'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BookOpen, Clock, ChevronRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { cn, getDifficultyColor } from '@/lib/utils';
import GST_MODULES from '@/data/curriculum';

export default function ModuleDetailPage() {
  const params = useParams();
  const moduleId = params?.moduleId as string;
  const { completedSections } = useAppStore();

  const module = GST_MODULES.find(m => m.id === moduleId);

  if (!module) {
    return (
      <div className="space-y-6 animate-in">
        <div className="card p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Module Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The module you're looking for doesn't exist.</p>
          <Link href="/modules" className="btn btn-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Modules
          </Link>
        </div>
      </div>
    );
  }

  const totalSections = module.chapters.reduce((acc, ch) => acc + ch.sections.length, 0);
  const completedCount = Array.from(completedSections).filter(s => s.startsWith(module.id)).length;
  const progressPercent = totalSections > 0 ? Math.round((completedCount / totalSections) * 100) : 0;
  const totalMinutes = module.chapters.reduce((acc, ch) => acc + ch.sections.reduce((a, s) => a + s.estimatedMinutes, 0), 0);

  return (
    <div className="space-y-6 animate-in">
      <div>
        <Link href="/modules" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Modules
        </Link>
        <div className="flex items-start gap-4">
          <span className="text-5xl">{module.icon}</span>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{module.name}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{module.fullName}</p>
            <p className="text-gray-500 mt-2">{module.description}</p>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" />{module.chapters.length} Chapters</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />~{Math.round(totalMinutes / 60)}h</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" />{completedCount}/{totalSections} done</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className={cn("h-full transition-all", progressPercent === 100 ? "bg-green-500" : "bg-primary-500")} style={{ width: `${progressPercent}%` }} />
              </div>
              <span className="text-sm font-medium">{progressPercent}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Chapters</h2>
        <div className="space-y-3">
          {module.chapters.map(chapter => {
            const chapterCompleted = chapter.sections.filter(s => completedSections.has(`${module.id}-${chapter.id}-${s.id}`)).length;
            const chapterProgress = chapter.sections.length > 0 ? Math.round((chapterCompleted / chapter.sections.length) * 100) : 0;
            const chapterMinutes = chapter.sections.reduce((acc, s) => acc + s.estimatedMinutes, 0);
            
            return (
              <Link key={chapter.id} href={`/modules/${module.id}/${chapter.slug}`} className="chapter-card flex items-center gap-4 group">
                <span className="text-2xl">{chapter.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 truncate">
                    {chapter.category === 'cgst-rules' ? chapter.title : `Ch ${chapter.id}: ${chapter.title}`}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-1">{chapter.description}</p>
                  <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                    <span>{chapter.sections.length} sections</span>
                    <span>•</span>
                    <span>~{Math.round(chapterMinutes / 60)}h</span>
                    <span>•</span>
                    <span>{chapterCompleted}/{chapter.sections.length} done</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className={cn("h-full", chapterProgress === 100 ? "bg-green-500" : "bg-primary-500")} style={{ width: `${chapterProgress}%` }} />
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

