'use client';

import { NewAccountSheet } from '@/modules/accounts/components/new-account-sheet';

import useMountedState from '@/hooks/use-mounted-state';

export function SheetProvider() {
  const isMounted = useMountedState();

  if (!isMounted) return null;

  return (
    <>
      <NewAccountSheet />
    </>
  );
}
