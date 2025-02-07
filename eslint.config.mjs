import eslint from '@eslint/js';
import checkFile from 'eslint-plugin-check-file';
import jsdoc from 'eslint-plugin-jsdoc';
import noSecrets from 'eslint-plugin-no-secrets';
import tseslint from 'typescript-eslint';

const eslintConfig = tseslint.config({
  extends: ["next/core-web-vitals", "next/typescript", eslint.configs.recommended, tseslint.configs.recommendedTypeChecked],
  plugins: {
    'no-secrets': noSecrets,
    'check-file': checkFile,
    jsdoc,
  },
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  ignores: [
    'node_modules',
    '.next',
    '.vscode',
    'public',
    'drizzle',
    './*.*',
    './src/components/ui',
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
    '@typescript-eslint/no-unnecessary-condition': 'warn',
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
      },
      {
        selector: ['accessor', 'classMethod', 'objectLiteralMethod', 'typeMethod'],
        format: ['camelCase'],
      },
      {
        selector: ['class', 'enum', 'interface', 'typeAlias'],
        format: ['PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['enumMember', 'typeParameter'],
        format: ['UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
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
        leadingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    /**
     * JSDoc
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
     * @see https://github.com/nickdeis/eslint-plugin-no-secrets
     */
    'no-secrets/no-secrets': ['error', { ignoreContent: 'https', tolerance: 4.2 }],
  },
});

export default eslintConfig;
