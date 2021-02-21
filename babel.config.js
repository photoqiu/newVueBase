/*
 * @Author: ext.qiubo
 * @Date: 2021-02-18 14:34:22
 * @LastEditTime: 2021-02-19 17:53:02
 * @LastEditors: ext.qiubo
 * @FilePath: \3C-Admin-Template\babel.config.js
 * @version: 
 */
  
module.exports = {
    "presets": [
      [
        "@babel/preset-env",
        {
            "useBuiltIns": "usage", // "usage" | "entry" | false, defaults to false.
            "corejs": "3",
            "targets": {
                "esmodules": true,
                "ie": "11"
            }
        }
      ]
    ],
    "plugins": [
      ["@babel/plugin-proposal-class-properties", { "loose": true  }],
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/transform-runtime", {"corejs": "3"}],
      "@babel/plugin-transform-modules-umd",
      "@babel/plugin-transform-typescript",
      "lodash",
      "@babel/plugin-syntax-dynamic-import"
    ]
};