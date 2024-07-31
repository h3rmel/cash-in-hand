import { ReactNode } from 'react';

import { Sidebar } from './_components/sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="container w-full p-8">{children}</main>
    </div>
  );
}
