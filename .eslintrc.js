module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
      globalReturn: false,
      experimentalObjectRestSpread: true,
      binaryLiterals: true,
      blockBindings: true,
      defaultParams: true,
      destructuring: true,
      forOf: false,
      generators: false,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      superInFunctions: true,
      octalLiterals: true,
      regexUFlag: false,
      restParams: true,
      spread: true,
      regexYFlag: false,
      templateStrings: true,
      unicodeCodePointEscapes: false,
      modules: false
    }
  },

  parser: 'babel-eslint',

  env: {
    commonjs: true,
    browser: true,
    jquery: false,
    node: true,
    es6: true
  },

  globals: {
    DG: true,
    __dirname: true
  },

  rules: {
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'arrow-body-style': [2, 'as-needed'],
    'strict': 0,
    'comma-dangle': [2, 'never'],
    'no-cond-assign': [2, 'always'],
    'no-console': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-const-assign': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-reserved-keys': 0,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-jsdoc': [2, {
      'requireParamDescription': false,
      'requireReturnDescription': false,
      'requireReturn': false
    }],
    'valid-typeof': 2,

    'block-scoped-var': 2,
    'complexity': [2, 9],
    'consistent-return': 0,
    'constructor-super': 2,
    'curly': 2,
    'default-case': 2,
    'dot-notation': 0,
    'dot-location': [2, 'property'],
    'eqeqeq': 0,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-label': 0,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,

    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-process-env': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': 2,
    'no-void': 2,
    'no-warning-comments': 0,
    'no-with': 2,
    'radix': 2,
    'vars-on-top': 0,
    'wrap-iife': 2,
    'yoda': [2, 'never'],

    'global-strict': 0,
    'no-extra-strict': 0,

    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-unused-vars': [2, { 'vars': 'all' }],
    'no-use-before-define': [2, 'nofunc'],

    'handle-callback-err': 0,
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 0,
    'no-restricted-modules': 0,
    'no-sync': 0,

    'brace-style': [2, '1tbs'],
    'camelcase': [2, { 'properties': 'never' }],
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'comma-style': [2, 'last'],
    'consistent-this': 0,
    'eol-last': 2,
    'func-names': 2,
    'func-style': 0,
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'lines-arond-comment': 0,
    'linebreak-style': [2, 'unix'],
    'max-nested-callbacks': [2, 4],
    'new-cap': 2,
    'new-parens': 2,
    'newline-after-var': 0,
    'no-array-constructor': 2,
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, { 'max': 2 }],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, { 'uninitialized': 'always', 'initialized': 'never' }],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'as-needed'],
    'quotes': [2, 'single', 'avoid-escape'],
    'semi-spacing': [2, { 'before': false, 'after': true }],
    'semi': [2, 'always'],
    'sort-vars': 0,
    'keyword-spacing': 2,
    'space-before-function-paren': [2, 'always'],
    'space-before-blocks': [2, 'always'],
    'space-in-parens': 0,
    'space-infix-ops': 2,
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
    'spaced-comment': [2, 'always'],
    'wrap-regex': 0,

    'no-var': 0,
    'generator-star': 0,

    'max-depth': [2, 4],
    'max-len': [2, 120],
    'max-params': 0,
    'max-statements': [2, 42],
    'no-bitwise': 0,
    'no-plusplus': 0
  }
};
