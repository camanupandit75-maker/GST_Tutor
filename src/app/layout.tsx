import type { Metadata } from 'next';
import './globals.css';
import AppLayout from '@/components/Layout';
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'GstEk - Complete GST Learning Platform',
  description: 'Master GST Act(s) and Rules with interactive lessons, quizzes, and AI-powered tutoring. Based on ICAI November 2025 Edition.',
  keywords: 'GST, CGST, IGST, SGST, Tax, India, CA, ICAI, Learning, Tutorial',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <GoogleAnalytics />
        <AppLayout>{children}</AppLayout>
        <Analytics />
      </body>
    </html>
  );
}
