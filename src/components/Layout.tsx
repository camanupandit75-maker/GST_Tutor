'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, BookOpen, Target, BarChart3, MessageCircle, Trophy, Settings, Menu, X, Sun, Moon, Flame, GraduationCap
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { href: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/modules', icon: BookOpen, label: 'Modules' },
  { href: '/quiz', icon: Target, label: 'Quiz' },
  { href: '/progress', icon: BarChart3, label: 'Progress' },
  { href: '/tutor', icon: MessageCircle, label: 'AI Tutor' },
  { href: '/achievements', icon: Trophy, label: 'Achievements' },
  { href: '/settings', icon: Settings, label: 'Settings' },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { userName, currentStreak, completedSections } = useAppStore();

  useEffect(() => {
    // Default to dark mode
    const savedMode = localStorage.getItem('darkMode');
    const isDark = savedMode === null ? true : savedMode === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    if (!isDark) {
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    document.documentElement.classList.toggle('dark', newMode);
    document.documentElement.classList.toggle('light', !newMode);
  };

  const progress = Math.min(Math.round((completedSections.size / 100) * 100), 100);

  return (
    <div className="min-h-screen bg-slate-900">
      
      {/* Mobile Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-strong backdrop-blur-xl border-b border-white/10"
      >
        <div className="flex items-center justify-between px-4 h-16">
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => setSidebarOpen(true)} 
            className="p-2 rounded-xl glass hover:bg-white/10 transition-colors"
          >
            <Menu className="w-6 h-6 text-white" />
          </motion.button>
          <Link href="/" className="flex items-center gap-2">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <GraduationCap className="w-8 h-8 text-blue-400" />
            </motion.div>
            <span className="font-bold text-lg text-white">GST Tutor</span>
          </Link>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode} 
            className="p-2 rounded-xl glass hover:bg-white/10 transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-400" />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" 
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside 
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 z-50 w-72 glass-strong p-4" 
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <Link href="/" className="flex items-center gap-2">
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                  <span className="font-bold text-xl text-white">GST Tutor</span>
                </Link>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSidebarOpen(false)} 
                  className="p-2 rounded-xl glass hover:bg-white/10"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>
              <nav className="space-y-1">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link 
                      href={item.href} 
                      onClick={() => setSidebarOpen(false)}
                      className={cn("sidebar-link", pathname === item.href && "active")}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.aside 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 glass-strong border-r border-white/10"
      >
        <div className="p-6">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <GraduationCap className="w-10 h-10 text-blue-400" />
            </motion.div>
            <div>
              <h1 className="font-bold text-xl text-white">GST Tutor</h1>
              <p className="text-xs text-gray-400">ICAI Nov 2025 Edition</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto scrollbar-thin">
          {NAV_ITEMS.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link 
                href={item.href}
                className={cn("sidebar-link", pathname === item.href && "active")}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/50"
            >
              {userName.charAt(0).toUpperCase()}
            </motion.div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-white truncate">{userName}</p>
              <div className="flex items-center gap-1 text-orange-400">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <Flame className="w-4 h-4" />
                </motion.div>
                <span className="text-sm">{currentStreak} day streak</span>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Progress</span>
              <span className="font-medium text-white">{progress}%</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
              />
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode} 
            className="mt-4 w-full px-4 py-2.5 bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-blue-500 rounded-xl text-white text-sm font-medium transition-all flex items-center justify-start"
          >
            {darkMode ? <Sun className="w-4 h-4 mr-2 text-yellow-400" /> : <Moon className="w-4 h-4 mr-2 text-blue-400" />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </motion.button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="lg:pl-64 pt-16 lg:pt-0 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
