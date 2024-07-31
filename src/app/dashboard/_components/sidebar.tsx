import { LayoutGrid } from 'lucide-react';

import { SidebarLink } from './sidebar-link';

export function Sidebar(): JSX.Element {
  return (
    <section className="flex min-h-screen flex-col border-r border-border p-4">
      <SidebarLink href="/dashboard" icon={<LayoutGrid />} name="Home" />
    </section>
  );
}
