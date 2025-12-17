import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: ["node_modules/**", "dist/**", "build/**", "*.min.js"],
  },

  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },

    rules: {
      ...js.configs.recommended.rules,

      eqeqeq: ["error", "always"],
      "no-unused-vars": "warn",
    },
  },

  prettier,
];