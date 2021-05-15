module.exports = {
  extends: ['airbnb', 'prettier'],
  overrides: [
    {
      env: { jest: true },
      files: ['*.spec.jsx?', '**/__tests__/**'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
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
};
