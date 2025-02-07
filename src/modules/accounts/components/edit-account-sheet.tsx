import { Loader2 } from 'lucide-react';
import { z } from 'zod';

import { AccountForm } from '@/modules/accounts/components';
import {
  useBulkDeleteAccount,
  useEditAccount,
  useGetAccount,
} from '@/modules/accounts/services';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

import { insertAccountSchema } from '@/database/schema';
import { useSheets } from '@/hooks/use-sheets';

const formSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

export function EditAccountSheet() {
  const { isOpen, onOpen, onClose, getId } = useSheets();

  const accountQuery = useGetAccount(getId('editAccount') ?? '');
  const mutation = useEditAccount(getId('editAccount'));
  const deleteMutation = useBulkDeleteAccount();

  function onSubmit(values: FormValues) {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose('editAccount');
      },
    });
  }

  function onDelete() {
    deleteMutation.mutate(
      { ids: [getId('editAccount') ?? ''] },
      {
        onSuccess: () => {
          onClose('editAccount');
        },
      },
    );
  }

  const defaultValues = accountQuery.data
    ? { name: accountQuery.data.name }
    : { name: '' };

  return (
    <Sheet
      open={isOpen('editAccount')}
      onOpenChange={() => onOpen('editAccount')}
    >
      <SheetContent onClickOverlay={() => onClose('editAccount')}>
        <SheetHeader>
          <SheetTitle>Edit Account</SheetTitle>
          <SheetDescription>
            Update an account to track your finances.
          </SheetDescription>
        </SheetHeader>
        {!accountQuery.isLoading ? (
          <AccountForm
            id={getId('editAccount')}
            onSubmit={onSubmit}
            onDelete={onDelete}
            disabled={mutation.isPending}
            defaultValues={defaultValues}
          />
        ) : (
          <Loader2 className="size-4 mx-auto my-4 animate-spin text-muted-foreground" />
        )}
      </SheetContent>
    </Sheet>
  );
}
