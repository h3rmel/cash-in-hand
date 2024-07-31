import { ChartColumn, LayoutGrid } from 'lucide-react';

import { SidebarLink } from './sidebar-link';

/**
 * Renders a sidebar component.
 *
 * @component
 * @returns {JSX.Element} The sidebar component.
 */
export function Sidebar(): JSX.Element {
  return (
    <section className="flex min-h-screen flex-col gap-4 border-r border-border p-4">
      <SidebarLink href="/dashboard" icon={<LayoutGrid />} name="dashboard" />
      <SidebarLink href="/dashboard/charts" icon={<ChartColumn />} name="charts" />
    </section>
  );
}
