module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-empty-pattern': 0,
    'no-unused-vars': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
