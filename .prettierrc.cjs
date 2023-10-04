/** @type {import("prettier").Options} */
const config = {
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  bracketSpacing: true,
  endOfLine: "auto",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx"],
  importOrderTypeScriptVersion: "5.0.0",
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
};

module.exports = config;
