'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Target, Clock, Flame, Trophy, ChevronRight, BarChart3, MessageCircle, Brain } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { formatTime, getGreeting, getMotivationalMessage, cn } from '@/lib/utils';
import GST_MODULES, { CURRICULUM_STATS } from '@/data/curriculum';
import PageTransition from '@/components/PageTransition';

export default function Dashboard() {
  const { userName, completedSections, quizAttempts, currentStreak, totalTimeSpent, unlockedAchievements } = useAppStore();

  const totalSections = CURRICULUM_STATS.totalSections;
  const completedCount = completedSections.size;
  const progressPercent = Math.round((completedCount / totalSections) * 100);
  const avgQuizScore = quizAttempts.length > 0
    ? Math.round(quizAttempts.reduce((acc, q) => acc + (q.score / q.totalPoints) * 100, 0) / quizAttempts.length)
    : 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <PageTransition>
      <div className="space-y-8">
      {/* Welcome Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="p-6 md:p-8 relative overflow-hidden rounded-2xl border border-gray-700"
          style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #0d9488 100%)' }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
              <motion.h1 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold text-white mb-2"
              >
              {getGreeting()}, {userName}! 👋
              </motion.h1>
              <motion.p 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/90"
              >
                {getMotivationalMessage(progressPercent)}
              </motion.p>
          </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/modules" className="btn btn-primary btn-lg inline-flex items-center">
            Continue Learning
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: BookOpen, value: completedCount, label: 'Sections Completed', color: 'blue', delay: 0 },
            { icon: Target, value: quizAttempts.length, label: 'Quizzes Taken', color: 'green', delay: 0.1 },
            { icon: Flame, value: currentStreak, label: 'Day Streak', color: 'orange', delay: 0.2 },
            { icon: Clock, value: formatTime(totalTimeSpent), label: 'Time Studied', color: 'purple', delay: 0.3 },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="stats-card bg-slate-800 border-slate-700"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: stat.delay + 0.2, type: "spring" }}
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-3 relative z-10",
                  stat.color === 'blue' && "bg-blue-500/20",
                  stat.color === 'green' && "bg-green-500/20",
                  stat.color === 'orange' && "bg-orange-500/20",
                  stat.color === 'purple' && "bg-purple-500/20"
                )}
              >
                <stat.icon className={cn(
                  "w-6 h-6",
                  stat.color === 'blue' && "text-blue-400",
                  stat.color === 'green' && "text-green-400",
                  stat.color === 'orange' && "text-orange-400",
                  stat.color === 'purple' && "text-purple-400"
                )} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: stat.delay + 0.4 }}
                className={cn(
                  "stats-value relative z-10",
                  stat.color === 'blue' && "text-blue-400",
                  stat.color === 'green' && "text-green-400",
                  stat.color === 'orange' && "text-orange-400",
                  stat.color === 'purple' && "text-purple-400"
                )}
              >
                {stat.value}
              </motion.div>
              <div className="stats-label relative z-10">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      {/* Progress & Modules */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Overall Progress */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="lg:col-span-1 bg-gray-800 border border-gray-700 rounded-xl p-6"
          >
            <h2 className="text-lg font-bold text-white mb-4">Overall Progress</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="none" className="text-white/10" />
                  <motion.circle
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progressPercent / 100 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    cx="64" cy="64" r="56" stroke="url(#gradient)" strokeWidth="12" fill="none" strokeDasharray="352" strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#0d9488" />
                    </linearGradient>
                  </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="text-3xl font-bold text-white"
                  >
                    {progressPercent}%
                  </motion.span>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-300">
            {completedCount} of {totalSections} sections completed
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
              <div><div className="font-bold text-green-400">{CURRICULUM_STATS.byDifficulty.basic}</div><div className="text-gray-400">Basic</div></div>
              <div><div className="font-bold text-yellow-400">{CURRICULUM_STATS.byDifficulty.intermediate}</div><div className="text-gray-400">Intermediate</div></div>
              <div><div className="font-bold text-red-400">{CURRICULUM_STATS.byDifficulty.advanced}</div><div className="text-gray-400">Advanced</div></div>
          </div>
          </motion.div>

        {/* Modules */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 bg-gray-800 border border-gray-700 rounded-xl p-6"
          >
          <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white">GST Modules</h2>
              <Link href="/modules" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">View All →</Link>
          </div>
          <div className="space-y-4">
              {GST_MODULES.map((module, index) => {
              const moduleCompleted = Array.from(completedSections).filter(s => s.startsWith(module.id)).length;
              const moduleTotalSections = module.chapters.reduce((acc, ch) => acc + ch.sections.length, 0);
              const moduleProgress = moduleTotalSections > 0 ? Math.round((moduleCompleted / moduleTotalSections) * 100) : 0;
              
              return (
                  <motion.div
                    key={module.id}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Link href={`/modules/${module.id}`} className="bg-gray-800 border border-gray-700 rounded-xl p-6 block hover:border-gray-600 transition-colors">
                      <div className="flex items-center gap-4">
                        <motion.span 
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          className="text-3xl"
                        >
                          {module.icon}
                        </motion.span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-white">{module.name}</h3>
                          <p className="text-sm text-gray-400 truncate">{module.chapters.length} Chapters • {moduleTotalSections} Sections</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-400">{moduleProgress}%</div>
                          <div className="w-20 h-2 bg-gray-700 rounded-full mt-1 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${moduleProgress}%` }}
                              transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                              className={cn(
                                "h-full rounded-full",
                                moduleProgress === 100 ? "bg-gradient-to-r from-green-500 to-green-400" : "bg-gradient-to-r from-blue-500 to-teal-500"
                              )}
                            />
                      </div>
                    </div>
                  </div>
                </Link>
                  </motion.div>
              );
            })}
          </div>
          </motion.div>
      </div>

      {/* Quick Actions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-4"
        >
          {[
            { href: '/quiz', icon: Brain, title: 'Start Quiz', desc: 'Test your knowledge', bgColor: 'bg-blue-600', iconColor: 'text-white', score: avgQuizScore },
            { href: '/progress', icon: BarChart3, title: 'View Progress', desc: 'Track your journey', bgColor: 'bg-teal-500', iconColor: 'text-white', score: undefined },
            { href: '/achievements', icon: Trophy, title: 'Achievements', desc: 'View your badges', bgColor: 'bg-orange-500', iconColor: 'text-white', score: undefined },
          ].map((action, index) => (
            <motion.div
              key={action.href}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={action.href} className="bg-gray-800 border border-gray-700 rounded-xl p-6 group relative overflow-hidden">
          <div className="flex items-center gap-4">
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", action.bgColor)}>
                    <action.icon className={cn("w-6 h-6", action.iconColor)} />
            </div>
            <div>
                    <h3 className="font-semibold text-white">{action.title}</h3>
                    <p className="text-sm text-gray-400">{action.desc}</p>
            </div>
          </div>
                {action.score !== undefined && action.score > 0 && (
                  <div className="mt-4 text-sm text-gray-300">
                    Average Score: <span className="font-medium text-blue-400">{action.score}%</span>
            </div>
                )}
        </Link>
            </motion.div>
          ))}
        </motion.div>

      {/* Achievements Preview */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-800 border border-gray-700 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white">Achievements</h2>
            <Link href="/achievements" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">View All →</Link>
        </div>
        <div className="flex items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2"
            >
              <Trophy className="w-8 h-8 text-yellow-400" />
            <div>
                <div className="text-2xl font-bold text-white">{unlockedAchievements.length}</div>
                <div className="text-sm text-gray-400">Unlocked</div>
              </div>
            </motion.div>
            <div className="flex-1 h-3 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(unlockedAchievements.length / 8) * 100}%` }}
                transition={{ delay: 0.9, duration: 1 }}
                className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
              />
            </div>
            <span className="text-sm text-gray-400">{unlockedAchievements.length}/8</span>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}





