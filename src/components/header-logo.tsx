import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export function HeaderLogo() {
  return (
    <Link href="/">
      <div className={cn('flex items-center', 'hidden lg:flex')}>
        <Image src="/logo-white.svg" alt="Cash in Hand's white logo" height={28} width={28} />
        <h1 className={cn('font-semibold text-white text-2xl ml-2')}>Cash in Hand</h1>
      </div>
    </Link>
  );
}
