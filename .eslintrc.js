module.exports = {
    "env": {
        "browser": true,
        "es6": true
      },
      "extends": "eslint:recommended",
      "parserOptions": {
        "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
        },
        "sourceType": "module"
      },
      "plugins": ["react", "prettier"],
      "rules": {
        "indent": ["error", 2],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "no-unused-vars": 0
      }
};