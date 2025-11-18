// backend/eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: { globals: { ...globals.node, ...globals.jest } },
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  },
]);
