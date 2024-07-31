/**
 * The possible languages.
 */
type Language = 'pt-BR' | 'en-US';

/**
 * The LanguageList type.
 *
 * @example
 * ```
 * hello: {
 *  'pt-BR': 'Olá',
 *  'en-US': 'Hello',
 *  'es-ES': 'Hola',
 * }
 * ```
 */
type LanguageList = Record<string, Record<string, string>>;
