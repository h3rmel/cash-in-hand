'use client';

// #region Imports

import { ColumnDef } from '@tanstack/react-table';

import { ArrowUpDown, Pencil, Trash } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { translateOutOfContext } from '@/lib/translate';
import { MOCK_CATEGORIES } from '@/mocks/category';
import { ITransaction } from '@/types/transaction';

import { dataTableLanguages } from '../_i18n/data-table.lng';

// #endregion

export const columns: ColumnDef<ITransaction>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          {translateOutOfContext('name', dataTableLanguages)}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: (cell) => {
      const name = cell.row.original.name;

      return <p className="h-10 px-4 py-2 capitalize">{name}</p>;
    },
  },
  {
    accessorKey: 'type',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          {translateOutOfContext('type', dataTableLanguages)}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: (cell) => {
      const type = cell.row.original.type;

      return <p className="h-10 px-4 py-2 capitalize">{translateOutOfContext(type, dataTableLanguages)}</p>;
    },
  },
  {
    accessorKey: 'category',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          {translateOutOfContext('category', dataTableLanguages)}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: (cell) => {
      const category = MOCK_CATEGORIES.find((category) => category.id === cell.row.original.categoryId);

      return <p className="h-10 px-4 py-2 capitalize">{category?.name ?? ''}</p>;
    },
  },
  {
    accessorKey: 'value',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          {translateOutOfContext('value', dataTableLanguages)}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: (cell) => {
      const value: string = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(Number(cell.row.original.value));

      return <p className="h-10 px-4 py-2">{value}</p>;
    },
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          {translateOutOfContext('date', dataTableLanguages)}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: (cell) => {
      const date: string = Intl.DateTimeFormat('pt-BR').format(new Date(cell.row.original.date));

      return <p className="h-10 px-4 py-2">{date}</p>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const transaction: ITransaction = row.original;

      return (
        <TooltipProvider delayDuration={300}>
          <div className="flex items-center justify-end gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => console.log(transaction)}>
                  <Pencil className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{translateOutOfContext('edit', dataTableLanguages)}</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => console.log(transaction.id)}>
                  <Trash className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>{translateOutOfContext('delete', dataTableLanguages)}</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      );
    },
  },
];
