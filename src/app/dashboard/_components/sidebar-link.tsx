'use client';

// #region Imports

import { ReactNode } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useLanguage } from '@/components/language/language-provider';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

import { viewLanguages } from '../_i18n/view.lng';

// #endregion

interface SidebarLinkProps {
  name: string;
  icon: ReactNode;
  href: string;
}

/**
 * Renders a sidebar link component.
 *
 * @component
 * @param name - The name of the sidebar link.
 * @param icon - The icon of the sidebar link.
 * @param href - The href of the sidebar link.
 * @returns {JSX.Element} The sidebar link component.
 */
export function SidebarLink({ name, icon, href }: SidebarLinkProps): JSX.Element {
  const path = usePathname();
  const { translate } = useLanguage();

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
        <TooltipContent side="right">{translate(name, viewLanguages)}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
