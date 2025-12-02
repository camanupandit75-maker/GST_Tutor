'use client';

import React, { useState, useEffect } from 'react';
import { Target, Clock, CheckCircle, XCircle, ChevronRight, RotateCcw, Trophy, Lightbulb } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { cn, validateAnswer, getGrade } from '@/lib/utils';
import { GST_QUESTIONS, generateMixedQuiz, type QuizQuestion } from '@/data/questions';
import GST_MODULES from '@/data/curriculum';
import Confetti from 'react-confetti';

type QuizState = 'setup' | 'active' | 'results';

export default function QuizPage() {
  const { currentQuizSettings, setQuizSettings, addQuizAttempt } = useAppStore();
  const [quizState, setQuizState] = useState<QuizState>('setup');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showHint, setShowHint] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalPoints = questions.reduce((acc, q) => acc + q.points, 0);
  const earnedPoints = questions.reduce((acc, q) => {
    const userAnswer = answers[q.id];
    return acc + (validateAnswer(userAnswer, q.correctAnswer, q.type) ? q.points : 0);
  }, 0);
  const scorePercent = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;

  useEffect(() => {
    if (quizState === 'active' && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0 && quizState === 'active') finishQuiz();
  }, [quizState, timeLeft]);

  const startQuiz = () => {
    const quizQuestions = generateMixedQuiz(currentQuizSettings.questionCount, currentQuizSettings.difficulty);
    setQuestions(quizQuestions);
    setAnswers({});
    setCurrentIndex(0);
    setTimeLeft(currentQuizSettings.questionCount * 60);
    setQuizState('active');
    setShowHint(false);
  };

  const selectAnswer = (answer: any) => setAnswers(prev => ({ ...prev, [currentQuestion.id]: answer }));

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) { setCurrentIndex(i => i + 1); setShowHint(false); }
    else finishQuiz();
  };

  const finishQuiz = () => {
    setQuizState('results');
    addQuizAttempt({ id: crypto.randomUUID(), moduleId: 'mixed', score: earnedPoints, totalPoints, completedAt: new Date() });
    if (scorePercent >= 80) setShowConfetti(true);
  };

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  if (quizState === 'setup') {
    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-in">
        <div className="text-center">
          <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-10 h-10 text-primary-600" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">GST Quiz</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Test your knowledge of GST Acts & Rules</p>
        </div>
        <div className="card p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Number of Questions</label>
            <div className="flex gap-2 flex-wrap">
              {[5, 10, 15, 20, 25, 30, 35, 40].map(n => (
                <button key={n} onClick={() => setQuizSettings({ questionCount: n })}
                  className={cn("flex-1 min-w-[60px] py-2 rounded-lg font-medium", currentQuizSettings.questionCount === n ? "bg-primary-600 text-white" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200")}>
                  {n}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Difficulty</label>
            <div className="flex gap-2">
              {['mixed', 'easy', 'medium', 'hard'].map(d => (
                <button key={d} onClick={() => setQuizSettings({ difficulty: d })}
                  className={cn("flex-1 py-2 rounded-lg font-medium capitalize", currentQuizSettings.difficulty === d ? "bg-primary-600 text-white" : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200")}>
                  {d}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={currentQuizSettings.showHints} onChange={e => setQuizSettings({ showHints: e.target.checked })} className="w-5 h-5 rounded" />
              <span>Show hints</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={currentQuizSettings.showExplanations} onChange={e => setQuizSettings({ showExplanations: e.target.checked })} className="w-5 h-5 rounded" />
              <span>Show explanations in review</span>
            </label>
          </div>
          <button onClick={startQuiz} className="w-full btn btn-primary btn-lg">Start Quiz<ChevronRight className="w-5 h-5 ml-2" /></button>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-3">Available Questions</h3>
          <p className="text-2xl font-bold text-primary-600">{GST_QUESTIONS.length}</p>
          <p className="text-sm text-gray-500">Covering {GST_MODULES.length} GST Modules</p>
        </div>
      </div>
    );
  }

  if (quizState === 'active' && currentQuestion) {
    const isAnswered = answers[currentQuestion.id] !== undefined;
    return (
      <div className="max-w-3xl mx-auto space-y-6 animate-in">
        <div className="card p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Question {currentIndex + 1} of {questions.length}</span>
            <div className="flex items-center gap-2 text-sm">
              <Clock className={cn("w-4 h-4", timeLeft < 60 && "text-red-500")} />
              <span className={cn(timeLeft < 60 && "text-red-500 font-bold")}>{formatTime(timeLeft)}</span>
            </div>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-primary-500 transition-all" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <span className={cn("badge", currentQuestion.difficulty === 'easy' ? 'badge-success' : currentQuestion.difficulty === 'medium' ? 'badge-warning' : 'badge-danger')}>
              {currentQuestion.difficulty} • {currentQuestion.points} pts
            </span>
            {currentQuizSettings.showHints && currentQuestion.hints && (
              <button onClick={() => setShowHint(!showHint)} className="text-primary-600"><Lightbulb className="w-5 h-5" /></button>
            )}
          </div>
          <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>
          {showHint && currentQuestion.hints && <div className="mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-sm">💡 {currentQuestion.hints[0]}</div>}
          <div className="space-y-3">
            {currentQuestion.type === 'multiple-choice' && currentQuestion.options?.map((option, i) => (
              <button key={i} onClick={() => selectAnswer(option)}
                className={cn("w-full p-4 text-left rounded-xl border-2 transition-all", answers[currentQuestion.id] === option ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20" : "border-gray-200 dark:border-gray-700 hover:border-primary-300")}>
                <span className="font-medium">{String.fromCharCode(65 + i)}.</span> {option}
              </button>
            ))}
            {currentQuestion.type === 'true-false' && ['True', 'False'].map(opt => (
              <button key={opt} onClick={() => selectAnswer(opt.toLowerCase() === 'true')}
                className={cn("w-full p-4 text-left rounded-xl border-2 transition-all", answers[currentQuestion.id] === (opt.toLowerCase() === 'true') ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20" : "border-gray-200 dark:border-gray-700 hover:border-primary-300")}>
                {opt}
              </button>
            ))}
            {currentQuestion.type === 'numeric' && (
              <input type="number" value={answers[currentQuestion.id] || ''} onChange={e => selectAnswer(e.target.value)} placeholder="Enter your answer" className="input text-lg" />
            )}
          </div>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setCurrentIndex(i => Math.max(0, i - 1))} disabled={currentIndex === 0} className="btn btn-secondary btn-lg flex-1">Previous</button>
          <button onClick={nextQuestion} disabled={!isAnswered} className="btn btn-primary btn-lg flex-1">{currentIndex === questions.length - 1 ? 'Finish' : 'Next'}<ChevronRight className="w-5 h-5 ml-2" /></button>
        </div>
      </div>
    );
  }

  if (quizState === 'results') {
    const { grade, color } = getGrade(scorePercent);
    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-in">
        {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
        <div className="card p-8 text-center">
          <div className={cn("w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4", scorePercent >= 70 ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30")}>
            {scorePercent >= 70 ? <Trophy className="w-12 h-12 text-green-600" /> : <Target className="w-12 h-12 text-red-600" />}
          </div>
          <h1 className="text-3xl font-bold mb-2">Quiz Complete!</h1>
          <p className="text-gray-600">{scorePercent >= 90 ? 'Outstanding!' : scorePercent >= 70 ? 'Great job!' : scorePercent >= 50 ? 'Good effort!' : 'Keep practicing!'}</p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"><div className={cn("text-4xl font-bold", color)}>{grade}</div><div className="text-sm text-gray-500">Grade</div></div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"><div className="text-4xl font-bold text-primary-600">{scorePercent}%</div><div className="text-sm text-gray-500">Score</div></div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"><div className="text-4xl font-bold">{earnedPoints}/{totalPoints}</div><div className="text-sm text-gray-500">Points</div></div>
          </div>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-bold mb-4">Review Answers</h2>
          <div className="space-y-4">
            {questions.map((q, i) => {
              const userAnswer = answers[q.id];
              const isCorrect = validateAnswer(userAnswer, q.correctAnswer, q.type);
              return (
                <div key={q.id} className={cn("p-4 rounded-xl border-2", isCorrect ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20" : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20")}>
                  <div className="flex items-start gap-3">
                    {isCorrect ? <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /> : <XCircle className="w-5 h-5 text-red-600 mt-0.5" />}
                    <div className="flex-1">
                      <p className="font-medium">{i + 1}. {q.question}</p>
                      <div className="mt-2 text-sm">
                        <p>Your answer: <span className={isCorrect ? "text-green-600" : "text-red-600"}>{String(userAnswer ?? 'Not answered')}</span></p>
                        {!isCorrect && <p>Correct: <span className="text-green-600">{String(q.correctAnswer)}</span></p>}
                      </div>
                      {currentQuizSettings.showExplanations && <p className="mt-2 text-sm text-gray-600">{q.explanation}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button onClick={() => { setQuizState('setup'); setShowConfetti(false); }} className="w-full btn btn-primary btn-lg"><RotateCcw className="w-5 h-5 mr-2" />New Quiz</button>
      </div>
    );
  }
  return null;
}
