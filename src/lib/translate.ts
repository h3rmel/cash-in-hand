/**
 * Translates a given key using the provided language list.
 *
 * @param key - The key to be translated.
 * @param list - The language list containing translations for the key.
 * @returns The translated string if the key is found in the list and a valid language is set, otherwise undefined.
 */
export function translateOutOfContext(key: string | undefined, list: LanguageList): string {
  if (localStorage === undefined) {
    return '';
  }

  const language = localStorage.getItem('h3rmel-portfolio-language');

  if (key === undefined) return '';

  if (!language) return list[key]['pt-BR'];

  return list[key][language];
}
