// #region Imports

import { ReactNode } from 'react';

import { Metadata } from 'next';

import { sora } from '@/ui/fonts';

import '@/ui/globals.css';

// #endregion

export const metadata: Metadata = {
  title: {
    template: '%s | Cash In  Hand',
    default: 'Cash In Hand',
  },
  description: 'A simple budgeting app that helps you keep track of your finances.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt">
      <body className={`${sora.variable} bg-background text-foreground`}>{children}</body>
    </html>
  );
}
