'use client';

import { Button } from '@/components/ui/button';

import { useSheets } from '@/hooks/use-sheets';

export default function Home() {
  const { onOpen } = useSheets();

  return (
    <div>
      <Button onClick={() => onOpen('newAccount')}>Add Account</Button>
    </div>
  );
}
