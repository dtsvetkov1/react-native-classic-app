module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
        'error',
        {
            singleQuote: true,
            parser: 'flow',
            tabWidth: 4,
            // trailingComma: 'none',
            endOfLine: 'auto',
        },
    ],
    // 'object-curly-spacing': ["error", "always"],
  }
};
