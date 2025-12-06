module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "script",
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "no-console": "off",
    "quotes": ["error", "double", {"allowTemplateLiterals": true}],
    "max-len": ["error", {
      "code": 100,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true,
    }],
    "prefer-arrow-callback": "error",
    "no-restricted-globals": ["error", "name", "length"],
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
};
