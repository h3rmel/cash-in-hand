'use client';

import { useUser } from '@clerk/nextjs';

import { cn } from '@/lib/utils';

export function WelcomeMessage() {
  const { user, isLoaded } = useUser();

  return (
    <hgroup className={cn('space-y-2 mt-20')}>
      <h2 className={cn('text-2xl lg:text-4xl text-white font-medium')}>
        Welcome Back{isLoaded && ', '} {user?.firstName} 👋
      </h2>
      <p className={cn('text-sm lg:text-base text-white/60 tracking-wide')}>This is your Financal Overview Report.</p>
    </hgroup>
  );
}
