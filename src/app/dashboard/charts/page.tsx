'use client';

import { useLanguage } from '@/components/language/language-provider';

import { viewLanguages } from '../_i18n/view.lng';

/**
 * @page
 * @returns {JSX.Element} The dashboard chart page.
 */
export default function DashboardChartsPage(): JSX.Element {
  const { translate } = useLanguage();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-medium tracking-wide">{translate('charts', viewLanguages)}</h1>
    </div>
  );
}
