/*
 * @Author: ext.qiubo
 * @Date: 2021-02-18 14:38:34
 * @LastEditTime: 2021-02-18 14:42:12
 * @LastEditors: ext.qiubo
 * @FilePath: \3C-Admin-Template\postcss.config.js
 * @version: 
 */
module.exports = {
    plugins: {
        "postcss-import": {},
        "postcss-url": {},
        "postcss-aspect-ratio-mini": {}, 
        "postcss-write-svg": {
            utf8: false
        },
        'postcss-preset-env': {
            browsers: 'last 2 versions',
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
            features: {
                'custom-properties': false,
                'focus-within-pseudo-class': false, // Attempt at fixing build error
                // https://github.com/tailwindlabs/tailwindcss/discussions/2462
            }
        },
        '@fullhuman/postcss-purgecss': {
            content: [
                './src/**/*.html',
                './src/**/*.{js,vue,ts,tsx}',
                './src/*.{js,jsx,ts,tsx}'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: ["html", "body"]
        },
        'tailwindcss': {},
        'postcss-mixins': {},
        'postcss-focus': {},
        'autoprefixer': {},
        'postcss-px-to-viewport': {
            viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
            viewportHeight: 667,
            unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
            minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            mediaQuery: false // 允许在媒体查询中转换`px`
        },
        'postcss-viewport-units': {},
        'cssnano': {
            preset: 'advanced',
            autoprefixer: false,
            'postcss-zindex': false
        }
    }
};