import { UserButton } from '@clerk/nextjs';
import { LoaderCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

import { HeaderLogo } from './header-logo';
import { Navigation } from './navigation';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header
      className={cn('sticky top-0 left-0', 'h-20', 'border border-b', 'backdrop-blur')}
    >
      <nav
        className={cn(
          'max-w-screen-2xl w-full h-full',
          'mx-auto',
          'flex items-center justify-between',
          'lg:border-x px-6',
        )}
      >
        <HeaderLogo />
        <Navigation />
        <div className={cn('flex items-center gap-4')}>
          <ThemeToggle />
          <UserButton
            fallback={<LoaderCircle className="animate-spin text-background size-7" />}
          />
        </div>
      </nav>
    </header>
  );
}
