'use client';

import { Button } from '@/components/ui/button';

import { useNewAccount } from '@/hooks/accounts/use-new-account';

export default function Home() {
  const { onOpen } = useNewAccount();

  return (
    <div>
      <Button onClick={onOpen}>Add Account</Button>
    </div>
  );
}
