module.exports = {
  root: true,
  extends: '@react-native-community',
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  rules: {
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    "no-undef": 1,
    // 禁用魔术数字(3.14什么的用常量代替)
    "no-magic-numbers": [2, {
      "ignore": [0, -1, 1]
    }],
    // 禁止出现令人困惑的多行表达式
    "no-unexpected-multiline": 2,
  },

};
