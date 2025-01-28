import { UserButton } from '@clerk/nextjs';
import { LoaderCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

import { HeaderLogo } from './header-logo';
import { Navigation } from './navigation';
import { WelcomeMessage } from './welcome-message';

export function Header() {
  return (
    <header className={cn('bg-gradient-to-b from-emerald-700 to-emerald-500', 'px-4 pt-4 lg:px-8 pb-28')}>
      <section className={cn('max-w-screen-xl w-full', 'mx-auto', 'flex flex-col justify-between')}>
        <div className={cn('flex items-center justify-between lg:gap-16')}>
          <HeaderLogo />
          <Navigation />
          <UserButton fallback={<LoaderCircle className="animate-spin text-background size-7" />} />
        </div>
        <WelcomeMessage />
      </section>
    </header>
  );
}
