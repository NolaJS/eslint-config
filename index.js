module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
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
  parser: 'babel-eslint',
  plugins: ['prettier', 'react-hooks', 'sort-destructure-keys', 'sort-keys-fix'],
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
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'sort-destructure-keys/sort-destructure-keys': 2,
    'sort-keys-fix/sort-keys-fix': 2,
  },
};
