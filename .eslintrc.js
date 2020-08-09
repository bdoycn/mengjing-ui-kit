module.exports = {
  root: true,

  'extends': [
    '@mengjing/eslint-config/vue',
    '@vue/typescript'
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^h$' }]
  },

  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: {
      'no-unused-vars': 'off',
    }
  }]
}
