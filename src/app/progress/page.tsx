'use client';

import React from 'react';
import { BarChart3, BookOpen, Target, Clock, Flame, TrendingUp, Calendar } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { formatTime, getGrade, cn } from '@/lib/utils';
import GST_MODULES, { CURRICULUM_STATS } from '@/data/curriculum';

export default function ProgressPage() {
  const { completedSections, quizAttempts, currentStreak, totalTimeSpent, lastStudyDate } = useAppStore();

  const totalSections = CURRICULUM_STATS.totalSections;
  const completedCount = completedSections.size;
  const progressPercent = Math.round((completedCount / totalSections) * 100);

  const avgScore = quizAttempts.length > 0
    ? Math.round(quizAttempts.reduce((acc, q) => acc + (q.score / q.totalPoints) * 100, 0) / quizAttempts.length)
    : 0;
  const bestScore = quizAttempts.length > 0
    ? Math.max(...quizAttempts.map(q => Math.round((q.score / q.totalPoints) * 100)))
    : 0;

  const moduleStats = GST_MODULES.map(module => {
    const moduleTotalSections = module.chapters.reduce((acc, ch) => acc + ch.sections.length, 0);
    const moduleCompleted = Array.from(completedSections).filter(s => s.startsWith(module.id)).length;
    return {
      ...module,
      totalSections: moduleTotalSections,
      completed: moduleCompleted,
      progress: moduleTotalSections > 0 ? Math.round((moduleCompleted / moduleTotalSections) * 100) : 0
    };
  });

  const recentAttempts = [...quizAttempts].sort((a, b) => 
    new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  ).slice(0, 5);

  return (
    <div className="space-y-6 animate-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Your Progress</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Track your GST learning journey</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="stats-card">
          <BookOpen className="w-8 h-8 text-primary-600 mb-3" />
          <div className="stats-value">{completedCount}</div>
          <div className="stats-label">Sections Done</div>
        </div>
        <div className="stats-card">
          <Target className="w-8 h-8 text-green-600 mb-3" />
          <div className="stats-value text-green-600">{quizAttempts.length}</div>
          <div className="stats-label">Quizzes Taken</div>
        </div>
        <div className="stats-card">
          <Flame className="w-8 h-8 text-orange-600 mb-3" />
          <div className="stats-value text-orange-600">{currentStreak}</div>
          <div className="stats-label">Day Streak</div>
        </div>
        <div className="stats-card">
          <Clock className="w-8 h-8 text-purple-600 mb-3" />
          <div className="stats-value text-purple-600">{formatTime(totalTimeSpent)}</div>
          <div className="stats-label">Time Studied</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Overall Progress */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" /> Overall Progress
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="14" fill="none" className="text-gray-200 dark:text-gray-700" />
                <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="14" fill="none" strokeDasharray={`${progressPercent * 4.4} 440`} strokeLinecap="round" className="text-primary-500" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-4xl font-bold">{progressPercent}%</span>
                <span className="text-sm text-gray-500">Complete</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">{completedCount} of {totalSections} sections</p>
            <p className="text-sm text-gray-500 mt-1">Estimated {CURRICULUM_STATS.totalHours}h total study time</p>
          </div>
        </div>

        {/* Quiz Performance */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" /> Quiz Performance
          </h2>
          {quizAttempts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
                  <div className={cn("text-3xl font-bold", getGrade(avgScore).color)}>{avgScore}%</div>
                  <div className="text-sm text-gray-500">Average Score</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-center">
                  <div className={cn("text-3xl font-bold", getGrade(bestScore).color)}>{bestScore}%</div>
                  <div className="text-sm text-gray-500">Best Score</div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent Attempts</h3>
                {recentAttempts.map((attempt, i) => {
                  const score = Math.round((attempt.score / attempt.totalPoints) * 100);
                  return (
                    <div key={attempt.id} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="text-sm text-gray-500">#{quizAttempts.length - i}</span>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className={cn("h-full", score >= 70 ? "bg-green-500" : score >= 50 ? "bg-yellow-500" : "bg-red-500")} style={{ width: `${score}%` }} />
                        </div>
                      </div>
                      <span className={cn("font-bold", getGrade(score).color)}>{score}%</span>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Target className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No quizzes taken yet</p>
              <p className="text-sm">Take a quiz to see your performance</p>
            </div>
          )}
        </div>
      </div>

      {/* Module Progress */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Progress by Module</h2>
        <div className="space-y-4">
          {moduleStats.map(module => (
            <div key={module.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-2xl">{module.icon}</span>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-white">{module.name}</h3>
                  <p className="text-sm text-gray-500">{module.chapters.length} chapters • {module.totalSections} sections</p>
                </div>
                <span className={cn("text-lg font-bold", module.progress === 100 ? "text-green-600" : "text-primary-600")}>{module.progress}%</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className={cn("h-full transition-all", module.progress === 100 ? "bg-green-500" : "bg-primary-500")} style={{ width: `${module.progress}%` }} />
              </div>
              <div className="mt-2 text-sm text-gray-500">{module.completed} of {module.totalSections} completed</div>
            </div>
          ))}
        </div>
      </div>

      {/* Study Calendar placeholder */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" /> Study Activity
        </h2>
        <div className="text-center py-8 text-gray-500">
          <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>Last studied: {lastStudyDate || 'Never'}</p>
          <p className="text-sm">Current streak: {currentStreak} days</p>
        </div>
      </div>
    </div>
  );
}
