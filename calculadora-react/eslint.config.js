import tseslint from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      semi: ['error', 'never'],
      'max-len': ['error', { code: 120 }]
    }
  }
]