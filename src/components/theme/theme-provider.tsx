'use client';

import * as React from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

/**
 * Provides theme context to its children components.
 *
 * @provider
 * @see ThemeProviderProps for the available props.
 * @returns {JSX.Element} The theme provider component.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps): JSX.Element {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
