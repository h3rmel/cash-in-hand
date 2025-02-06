/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from 'zod';

import { insertAccountSchema } from '@/database/schema';
import { useCreateAccount } from '@/hooks/accounts/use-create-account';
import { useNewAccount } from '@/hooks/accounts/use-new-account';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '../ui/sheet';
import { AccountForm } from './account-form';

const formSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

export function NewAccountSheet() {
  const { isOpen, onOpen, onClose } = useNewAccount();
  const mutation = useCreateAccount();

  function onSubmit(values: FormValues) {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  }

  return (
    <Sheet open={isOpen} onOpenChange={onOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>Create a new account to track your finances.</SheetDescription>
        </SheetHeader>
        <AccountForm onSubmit={onSubmit} disabled={mutation.isPending} defaultValues={{ name: '' }} />
      </SheetContent>
    </Sheet>
  );
}
