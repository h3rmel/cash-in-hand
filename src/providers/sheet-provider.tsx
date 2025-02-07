'use client';

import {
  EditAccountSheet,
  NewAccountSheet,
} from '@/modules/accounts/components';
import {
  EditCategorySheet,
  NewCategorySheet,
} from '@/modules/categories/components';

export function SheetProvider() {
  return (
    <>
      <EditAccountSheet />
      <NewAccountSheet />
      <EditCategorySheet />
      <NewCategorySheet />
    </>
  );
}
