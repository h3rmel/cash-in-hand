'use client';

import { useUser } from '@clerk/nextjs';

import { cn } from '@/lib/utils';

import { Separator } from './ui/separator';

export function WelcomeMessage() {
  const { user, isLoaded } = useUser();

  return (
    <hgroup className={cn('space-y-2', 'pb-4')}>
      <h2 className={cn('text-2xl lg:text-4xl font-medium')}>
        Welcome Back{isLoaded && ', '} {user?.firstName} 👋
      </h2>
      <p className={cn('text-sm lg:text-base tracking-wide')}>
        This is your Financal Overview Report.
      </p>
    </hgroup>
  );
}
