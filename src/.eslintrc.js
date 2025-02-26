module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: 'babel-eslint',
        ecmaFeatures: {
        legacyDecorators: true
      }
    },
    extends: [
      '@nuxtjs',
      'plugin:nuxt/recommended',
      'eslint:recommended',
      // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
      // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
      'plugin:vue/recommended'
    ],
    plugins: [
      'vue'
    ],
    // add your custom rules here
    rules: {
      'semi': [2, 'never'],
      'no-console': 'off',
      'vue/max-attributes-per-line': 'off',
      "vue/html-self-closing": ["error", {
        "html": {
          "void": "always",
          "normal": "never",
          "component": "any"
        }
      }]
    }
  }