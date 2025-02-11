'use client';

import { Row } from '@tanstack/react-table';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

import { cn } from '@/lib/utils';

import {
  useDeleteTransactions,
  useGetTransactions,
} from '@/features/transactions/services';
import { useSheets } from '@/hooks/use-sheets';
import { DataTable } from '@/components/data-table';
import { columns } from '@/features/transactions/components';

export default function TransactionsPage() {
  const { onOpen } = useSheets();

  const transactionQuery = useGetTransactions();
  const deleteTransactions = useDeleteTransactions();

  const transactions = transactionQuery.data ?? [];
  const isDisabled = transactionQuery.isLoading || deleteTransactions.isPending;

  function handleOnDelete(rows: Row<any>[]) {
    const ids = rows.map((r) => r.original.id);
    deleteTransactions.mutate({ ids });
  }

  if (transactionQuery.isLoading) {
    return (
      <section className={cn('flex flex-col gap-4', 'min-h-[86.5dvh]')}>
        <hgroup
          className={cn(
            'flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2',
          )}
        >
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-6 w-24" />
        </hgroup>
        <div className="space-y-4">
          <Skeleton className="h-8 w-72" />
          <Skeleton className="h-96 w-full" />
        </div>
      </section>
    );
  }

  return (
    <section className={cn('flex flex-col gap-4', 'min-h-[86.5dvh]')}>
      <hgroup
        className={cn(
          'flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2',
        )}
      >
        <h2
          className={cn('text-2xl font-semibold tracking-tight line-clamp-1')}
        >
          Transactions History
        </h2>
        <Button
          size="sm"
          onClick={() => onOpen('newTransaction')}
          className="w-full lg:w-auto"
        >
          <Plus className="size-4" />
          Add new
        </Button>
      </hgroup>
      <DataTable
        disable={isDisabled}
        onDelete={handleOnDelete}
        data={transactions}
        columns={columns}
        filterKey="payee"
      />
    </section>
  );
}
