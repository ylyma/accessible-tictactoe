module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
<<<<<<< HEAD
  },
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
=======
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
>>>>>>> 872842fa34f86361ecfe2fac134baa146a11c1cc
};
