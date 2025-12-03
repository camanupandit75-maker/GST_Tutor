'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Clock, CheckCircle, XCircle, ChevronRight, RotateCcw, Trophy, Lightbulb, X } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { cn, validateAnswer, getGrade } from '@/lib/utils';
import { GST_QUESTIONS, generateMixedQuiz, type QuizQuestion } from '@/data/questions';
import GST_MODULES from '@/data/curriculum';
import Confetti from 'react-confetti';
import PageTransition from '@/components/PageTransition';

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
  const [customQuestionCount, setCustomQuestionCount] = useState<string>('');
  const [showExitConfirm, setShowExitConfirm] = useState(false);

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
    // Use custom input if provided and valid, otherwise use selected button value
    const questionCount = customQuestionCount 
      ? Math.min(Math.max(1, parseInt(customQuestionCount) || currentQuizSettings.questionCount), GST_QUESTIONS.length)
      : currentQuizSettings.questionCount;
    
    const quizQuestions = generateMixedQuiz(questionCount, currentQuizSettings.difficulty);
    setQuestions(quizQuestions);
    setAnswers({});
    setCurrentIndex(0);
    setTimeLeft(questionCount * 60);
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

  const handleExitQuiz = () => {
    setShowExitConfirm(true);
  };

  const confirmExit = () => {
    finishQuiz(); // Finish quiz with current progress
    setShowExitConfirm(false);
  };

  const cancelExit = () => {
    setShowExitConfirm(false);
  };

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  if (quizState === 'setup') {
    return (
      <PageTransition>
        <div className="max-w-2xl mx-auto space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-teal-500/30 rounded-full blur-xl" />
              <Target className="w-10 h-10 text-blue-400 relative z-10" />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-white mb-2"
            >
              GST Quiz
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300"
            >
              Test your knowledge of GST Acts & Rules
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="card p-6 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Number of Questions</label>
              <div className="flex gap-2 flex-wrap mb-3">
                {[5, 10, 15, 20, 25, 30, 35, 40].map((n, index) => (
                  <motion.button
                    key={n}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.05, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setQuizSettings({ questionCount: n });
                      setCustomQuestionCount('');
                    }}
                    className={cn(
                      "flex-1 min-w-[60px] py-2 rounded-xl font-medium transition-all",
                      !customQuestionCount && currentQuizSettings.questionCount === n
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/50"
                        : "bg-slate-700 text-white border border-slate-600 hover:bg-slate-600 hover:border-blue-500"
                    )}
                  >
                    {n}
                  </motion.button>
                ))}
              </div>
              <div className="flex gap-2 items-center">
                <label className="text-sm text-gray-300 whitespace-nowrap">Custom:</label>
                <input
                  type="number"
                  min="1"
                  max={GST_QUESTIONS.length}
                  value={customQuestionCount}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCustomQuestionCount(value);
                    if (value && !isNaN(parseInt(value))) {
                      const num = Math.min(Math.max(1, parseInt(value)), GST_QUESTIONS.length);
                      setQuizSettings({ questionCount: num });
                    }
                  }}
                  placeholder={`Enter number (1-${GST_QUESTIONS.length})`}
                  className="flex-1 input py-2"
                />
              </div>
              {customQuestionCount && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-gray-400 mt-1"
                >
                  Will use: {Math.min(Math.max(1, parseInt(customQuestionCount) || 0), GST_QUESTIONS.length)} questions
                </motion.p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white">Difficulty</label>
              <div className="flex gap-2">
                {['mixed', 'easy', 'medium', 'hard'].map((d, index) => (
                  <motion.button
                    key={d}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuizSettings({ difficulty: d })}
                    className={cn(
                      "flex-1 py-2 rounded-xl font-medium capitalize transition-all",
                      currentQuizSettings.difficulty === d
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/50"
                        : "bg-slate-700 text-white border border-slate-600 hover:bg-slate-600 hover:border-blue-500"
                    )}
                  >
                    {d}
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer text-white">
                <input
                  type="checkbox"
                  checked={currentQuizSettings.showHints}
                  onChange={e => setQuizSettings({ showHints: e.target.checked })}
                  className="w-5 h-5 rounded accent-blue-500"
                />
                <span>Show hints</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer text-white">
                <input
                  type="checkbox"
                  checked={currentQuizSettings.showExplanations}
                  onChange={e => setQuizSettings({ showExplanations: e.target.checked })}
                  className="w-5 h-5 rounded accent-blue-500"
                />
                <span>Show explanations in review</span>
              </label>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startQuiz}
              className="w-full btn btn-primary btn-lg"
            >
              Start Quiz
              <ChevronRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="card p-6"
          >
            <h3 className="font-semibold mb-3 text-white">Available Questions</h3>
            <p className="text-2xl font-bold text-blue-400">{GST_QUESTIONS.length}</p>
            <p className="text-sm text-gray-400">Covering {GST_MODULES.length} GST Modules</p>
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  if (quizState === 'active' && currentQuestion) {
    const isAnswered = answers[currentQuestion.id] !== undefined;
    return (
      <PageTransition>
        <div className="max-w-3xl mx-auto space-y-6">
          <AnimatePresence>
            {showExitConfirm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  className="card p-6 max-w-md w-full"
                >
                  <h3 className="text-lg font-bold mb-2 text-white">Exit Quiz?</h3>
                  <p className="text-gray-300 mb-4">
                    Are you sure you want to exit? Your current progress will be saved and you'll see your results.
                  </p>
                  <div className="flex gap-3">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={cancelExit}
                      className="btn btn-secondary flex-1"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={confirmExit}
                      className="btn btn-danger flex-1"
                    >
                      Exit Quiz
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="card p-4 bg-slate-800 border-slate-700"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-white">Question {currentIndex + 1} of {questions.length}</span>
              <div className="flex items-center gap-4">
                <motion.div
                  animate={timeLeft < 60 ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ repeat: timeLeft < 60 ? Infinity : 0, duration: 1 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <Clock className={cn("w-5 h-5", timeLeft < 60 ? "text-red-400" : "text-blue-400")} />
                  <span className={cn("font-semibold text-lg", timeLeft < 60 ? "text-red-400 font-bold" : "text-white")}>
                    {formatTime(timeLeft)}
                  </span>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(239, 68, 68, 0.2)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleExitQuiz}
                  className="p-2 bg-slate-700 hover:bg-red-500/20 border border-slate-600 hover:border-red-500/50 rounded-xl transition-colors"
                  title="Exit Quiz"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
              />
            </div>
          </motion.div>
          <motion.div
            key={currentIndex}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="card p-6 bg-slate-800 border-slate-700"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <span className={cn(
                "badge",
                currentQuestion.difficulty === 'easy' ? 'badge-success' :
                currentQuestion.difficulty === 'medium' ? 'badge-warning' : 'badge-danger'
              )}>
                {currentQuestion.difficulty} • {currentQuestion.points} pts
              </span>
              {currentQuizSettings.showHints && currentQuestion.hints && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowHint(!showHint)}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Lightbulb className={cn("w-5 h-5", showHint && "fill-yellow-400 text-yellow-400")} />
                </motion.button>
              )}
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white leading-relaxed">
              {currentQuestion.question}
            </h2>
            <AnimatePresence>
              {showHint && currentQuestion.hints && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mb-4 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-xl text-sm text-yellow-200"
                >
                  💡 {currentQuestion.hints[0]}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="space-y-3">
              {currentQuestion.type === 'multiple-choice' && currentQuestion.options?.map((option, i) => (
                <motion.button
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => selectAnswer(option)}
                  className={cn(
                    "w-full p-4 text-left rounded-xl border-2 transition-all",
                    answers[currentQuestion.id] === option
                      ? "border-blue-500 bg-blue-500/30 text-white shadow-lg shadow-blue-500/50"
                      : "bg-slate-700 border-slate-600 text-white hover:border-blue-400 hover:bg-slate-600"
                  )}
                >
                  <span className="font-medium">{String.fromCharCode(65 + i)}.</span> {option}
                </motion.button>
              ))}
              {currentQuestion.type === 'true-false' && ['True', 'False'].map((opt, i) => (
                <motion.button
                  key={opt}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => selectAnswer(opt.toLowerCase() === 'true')}
                  className={cn(
                    "w-full p-4 text-left rounded-xl border-2 transition-all",
                    answers[currentQuestion.id] === (opt.toLowerCase() === 'true')
                      ? "border-blue-500 bg-blue-500/30 text-white shadow-lg shadow-blue-500/50"
                      : "bg-slate-700 border-slate-600 text-white hover:border-blue-400 hover:bg-slate-600"
                  )}
                >
                  {opt}
                </motion.button>
              ))}
              {currentQuestion.type === 'numeric' && (
                <motion.input
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  type="number"
                  value={answers[currentQuestion.id] || ''}
                  onChange={e => selectAnswer(e.target.value)}
                  placeholder="Enter your answer"
                  className="input text-lg"
                />
              )}
            </div>
          </motion.div>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
              disabled={currentIndex === 0}
              className="btn btn-secondary btn-lg flex-1 disabled:opacity-50"
            >
              Previous
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={nextQuestion}
              disabled={!isAnswered}
              className="btn btn-primary btn-lg flex-1 disabled:opacity-50"
            >
              {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </div>
      </PageTransition>
    );
  }

  if (quizState === 'results') {
    const { grade, color } = getGrade(scorePercent);
    return (
      <PageTransition>
        <div className="max-w-2xl mx-auto space-y-6">
          {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="card p-8 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 blur-3xl -z-10" />
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.4 }}
              className={cn(
                "w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10",
                scorePercent >= 70 ? "bg-green-500/20" : "bg-red-500/20"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-50 blur-xl"
                style={{ background: scorePercent >= 70 ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)' }}
              />
              {scorePercent >= 70 ? (
                <Trophy className="w-12 h-12 text-green-400 relative z-10" />
              ) : (
                <Target className="w-12 h-12 text-red-400 relative z-10" />
              )}
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl font-bold mb-2 text-white"
            >
              Quiz Complete!
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300"
            >
              {scorePercent >= 90 ? 'Outstanding!' : scorePercent >= 70 ? 'Great job!' : scorePercent >= 50 ? 'Good effort!' : 'Keep practicing!'}
            </motion.p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: 'Grade', value: grade, color: color },
                { label: 'Score', value: `${scorePercent}%`, color: 'text-blue-400' },
                { label: 'Points', value: `${earnedPoints}/${totalPoints}`, color: 'text-teal-400' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="p-4 glass rounded-xl"
                >
                  <div className={cn("text-4xl font-bold", stat.color)}>{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="card p-6"
          >
            <h2 className="text-lg font-bold mb-4 text-white">Review Answers</h2>
            <div className="space-y-4">
              {questions.map((q, i) => {
                const userAnswer = answers[q.id];
                const isCorrect = validateAnswer(userAnswer, q.correctAnswer, q.type);
                return (
                  <motion.div
                    key={q.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.1 + i * 0.05 }}
                    className={cn(
                      "p-4 rounded-xl border-2",
                      isCorrect
                        ? "border-green-500/30 bg-green-500/10"
                        : "border-red-500/30 bg-red-500/10"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.2 + i * 0.05, type: "spring" }}
                      >
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-400 mt-0.5" />
                        )}
                      </motion.div>
                      <div className="flex-1">
                        <p className="font-medium text-white">{i + 1}. {q.question}</p>
                        <div className="mt-2 text-sm">
                          <p className="text-gray-300">
                            Your answer: <span className={isCorrect ? "text-green-400 font-semibold" : "text-red-400 font-semibold"}>
                              {String(userAnswer ?? 'Not answered')}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p className="text-gray-300 mt-1">
                              Correct: <span className="text-green-400 font-semibold">{String(q.correctAnswer)}</span>
                            </p>
                          )}
                        </div>
                        {currentQuizSettings.showExplanations && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3 + i * 0.05 }}
                            className="mt-2 text-sm text-gray-400"
                          >
                            {q.explanation}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => { setQuizState('setup'); setShowConfetti(false); }}
            className="w-full btn btn-primary btn-lg"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            New Quiz
          </motion.button>
        </div>
      </PageTransition>
    );
  }
  return null;
}
