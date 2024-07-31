'use client';

// #region Imports

import { useLanguage } from '@/components/language/language-provider';
import { MOCK_TRANSACTIONS } from '@/mocks/transaction';

import { columns } from './_components/columns';
import { DataTable } from './_components/data-table';
import { viewLanguages } from './_i18n/view.lng';

// #endregion

/**
 * @page
 * @returns {JSX.Element} The dashboard page.
 */
export default function DashboardPage(): JSX.Element {
  const { translate } = useLanguage();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-medium tracking-wide">{translate('dashboard', viewLanguages)}</h1>
      <DataTable columns={columns} data={MOCK_TRANSACTIONS} />
    </div>
  );
}
