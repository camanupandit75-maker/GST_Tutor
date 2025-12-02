'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
    const isDark = localStorage.getItem('darkMode') === 'true' || 
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    document.documentElement.classList.toggle('dark', newMode);
  };

  const progress = Math.min(Math.round((completedSections.size / 100) * 100), 100);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between px-4 h-16">
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <Menu className="w-6 h-6" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary-600" />
            <span className="font-bold text-lg">GST Tutor</span>
          </Link>
          <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setSidebarOpen(false)}>
          <aside className="w-72 h-full bg-white dark:bg-slate-800 p-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center gap-2">
                <GraduationCap className="w-8 h-8 text-primary-600" />
                <span className="font-bold text-xl">GST Tutor</span>
              </Link>
              <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="space-y-1">
              {NAV_ITEMS.map(item => (
                <Link key={item.href} href={item.href} onClick={() => setSidebarOpen(false)}
                  className={cn("sidebar-link", pathname === item.href && "active")}>
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-3">
            <GraduationCap className="w-10 h-10 text-primary-600" />
            <div>
              <h1 className="font-bold text-xl text-gray-900 dark:text-white">GST Tutor</h1>
              <p className="text-xs text-gray-500">ICAI Nov 2025 Edition</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {NAV_ITEMS.map(item => (
            <Link key={item.href} href={item.href}
              className={cn("sidebar-link", pathname === item.href && "active")}>
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 dark:text-white truncate">{userName}</p>
              <div className="flex items-center gap-1 text-orange-500">
                <Flame className="w-4 h-4" />
                <span className="text-sm">{currentStreak} day streak</span>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-primary-500 transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <button onClick={toggleDarkMode} className="mt-4 w-full btn btn-ghost btn-sm justify-start">
            {darkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64 pt-16 lg:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
