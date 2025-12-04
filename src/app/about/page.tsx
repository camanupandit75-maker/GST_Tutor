'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, GraduationCap, BookOpen, Heart } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

export default function AboutPage() {
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
      <div className="space-y-8 max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="p-6 md:p-8 relative overflow-hidden rounded-2xl border border-gray-700"
          style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #0d9488 100%)' }}
        >
          <div className="relative z-10">
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-white mb-3"
            >
              About GST Tutor
            </motion.h1>
            <motion.p 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/90"
            >
              Built by a Chartered Accountant, for future Chartered Accountants
            </motion.p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={itemVariants}
          className="card p-6 md:p-8"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                GST Tutor is a comprehensive learning platform designed to help aspiring Chartered Accountants 
                master the complexities of Goods and Services Tax (GST). Our content is meticulously curated 
                and based on the official <strong className="text-white">ICAI GST Act(s) & Rules - November 2025 Edition</strong>, 
                ensuring that you receive the most accurate and up-to-date information.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Whether you're preparing for your CA exams or looking to deepen your understanding of GST 
                regulations, our platform provides interactive modules, comprehensive quizzes, and an AI-powered 
                tutor to guide you through every step of your learning journey.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Creator Section */}
        <motion.div
          variants={itemVariants}
          className="card p-6 md:p-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-teal-500/20 rounded-xl">
              <GraduationCap className="w-6 h-6 text-teal-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-4">Created by CA Manu Pandit</h2>
              <p className="text-gray-300 mb-6">
                GST Tutor was created by a Chartered Accountant with years of experience 
                in GST compliance and taxation. The platform reflects real-world expertise and a 
                deep understanding of the challenges faced by CA students and professionals.
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:camanupandit75@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-xl transition-all group"
                >
                  <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">camanupandit75@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:gstaurum2025@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-xl transition-all group"
                >
                  <div className="p-2 bg-teal-500/20 rounded-lg group-hover:bg-teal-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-teal-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">gstaurum2025@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/manupandit75"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-xl transition-all group"
                >
                  <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-white font-medium">linkedin.com/in/manupandit75</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer Section */}
        <motion.div
          variants={itemVariants}
          className="card p-6 md:p-8 border-orange-500/30"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-500/20 rounded-xl">
              <BookOpen className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                This platform is designed for <strong className="text-white">educational purposes only</strong>. 
                While we strive to provide accurate and up-to-date information based on the ICAI GST Act(s) & Rules 
                (November 2025 Edition), users should verify critical information with official sources and consult 
                with qualified professionals for specific tax advice or compliance matters.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                The content provided on this platform does not constitute professional tax, legal, or financial advice. 
                Users are encouraged to refer to the official ICAI publications and consult with Chartered Accountants 
                or tax professionals for specific guidance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="text-center py-8"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2025 GST Tutor. Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by CA Manu Pandit
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
}

