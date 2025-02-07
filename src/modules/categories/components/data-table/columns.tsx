'use client';

import { ColumnDef } from '@tanstack/react-table';
import { InferResponseType } from 'hono';
import { ArrowUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

import { client } from '@/lib/hono';
import { cn } from '@/lib/utils';

import { CategoryActions } from '../category-actions';

export type ResponseType = InferResponseType<
  typeof client.api.categories.$get,
  200
>['data'][0];

export const columns: ColumnDef<ResponseType>[] = [
  {
    id: 'selector',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) =>
          table.toggleAllPageRowsSelected(Boolean(value))
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(Boolean(value))}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Name
        <ArrowUpDown className="size-4" />
      </Button>
    ),
  },
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Description
        <ArrowUpDown className="size-4" />
      </Button>
    ),
    cell: ({ row }) => row.original.description ?? '-', // Fallback to '-' if description is not available
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <div className={cn('w-full', 'flex justify-end')}>
        <CategoryActions id={row.original.id} />
      </div>
    ),
  },
];
