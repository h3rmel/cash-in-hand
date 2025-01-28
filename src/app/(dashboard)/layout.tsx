import { ReactNode } from 'react';

import { Header } from '@/components/header';
import { cn } from '@/lib/utils';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main>
      <Header />
      <section className={cn("max-w-screen-xl w-full", "mx-auto", "mt-4")}>{children}</section>
    </main>
  );
}
