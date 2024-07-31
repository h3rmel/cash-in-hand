'use client';

import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

// #region Interfaces

/**
 * @param children - The children components.
 * @param defaultLanguage - The default language.
 * @param storageKey - The key used to store the language in local storage.
 */
interface LanguagesProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
}

/**
 * @param language - The current language.
 * @param setLanguage - The function to set the language.
 * @param translate - The function to translate a key.
 */
interface LanguageProviderState {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (key: string | undefined, list: LanguageList) => string | undefined;
}

// #endregion

const initialState: LanguageProviderState = {
  language: 'pt-BR',
  setLanguage: () => null,
  translate: () => '',
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

/**
 * Provides language context to its children components.
 *
 * @provider
 * @see LanguagesProviderProps for the available props.
 * @returns {JSX.Element} The language provider component.
 */
export function LanguageProvider({
  children,
  defaultLanguage = 'pt-BR',
  storageKey = 'cash-in-hand-language',
}: LanguagesProviderProps): JSX.Element {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  /**
   * Translates a given key using the provided language list.
   *
   * @param key - The key to be translated.
   * @param list - The language list containing translations for the key.
   * @returns The translated string if the key is found in the list and a valid language is set, otherwise undefined.
   */
  const translate = useCallback(
    (key: string | undefined, list: LanguageList): string => {
      if (key === undefined) return '';

      if (!language) return list[key]['pt-BR'];

      return list[key][language];
    },
    [language],
  );

  const value = {
    language,
    setLanguage: (language: Language) => {
      localStorage.setItem(storageKey, language);
      setLanguage(language);
    },
    translate,
  };

  return <LanguageProviderContext.Provider value={value}>{children}</LanguageProviderContext.Provider>;
}

/**
 * Custom hook that provides the language state from the LanguageProvider context.
 *
 * @hook
 * @returns {LanguageProviderState} The language state from the LanguageProvider context.
 * @throws {Error} If used outside of a LanguageProvider.
 */
export const useLanguage = (): LanguageProviderState => {
  const context = useContext(LanguageProviderContext);

  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');

  return context;
};
