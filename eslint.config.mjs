import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import jsdoc from 'eslint-plugin-jsdoc';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  eslintPluginPrettierRecommended,
  ...tseslint.configs.recommended,
  jsdoc.configs['flat/recommended-typescript'],
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.plugins('no-secrets', 'check-file', 'jsx-a11y'),
  ...compat.config({
    parserOptions: {
      project: "./tsconfig.json",
      sourceType: "module",
      ecmaVersion: "latest",
      ecmaFeatures: {
        impliedStrict: true,
        jsx: true,
      },
    },
    ignorePatterns: [
      'node_modules/',
      '.next/',
      'out/',
      'public/',
      'coverage/',
      'dist/',
      'build/',
      'src/components/ui/*.*',
    ],
    rules: {
      /**
       * Default rules
       * @see https://eslint.org/docs/latest/rules/
       */
      // Disable console.log to encourage more explicit logging
      'no-console': [
        'warn',
        {
          allow: [
            'warn',
            'error',
            'info',
            'dir',
            'table',
            'assert',
            'count',
            'time',
            'timeLog',
            'trace',
            'groupCollapsed',
            'groupEnd',
          ],
        },
      ],
      'no-alert': 'error',
      'no-template-curly-in-string': 'error',
      'prefer-template': 'warn',
      'no-implicit-coercion': 'warn',
      'require-await': 'warn',
      'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
      'no-restricted-imports': 'off',
      'padding-line-between-statements': 'off',
      /**
       * TypeScript rules
       * @see https://typescript-eslint.io/rules/
       */
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        { assertionStyle: 'as' },
      ],
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': true,
          'ts-nocheck': true,
          'ts-check': false,
          minimumDescriptionLength: 3,
        },
      ],
      '@typescript-eslint/restrict-template-expressions': 'error',
      '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          enforceForJSX: true,
        },
      ],
      '@typescript-eslint/no-floating-promises': [
        'error',
        { ignoreVoid: true, ignoreIIFE: true },
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            arguments: false,
            attributes: false,
          },
        },
      ],
      '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/switch-exhaustiveness-check': 'warn',
      '@typescript-eslint/naming-convention': [
        'warn',
        /**
         * If you want to edit this config, check out it's documentation
         * @see https://typescript-eslint.io/rules/naming-convention/
         */
        {
          // Ignore convention for 3rd party libraries
          selector: 'import',
          format: null,
        },
        {
          // Matches everything
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: ['accessor', 'classMethod', 'objectLiteralMethod', 'typeMethod'],
          format: ['camelCase'],
        },
        {
          selector: ['class', 'enum', 'interface', 'typeAlias'],
          format: ['PascalCase'],
        },
        {
          selector: ['enumMember', 'typeParameter'],
          format: ['UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: ['parameter'],
          format: ['camelCase', 'snake_case'],
        },
        {
          selector: ['property', 'parameterProperty', 'typeProperty'],
          format: ['camelCase', 'snake_case'],
        },
        {
          selector: 'variable',
          format: ['camelCase', 'snake_case', 'UPPER_CASE', 'PascalCase'],
        },
      ],
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/quotes': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      /**
       * JSDoc
       *
       * @see https://github.com/gajus/eslint-plugin-jsdoc
       */
      'jsdoc/require-throws': 'error',
      'jsdoc/check-indentation': 'warn',
      'jsdoc/no-blank-blocks': 'warn',
      'jsdoc/require-asterisk-prefix': 'warn',
      'jsdoc/require-description': 'warn',
      'jsdoc/sort-tags': 'warn',
      'jsdoc/check-syntax': 'warn',
      'jsdoc/tag-lines': ['warn', 'never', { startLines: 1 }],
      'jsdoc/require-param': ['warn', { checkDestructuredRoots: false }],
      // Disable it, as it's not always necessary
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/check-tag-names': ['warn', { definedTags: ['remarks', 'privateRemarks'] }],
      'jsdoc/require-hyphen-before-param-description': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/require-returns-check': 'off',
      'jsdoc/check-param-names': ['error', { checkDestructured: false }],
      /**
       * Check File
       *
       * @see https://github.com/DukeLuo/eslint-plugin-check-file
       */
      'check-file/no-index': 'off',
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{js,jsx,ts,tsx}': 'KEBAB_CASE',
        },
      ],
      /**
       * No Secrest rules
       *
       * @see https://github.com/nickdeis/eslint-plugin-no-secrets
       */
      'no-secrets/no-secrets': ['error', { ignoreContent: 'https', tolerance: 4.2 }],
      /**
       * Prettier
       *
       * @see https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file
       */
      'prettier/prettier': 'error',
    },
  }),
];

export default eslintConfig;
