import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export function getGrade(score: number): { grade: string; color: string } {
  if (score >= 90) return { grade: 'A*', color: 'text-green-600' };
  if (score >= 80) return { grade: 'A', color: 'text-green-500' };
  if (score >= 70) return { grade: 'B', color: 'text-blue-500' };
  if (score >= 60) return { grade: 'C', color: 'text-yellow-500' };
  if (score >= 50) return { grade: 'D', color: 'text-orange-500' };
  return { grade: 'F', color: 'text-red-500' };
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'basic': case 'easy': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
    case 'intermediate': case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
    case 'advanced': case 'hard': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
    default: return 'bg-gray-100 text-gray-700';
  }
}

export function getRelevanceColor(relevance: string): string {
  switch (relevance) {
    case 'high': return 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400';
    case 'medium': return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
    case 'low': return 'bg-gray-50 text-gray-500 dark:bg-gray-900 dark:text-gray-500';
    default: return 'bg-gray-100 text-gray-700';
  }
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function validateAnswer(userAnswer: any, correctAnswer: any, type: string): boolean {
  if (userAnswer === undefined || userAnswer === null) return false;
  if (type === 'numeric') return parseFloat(userAnswer) === parseFloat(correctAnswer);
  if (type === 'true-false') return String(userAnswer).toLowerCase() === String(correctAnswer).toLowerCase();
  return String(userAnswer).trim().toLowerCase() === String(correctAnswer).trim().toLowerCase();
}

export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

export function getMotivationalMessage(progress: number): string {
  if (progress === 0) return "Ready to begin your GST learning journey?";
  if (progress < 25) return "Great start! Keep the momentum going!";
  if (progress < 50) return "You're making excellent progress!";
  if (progress < 75) return "More than halfway there! Outstanding!";
  if (progress < 100) return "Almost there! The finish line is in sight!";
  return "Congratulations! You've mastered GST! 🎉";
}
