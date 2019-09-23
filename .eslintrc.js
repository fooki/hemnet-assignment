module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es6': true,
    'mocha': true
  },
  'extends': ['eslint:recommended','plugin:react/recommended'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'shallow': 'readonly',
    'expect': 'readonly',
    'React': 'readonly',
    'Factory': 'readonly',
    'process': 'readonly',
    'axios': 'readonly',
    'sinon': 'readonly',
    'moxios': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'react/prop-types': 0,
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
