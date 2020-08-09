module.exports = {
  root: true,
  extends: [
    '@mengjing/eslint-config/vue'
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^h$' }]
  },
}
