module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:react-hooks/recommended'],
  overrides: [
    {
      env: { jest: true },
      files: ['*.spec.jsx?', '**/__tests__/**'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/prop-types': 'off',
      },
    },
    {
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
      files: ['**/*.ts?(x)', '**/*.d.ts?(x)'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-use-before-define': ['error'],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            '.d.ts': 'never',
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'no-shadow': 'off',
        // per https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
  ],
  plugins: ['prettier', 'sort-destructure-keys', 'sort-keys-fix'],
  rules: {
    'arrow-parens': 'off',
    'func-names': ['warn', 'as-needed'],
    'func-style': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-keys-fix/sort-keys-fix': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
