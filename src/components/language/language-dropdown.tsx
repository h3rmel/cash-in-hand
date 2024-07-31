'use client';

// #region Imports

import Image from 'next/image';

import { useLanguage } from '@/components/language/language-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// #endregion

/**
 * The available languages options.
 */
const LANGUAGES_OPTIONS: { [key: string]: { flag: string; name: string; alt: string } } = {
  'pt-BR': {
    flag: '/languages/pt-BR.png',
    name: 'BR',
    alt: 'Brasil',
  },
  'en-US': {
    flag: '/languages/en-US.png',
    name: 'EN',
    alt: 'United States',
  },
};

/**
 * Renders a language toggle component.
 *
 * @component
 * @returns {JSX.Element} The language toggle component.
 */
export function LanguageToggle(): JSX.Element {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Image
            src={LANGUAGES_OPTIONS[language].flag}
            alt={`${LANGUAGES_OPTIONS[language].alt}'s flag`}
            width={24}
            height={24}
          />
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[999] bg-background/60 backdrop-blur-md">
        <DropdownMenuItem className="flex gap-2" onClick={() => setLanguage('pt-BR')}>
          <>
            <Image src="/languages/pt-BR.png" alt="Brasil's flag" width={24} height={24} />
            BR
          </>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2" onClick={() => setLanguage('en-US')}>
          <>
            <Image src="/languages/en-US.png" alt="United States's flag" width={24} height={24} />
            EN
          </>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
