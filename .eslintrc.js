module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "import/extensions": ["error",  "always", {ignorePackages: true} ],
    "linebreak-style": ['error', 'windows'],
    "max-len": [2, 120, 4, {"ignoreUrls": true}],
    "no-unused-expressions": ["error", { "allowTernary": true }]
  },
};
