'use client';

import React, { useState } from 'react';
import { Settings, User, Bell, Volume2, Moon, Sun, Monitor, Trash2, Download, Info } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { cn } from '@/lib/utils';

export default function SettingsPage() {
  const { userName, setUserName, userPreferences, setUserPreferences, completedSections, quizAttempts, totalTimeSpent } = useAppStore();
  const [editingName, setEditingName] = useState(false);
  const [newName, setNewName] = useState(userName);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSaveName = () => {
    if (newName.trim()) {
      setUserName(newName.trim());
      setEditingName(false);
    }
  };

  const handleResetProgress = () => {
    localStorage.removeItem('gst-tutor-storage');
    window.location.reload();
  };

  const handleExportData = () => {
    const data = {
      userName,
      completedSections: Array.from(completedSections),
      quizAttempts,
      totalTimeSpent,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gst-tutor-progress-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Settings className="w-8 h-8" /> Settings
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Customize your learning experience</p>
      </div>

      {/* Profile */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <User className="w-5 h-5" /> Profile
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Display Name</label>
            {editingName ? (
              <div className="flex gap-2">
                <input type="text" value={newName} onChange={e => setNewName(e.target.value)}
                  className="input flex-1" placeholder="Enter your name" autoFocus />
                <button onClick={handleSaveName} className="btn btn-primary">Save</button>
                <button onClick={() => { setEditingName(false); setNewName(userName); }} className="btn btn-secondary">Cancel</button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <span className="text-lg font-medium text-gray-900 dark:text-white">{userName}</span>
                <button onClick={() => setEditingName(true)} className="btn btn-ghost btn-sm">Edit</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Moon className="w-5 h-5" /> Appearance
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Theme</label>
            <div className="flex gap-2">
              {[
                { value: 'light', icon: Sun, label: 'Light' },
                { value: 'dark', icon: Moon, label: 'Dark' },
                { value: 'system', icon: Monitor, label: 'System' }
              ].map(option => (
                <button key={option.value}
                  onClick={() => setUserPreferences({ theme: { ...userPreferences.theme, mode: option.value as any } })}
                  className={cn("flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-all",
                    userPreferences.theme.mode === option.value ? "bg-primary-600 text-white" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200")}>
                  <option.icon className="w-4 h-4" />
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Font Size</label>
            <div className="flex gap-2">
              {['small', 'medium', 'large'].map(size => (
                <button key={size}
                  onClick={() => setUserPreferences({ theme: { ...userPreferences.theme, fontSize: size } })}
                  className={cn("flex-1 py-2 px-4 rounded-lg font-medium capitalize transition-all",
                    userPreferences.theme.fontSize === size ? "bg-primary-600 text-white" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200")}>
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Bell className="w-5 h-5" /> Notifications & Sound
        </h2>
        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-500" />
              <span>Enable notifications</span>
            </div>
            <input type="checkbox" checked={userPreferences.notifications}
              onChange={e => setUserPreferences({ notifications: e.target.checked })}
              className="w-5 h-5 rounded border-gray-300 text-primary-600" />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-gray-500" />
              <span>Sound effects</span>
            </div>
            <input type="checkbox" checked={userPreferences.soundEffects}
              onChange={e => setUserPreferences({ soundEffects: e.target.checked })}
              className="w-5 h-5 rounded border-gray-300 text-primary-600" />
          </label>
        </div>
      </div>

      {/* Data Management */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Download className="w-5 h-5" /> Data Management
        </h2>
        <div className="space-y-4">
          <button onClick={handleExportData} className="w-full btn btn-secondary justify-start">
            <Download className="w-5 h-5 mr-2" /> Export Progress Data
          </button>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            {showResetConfirm ? (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-700 dark:text-red-400 mb-3">Are you sure? This will delete all your progress, quiz history, and achievements.</p>
                <div className="flex gap-2">
                  <button onClick={handleResetProgress} className="btn btn-danger flex-1">Yes, Reset Everything</button>
                  <button onClick={() => setShowResetConfirm(false)} className="btn btn-secondary flex-1">Cancel</button>
                </div>
              </div>
            ) : (
              <button onClick={() => setShowResetConfirm(true)} className="w-full btn btn-ghost text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 justify-start">
                <Trash2 className="w-5 h-5 mr-2" /> Reset All Progress
              </button>
            )}
          </div>
        </div>
      </div>

      {/* About */}
      <div className="card p-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Info className="w-5 h-5" /> About
        </h2>
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <p><strong>Gst<span className="text-teal-400">Ek</span></strong> - Complete GST Learning Platform</p>
          <p>Based on ICAI GST Act(s) & Rules - November 2025 Edition</p>
          <p>Version 1.0.0</p>
          <p className="text-xs mt-4">This platform is for educational purposes. Always refer to official government notifications and circulars for the latest GST provisions.</p>
        </div>
      </div>
    </div>
  );
}
