import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface QuizAttempt {
  id: string;
  moduleId: string;
  score: number;
  totalPoints: number;
  completedAt: Date;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirement: { type: string; value: number };
  unlockedAt?: Date;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AppState {
  userName: string;
  setUserName: (name: string) => void;
  completedSections: Set<string>;
  markSectionComplete: (key: string) => void;
  quizAttempts: QuizAttempt[];
  addQuizAttempt: (attempt: QuizAttempt) => void;
  currentQuizSettings: { questionCount: number; difficulty: string; showHints: boolean; showExplanations: boolean; randomOrder: boolean };
  setQuizSettings: (settings: Partial<AppState['currentQuizSettings']>) => void;
  achievements: Achievement[];
  unlockedAchievements: string[];
  totalTimeSpent: number;
  currentStreak: number;
  lastStudyDate: string | null;
  addTimeSpent: (seconds: number) => void;
  updateStreak: () => void;
  chatMessages: ChatMessage[];
  addChatMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  clearChat: () => void;
  userPreferences: { theme: { mode: 'light' | 'dark' | 'system'; fontSize: string }; notifications: boolean; soundEffects: boolean };
  setUserPreferences: (prefs: Partial<AppState['userPreferences']>) => void;
}

const DEFAULT_ACHIEVEMENTS: Achievement[] = [
  { id: 'first-lesson', title: 'First Step', description: 'Complete your first section', icon: '🎯', requirement: { type: 'sections', value: 1 } },
  { id: 'quiz-master', title: 'Quiz Master', description: 'Pass 10 quizzes', icon: '🏆', requirement: { type: 'quizzes', value: 10 } },
  { id: 'perfect-score', title: 'Perfectionist', description: 'Score 100% on a quiz', icon: '💯', requirement: { type: 'perfect', value: 1 } },
  { id: 'week-warrior', title: 'Week Warrior', description: '7 day streak', icon: '🔥', requirement: { type: 'streak', value: 7 } },
  { id: 'cgst-expert', title: 'CGST Expert', description: 'Master CGST Act', icon: '📜', requirement: { type: 'cgst', value: 1 } },
  { id: 'igst-expert', title: 'IGST Expert', description: 'Master IGST Act', icon: '🌍', requirement: { type: 'igst', value: 1 } },
  { id: 'rules-master', title: 'Rules Master', description: 'Master all Rules', icon: '📋', requirement: { type: 'rules', value: 1 } },
  { id: 'gst-professional', title: 'GST Professional', description: 'Complete curriculum', icon: '🎓', requirement: { type: 'all', value: 1 } },
];

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => {
      // Helper to ensure completedSections is always a Set
      const ensureSet = (sections: Set<string> | string[]): Set<string> => {
        return sections instanceof Set ? sections : new Set(sections || []);
      };

      return {
        userName: 'GST Learner',
        setUserName: (name) => set({ userName: name }),
        completedSections: new Set<string>(),
        markSectionComplete: (key) => set((state) => {
          const currentSet = ensureSet(state.completedSections);
          const newSet = new Set(currentSet);
          newSet.add(key);
          return { completedSections: newSet };
        }),
      quizAttempts: [],
      addQuizAttempt: (attempt) => set((state) => ({ quizAttempts: [...state.quizAttempts, attempt] })),
      currentQuizSettings: { questionCount: 10, difficulty: 'mixed', showHints: true, showExplanations: true, randomOrder: true },
      setQuizSettings: (settings) => set((state) => ({ currentQuizSettings: { ...state.currentQuizSettings, ...settings } })),
      achievements: DEFAULT_ACHIEVEMENTS,
      unlockedAchievements: [],
      totalTimeSpent: 0,
      currentStreak: 0,
      lastStudyDate: null,
      addTimeSpent: (seconds) => set((state) => ({ totalTimeSpent: state.totalTimeSpent + seconds })),
      updateStreak: () => {
        const today = new Date().toDateString();
        const state = get();
        if (state.lastStudyDate === today) return;
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        set({ currentStreak: state.lastStudyDate === yesterday ? state.currentStreak + 1 : 1, lastStudyDate: today });
      },
      chatMessages: [],
      addChatMessage: (message) => set((state) => ({
        chatMessages: [...state.chatMessages, { ...message, id: crypto.randomUUID(), timestamp: new Date() }]
      })),
      clearChat: () => set({ chatMessages: [] }),
      userPreferences: { theme: { mode: 'system', fontSize: 'medium' }, notifications: true, soundEffects: true },
      setUserPreferences: (prefs) => set((state) => ({ userPreferences: { ...state.userPreferences, ...prefs } })),
      };
    },
    {
      name: 'gst-tutor-storage',
      partialize: (state) => ({
        userName: state.userName,
        completedSections: Array.from(state.completedSections),
        quizAttempts: state.quizAttempts,
        currentQuizSettings: state.currentQuizSettings,
        unlockedAchievements: state.unlockedAchievements,
        totalTimeSpent: state.totalTimeSpent,
        currentStreak: state.currentStreak,
        lastStudyDate: state.lastStudyDate,
        userPreferences: state.userPreferences,
      }),
      merge: (persistedState, currentState) => {
        const state = persistedState as any;
        // Convert completedSections array back to Set during merge
        if (state && Array.isArray(state.completedSections)) {
          state.completedSections = new Set(state.completedSections);
        }
        return { ...currentState, ...state };
      },
    }
  )
);

export default useAppStore;
