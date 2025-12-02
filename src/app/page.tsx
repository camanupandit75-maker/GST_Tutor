'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Target, Clock, Flame, Trophy, ChevronRight, BarChart3, MessageCircle } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { formatTime, getGreeting, getMotivationalMessage, cn } from '@/lib/utils';
import GST_MODULES, { CURRICULUM_STATS } from '@/data/curriculum';

export default function Dashboard() {
  const { userName, completedSections, quizAttempts, currentStreak, totalTimeSpent, unlockedAchievements } = useAppStore();

  const totalSections = CURRICULUM_STATS.totalSections;
  const completedCount = completedSections.size;
  const progressPercent = Math.round((completedCount / totalSections) * 100);
  const avgQuizScore = quizAttempts.length > 0
    ? Math.round(quizAttempts.reduce((acc, q) => acc + (q.score / q.totalPoints) * 100, 0) / quizAttempts.length)
    : 0;

  return (
    <div className="space-y-8 animate-in">
      {/* Welcome Section */}
      <div className="card p-6 md:p-8 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-primary-200 dark:border-primary-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {getGreeting()}, {userName}! 👋
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{getMotivationalMessage(progressPercent)}</p>
          </div>
          <Link href="/modules" className="btn btn-primary btn-lg">
            Continue Learning
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="stats-card">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-3">
            <BookOpen className="w-6 h-6 text-primary-600" />
          </div>
          <div className="stats-value">{completedCount}</div>
          <div className="stats-label">Sections Completed</div>
        </div>
        <div className="stats-card">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-3">
            <Target className="w-6 h-6 text-green-600" />
          </div>
          <div className="stats-value text-green-600">{quizAttempts.length}</div>
          <div className="stats-label">Quizzes Taken</div>
        </div>
        <div className="stats-card">
          <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-3">
            <Flame className="w-6 h-6 text-orange-600" />
          </div>
          <div className="stats-value text-orange-600">{currentStreak}</div>
          <div className="stats-label">Day Streak</div>
        </div>
        <div className="stats-card">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-3">
            <Clock className="w-6 h-6 text-purple-600" />
          </div>
          <div className="stats-value text-purple-600">{formatTime(totalTimeSpent)}</div>
          <div className="stats-label">Time Studied</div>
        </div>
      </div>

      {/* Progress & Modules */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Overall Progress */}
        <div className="lg:col-span-1 card p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Overall Progress</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="none" className="text-gray-200 dark:text-gray-700" />
                <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="none" strokeDasharray={`${progressPercent * 3.52} 352`} strokeLinecap="round" className="text-primary-500" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{progressPercent}%</span>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-600 dark:text-gray-400">
            {completedCount} of {totalSections} sections completed
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
            <div><div className="font-bold text-green-600">{CURRICULUM_STATS.byDifficulty.basic}</div><div className="text-gray-500">Basic</div></div>
            <div><div className="font-bold text-yellow-600">{CURRICULUM_STATS.byDifficulty.intermediate}</div><div className="text-gray-500">Intermediate</div></div>
            <div><div className="font-bold text-red-600">{CURRICULUM_STATS.byDifficulty.advanced}</div><div className="text-gray-500">Advanced</div></div>
          </div>
        </div>

        {/* Modules */}
        <div className="lg:col-span-2 card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">GST Modules</h2>
            <Link href="/modules" className="text-primary-600 hover:text-primary-700 text-sm font-medium">View All →</Link>
          </div>
          <div className="space-y-4">
            {GST_MODULES.map(module => {
              const moduleCompleted = Array.from(completedSections).filter(s => s.startsWith(module.id)).length;
              const moduleTotalSections = module.chapters.reduce((acc, ch) => acc + ch.sections.length, 0);
              const moduleProgress = moduleTotalSections > 0 ? Math.round((moduleCompleted / moduleTotalSections) * 100) : 0;
              
              return (
                <Link key={module.id} href={`/modules/${module.id}`} className="module-card block">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{module.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{module.name}</h3>
                      <p className="text-sm text-gray-500 truncate">{module.chapters.length} Chapters • {moduleTotalSections} Sections</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary-600">{moduleProgress}%</div>
                      <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-1">
                        <div className={cn("h-full rounded-full", moduleProgress === 100 ? "bg-green-500" : "bg-primary-500")} style={{ width: `${moduleProgress}%` }} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/quiz" className="card p-6 hover:border-primary-400 transition-colors group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Take a Quiz</h3>
              <p className="text-sm text-gray-500">Test your knowledge</p>
            </div>
          </div>
          {avgQuizScore > 0 && <div className="mt-4 text-sm text-gray-500">Average Score: <span className="font-medium text-primary-600">{avgQuizScore}%</span></div>}
        </Link>

        <Link href="/tutor" className="card p-6 hover:border-green-400 transition-colors group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">AI Tutor</h3>
              <p className="text-sm text-gray-500">Get instant help</p>
            </div>
          </div>
        </Link>

        <Link href="/progress" className="card p-6 hover:border-purple-400 transition-colors group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">View Progress</h3>
              <p className="text-sm text-gray-500">Track your learning</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Achievements Preview */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Achievements</h2>
          <Link href="/achievements" className="text-primary-600 hover:text-primary-700 text-sm font-medium">View All →</Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{unlockedAchievements.length}</div>
              <div className="text-sm text-gray-500">Unlocked</div>
            </div>
          </div>
          <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-yellow-400 to-amber-500" style={{ width: `${(unlockedAchievements.length / 8) * 100}%` }} />
          </div>
          <span className="text-sm text-gray-500">{unlockedAchievements.length}/8</span>
        </div>
      </div>
    </div>
  );
}
