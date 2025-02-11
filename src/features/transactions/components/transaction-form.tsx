import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Trash } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { AmountInput } from '@/components/amount-input';
import { DatePicker } from '@/components/data-picker';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

import { cn, convertAmountToMiliunits } from '@/lib/utils';

import { insertTransactionSchema } from '@/database/schema';

const formSchema = z.object({
  date: z.coerce.date({
    required_error: 'Date is required',
  }),
  accountId: z
    .string({
      required_error: 'Account is required',
    })
    .min(1, 'Account is required'),
  categoryId: z.string().nullable().optional(),
  payee: z
    .string({
      required_error: 'Payee is required',
    })
    .min(1, 'Payee is required'),
  amount: z
    .string({
      required_error: 'Amount is required',
    })
    .min(1, 'Amount is required'),
  notes: z.string().nullable().optional(),
});

const apiSchema = insertTransactionSchema.omit({
  id: true,
  userId: true,
});

type FormValues = z.input<typeof formSchema>;
type ApiFormValues = z.input<typeof apiSchema>;

type TransactionFormProps = {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: ApiFormValues) => void;
  onDelete?: VoidFunction;
  disabled?: boolean;
  accountOptions: { label: string; value: string }[];
  categoryOptions: { label: string; value: string }[];
};

export function TransactionForm({
  onSubmit,
  defaultValues,
  disabled,
  id,
  onDelete,
  accountOptions,
  categoryOptions,
}: TransactionFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  function handleSubmit(values: FormValues) {
    const amount = parseFloat(values.amount);
    const amountInMiliunits = convertAmountToMiliunits(amount);

    onSubmit({
      ...values,
      amount: amountInMiliunits,
      categoryId: values.categoryId === '' ? null : values.categoryId,
    });
  }

  function handleDelete() {
    onDelete?.();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn('space-y-4 pt-4')}
      >
        {/* Date */}
        <FormField
          name="date"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Date <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <DatePicker
                  value={field.value}
                  onChange={field.onChange}
                  disabled={disabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Account */}
        <FormField
          name="accountId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Account <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an account" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {accountOptions.map(
                      (account: { label: string; value: string }) => (
                        <SelectItem key={account.value} value={account.value}>
                          {account.label}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* Category */}
        <FormField
          name="categoryId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value ?? undefined}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categoryOptions.map(
                    (category: { label: string; value: string }) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        {/* Payee */}
        <FormField
          name="payee"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Payee <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
                  placeholder="Add a payee"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Amount */}
        <FormField
          name="amount"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Amount <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <AmountInput
                  disabled={disabled}
                  placeholder="0.00"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Notes */}
        <FormField
          name="notes"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea
                  disabled={disabled}
                  placeholder="Optional notes"
                  {...field}
                  value={field.value ?? ''}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className={cn('w-full')} type="submit" disabled={disabled}>
          {!disabled ? (
            <>{id ? 'Save Changes' : 'Create Transaction'}</>
          ) : (
            <Loader2 className="animate-spin" />
          )}
        </Button>
        {id ? (
          <Button
            className="w-full"
            variant="outline"
            type="button"
            disabled={disabled}
            onClick={handleDelete}
          >
            <Trash className="size-4" />
            Delete Transaction
          </Button>
        ) : null}
      </form>
    </Form>
  );
}
