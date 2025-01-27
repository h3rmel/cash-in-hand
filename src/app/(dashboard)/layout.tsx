import { ReactNode } from 'react';

import { Header } from '@/components/header';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main>
      <Header />
      <section>{children}</section>
    </main>
  );
}
