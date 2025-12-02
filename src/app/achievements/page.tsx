'use client';

import React from 'react';
import { Trophy, Lock, CheckCircle2, Star, Flame, Target, BookOpen, Award, GraduationCap } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { cn } from '@/lib/utils';

const ACHIEVEMENTS = [
  { id: 'first-lesson', title: 'First Step', description: 'Complete your first section', icon: '🎯', category: 'Learning' },
  { id: 'five-sections', title: 'Getting Started', description: 'Complete 5 sections', icon: '📚', category: 'Learning' },
  { id: 'ten-sections', title: 'Knowledge Seeker', description: 'Complete 10 sections', icon: '📖', category: 'Learning' },
  { id: 'twenty-sections', title: 'Dedicated Learner', description: 'Complete 20 sections', icon: '🎓', category: 'Learning' },
  { id: 'fifty-sections', title: 'GST Scholar', description: 'Complete 50 sections', icon: '👨‍🎓', category: 'Learning' },
  { id: 'first-quiz', title: 'Quiz Taker', description: 'Complete your first quiz', icon: '✅', category: 'Quiz' },
  { id: 'quiz-master', title: 'Quiz Master', description: 'Pass 10 quizzes with 70%+', icon: '🏆', category: 'Quiz' },
  { id: 'perfect-score', title: 'Perfectionist', description: 'Score 100% on any quiz', icon: '💯', category: 'Quiz' },
  { id: 'streak-3', title: 'Consistent', description: '3 day study streak', icon: '🔥', category: 'Streak' },
  { id: 'streak-7', title: 'Week Warrior', description: '7 day study streak', icon: '⚡', category: 'Streak' },
  { id: 'streak-30', title: 'Monthly Champion', description: '30 day study streak', icon: '🌟', category: 'Streak' },
  { id: 'cgst-expert', title: 'CGST Expert', description: 'Complete all CGST Act sections', icon: '📜', category: 'Mastery' },
  { id: 'igst-expert', title: 'IGST Expert', description: 'Complete all IGST sections', icon: '🌍', category: 'Mastery' },
  { id: 'rules-master', title: 'Rules Master', description: 'Complete all Rules sections', icon: '📋', category: 'Mastery' },
  { id: 'gst-professional', title: 'GST Professional', description: 'Complete entire curriculum', icon: '🎖️', category: 'Mastery' },
  { id: 'time-10h', title: 'Time Investor', description: 'Study for 10 hours total', icon: '⏰', category: 'Time' },
];

export default function AchievementsPage() {
  const { unlockedAchievements, completedSections, quizAttempts, currentStreak, totalTimeSpent } = useAppStore();

  const checkUnlocked = (id: string): boolean => {
    const sections = completedSections.size;
    const quizzes = quizAttempts.length;
    const passedQuizzes = quizAttempts.filter(q => (q.score / q.totalPoints) >= 0.7).length;
    const perfectQuizzes = quizAttempts.filter(q => q.score === q.totalPoints).length;
    const hours = totalTimeSpent / 3600;

    switch (id) {
      case 'first-lesson': return sections >= 1;
      case 'five-sections': return sections >= 5;
      case 'ten-sections': return sections >= 10;
      case 'twenty-sections': return sections >= 20;
      case 'fifty-sections': return sections >= 50;
      case 'first-quiz': return quizzes >= 1;
      case 'quiz-master': return passedQuizzes >= 10;
      case 'perfect-score': return perfectQuizzes >= 1;
      case 'streak-3': return currentStreak >= 3;
      case 'streak-7': return currentStreak >= 7;
      case 'streak-30': return currentStreak >= 30;
      case 'time-10h': return hours >= 10;
      default: return unlockedAchievements.includes(id);
    }
  };

  const getProgress = (id: string): { current: number; target: number } => {
    const sections = completedSections.size;
    const quizzes = quizAttempts.length;
    const passedQuizzes = quizAttempts.filter(q => (q.score / q.totalPoints) >= 0.7).length;
    const perfectQuizzes = quizAttempts.filter(q => q.score === q.totalPoints).length;
    const hours = Math.floor(totalTimeSpent / 3600);

    switch (id) {
      case 'first-lesson': return { current: Math.min(sections, 1), target: 1 };
      case 'five-sections': return { current: Math.min(sections, 5), target: 5 };
      case 'ten-sections': return { current: Math.min(sections, 10), target: 10 };
      case 'twenty-sections': return { current: Math.min(sections, 20), target: 20 };
      case 'fifty-sections': return { current: Math.min(sections, 50), target: 50 };
      case 'first-quiz': return { current: Math.min(quizzes, 1), target: 1 };
      case 'quiz-master': return { current: Math.min(passedQuizzes, 10), target: 10 };
      case 'perfect-score': return { current: Math.min(perfectQuizzes, 1), target: 1 };
      case 'streak-3': return { current: Math.min(currentStreak, 3), target: 3 };
      case 'streak-7': return { current: Math.min(currentStreak, 7), target: 7 };
      case 'streak-30': return { current: Math.min(currentStreak, 30), target: 30 };
      case 'time-10h': return { current: Math.min(hours, 10), target: 10 };
      default: return { current: 0, target: 1 };
    }
  };

  const categories = ['Learning', 'Quiz', 'Streak', 'Mastery', 'Time'];
  const unlockedCount = ACHIEVEMENTS.filter(a => checkUnlocked(a.id)).length;

  return (
    <div className="space-y-6 animate-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Achievements</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Track your milestones and earn badges</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-yellow-500">{unlockedCount}/{ACHIEVEMENTS.length}</div>
          <div className="text-sm text-gray-500">Unlocked</div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="card p-6 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-yellow-200 dark:border-yellow-800">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
            <Trophy className="w-8 h-8 text-yellow-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Achievement Progress</h2>
            <p className="text-gray-600 dark:text-gray-400">{unlockedCount} of {ACHIEVEMENTS.length} achievements unlocked</p>
            <div className="mt-2 h-3 bg-yellow-200 dark:bg-yellow-900/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-yellow-400 to-amber-500" style={{ width: `${(unlockedCount / ACHIEVEMENTS.length) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements by Category */}
      {categories.map(category => {
        const categoryAchievements = ACHIEVEMENTS.filter(a => a.category === category);
        const categoryUnlocked = categoryAchievements.filter(a => checkUnlocked(a.id)).length;
        
        return (
          <div key={category} className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">{category}</h2>
              <span className="text-sm text-gray-500">{categoryUnlocked}/{categoryAchievements.length}</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryAchievements.map(achievement => {
                const unlocked = checkUnlocked(achievement.id);
                const progress = getProgress(achievement.id);
                const progressPercent = (progress.current / progress.target) * 100;
                
                return (
                  <div key={achievement.id} className={cn(
                    "relative p-4 rounded-xl border-2 transition-all",
                    unlocked 
                      ? "border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-700" 
                      : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
                  )}>
                    {unlocked && (
                      <div className="absolute -top-2 -right-2">
                        <CheckCircle2 className="w-6 h-6 text-yellow-500 bg-white dark:bg-gray-900 rounded-full" />
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <span className={cn("text-3xl", !unlocked && "grayscale opacity-50")}>{achievement.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className={cn("font-semibold", unlocked ? "text-gray-900 dark:text-white" : "text-gray-500")}>{achievement.title}</h3>
                        <p className="text-sm text-gray-500 mt-0.5">{achievement.description}</p>
                        {!unlocked && progress.target > 1 && (
                          <div className="mt-2">
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                              <span>{progress.current}/{progress.target}</span>
                              <span>{Math.round(progressPercent)}%</span>
                            </div>
                            <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full bg-primary-500" style={{ width: `${progressPercent}%` }} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
