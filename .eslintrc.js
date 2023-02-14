module.exports = {
  extends: ["@7inch/eslint-config-vue"],
  globals: {
    uni: "readonly",
    requirePlugin: "readonly",
  },
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
