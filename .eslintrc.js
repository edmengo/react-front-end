module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jsx-a11y", "import", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "import/prefer-default-export": "off"
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathPrefix: "~",
        rootPathSuffix: "src"
      }
    }
  }
};
