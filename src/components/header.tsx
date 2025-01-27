import { cn } from '@/lib/utils';

import { HeaderLogo } from './header-logo';
import { Navigation } from './navigation';

export function Header() {
  return (
    <header className={cn('bg-gradient-to-b from-emerald-700 to-emerald-500', 'px-4 pt-8 lg:px-8 pb-36')}>
      <div className={cn('max-w-screen-2xl w-full', 'mx-auto mb-14', 'flex items-center justify-between lg:gap-16')}>
        <HeaderLogo />
        <Navigation />
      </div>
    </header>
  );
}
