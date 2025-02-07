'use client';

import { EditAccountSheet } from '@/modules/accounts/components/edit-account-sheet';
import { NewAccountSheet } from '@/modules/accounts/components/new-account-sheet';

export function SheetProvider() {
  return (
    <>
      <EditAccountSheet />
      <NewAccountSheet />
    </>
  );
}
