import { ReactNode } from 'react';

import { Header } from '@/components/layout/header';

import { cn } from '@/lib/utils';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main>
      <Header />
      <section
        className={cn(
          'max-w-screen-2xl w-full',
          'mx-auto',
          'px-4 lg:px-8 pt-12',
          'lg:border-x',
        )}
      >
        {children}
      </section>
    </main>
  );
}
