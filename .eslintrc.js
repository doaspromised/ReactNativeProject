// module.exports = {
//   root: true,
//   extends: '@react-native-community',
//   parserOptions: {
//     ecmaFeatures: {
//       legacyDecorators: true
//     }
//   },
//   rules: {
//     // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
//     "no-undef": 1,
//     // 禁用魔术数字(3.14什么的用常量代替)
//     "no-magic-numbers": [2, {
//       "ignore": [0, -1, 1]
//     }],
//     // 禁止出现令人困惑的多行表达式
//     "no-unexpected-multiline": 2,
//   },
//
// };
//
//.eslintrc
module.exports = //.eslintrc
    {
      "extends": "airbnb",
      "env": {
        "browser": true,
        "node": true,
        "jest": true
      },
      "parser": "babel-eslint",
      "ecmaFeatures": {
        "forOf": true,
        "jsx": true,
        "es6": true
      },
      "rules": {
        "no-undef": 0,
        "no-console": 0,
        "no-alert": 0,
        "comma-dangle": 0,
        "react/prop-types": 0,
        "no-use-before-define": 0,
        "radix": 0,
        "no-param-reassign": 0,
        "react/jsx-filename-extension": 0,
        "no-mixed-operators": 0,
        "import/prefer-default-export": 0,
        "import/no-extraneous-dependencies": 0,
        "no-plusplus": 0,
        "react/prefer-stateless-function": 0,
        "class-methods-use-this": 0,
        "react/require-default-props": 0,
        "arrow-parens": 0,
        "no-unused-expressions": 0,
        "global-require": 0,
        "react/sort-comp": 0,
        "react/jsx-props-no-spreading": 0,
      },
      "plugins": [
        "react", "import"
      ],
      "settings": {
        "import/parser": "babel-eslint",
        "import/resolve": {
          "moduleDirectory": ["node_modules", "src"]
        }
      },
      "globals": {
        "__DEV__": true
      }
    }
