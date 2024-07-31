'use client';

import { ReactNode } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface SidebarLinkProps {
  name: string;
  icon: ReactNode;
  href: string;
}

export function SidebarLink({ name, icon, href }: SidebarLinkProps) {
  const path = usePathname();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <div
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-md duration-300 hover:bg-accent',
              path === href ? 'bg-accent' : '',
            )}
          >
            <Link href={href}>{icon}</Link>
          </div>
        </TooltipTrigger>
        <TooltipContent side="right">{name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
