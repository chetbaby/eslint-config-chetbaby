module.exports = {
  plugins: ['prettier', 'react', 'react-hooks', 'import', 'unicorn'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:import/warnings',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/standard',
    'prettier/react',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        arrowParens: 'avoid',
      },
    ],
    'import/no-useless-path-segments': 'off',
    'unicorn/no-abusive-eslint-disable': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-param-reassign': 'off',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
