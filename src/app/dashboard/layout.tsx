import { ReactNode } from 'react';

import { Sidebar } from './_components/sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

/**
 * @layout
 * @returns {JSX.Element} The dashboard layout.
 */
export default function DashboardLayout({ children }: DashboardLayoutProps): JSX.Element {
  return (
    <div className="flex">
      <Sidebar />
      <main className="container w-full p-8">{children}</main>
    </div>
  );
}
