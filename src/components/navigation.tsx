'use client';

import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { NavigationButton } from './navigation-button';

type NavigationRoutes = {
  href: string;
  label: string;
};

const routes: NavigationRoutes[] = [
  {
    href: '/',
    label: 'Overview',
  },
  {
    href: '/transactions',
    label: 'Transactions',
  },
  {
    href: '/accounts',
    label: 'Accounts',
  },
  {
    href: '/categories',
    label: 'Categories',
  },
  {
    href: '/settings',
    label: 'Settings',
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={cn('hidden lg:flex', 'items-center gap-2', 'overflow-x-auto')}>
      {routes.map((route) => (
        <NavigationButton key={route.label} {...route} isActive={pathname === route.href} />
      ))}
    </nav>
  );
}
