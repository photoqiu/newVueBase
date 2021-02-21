## 最干净的VUE3.x的框架实现

框架使用：vue3.0.5 + vue-router4.0.3 + vuex4.0.0 + typescript4.1.5 + whatwg-fetch3.5.0 + lodash4.17.20

样式支持：sass和less，支持postcss，本来想使用boostrap后来冷静了一下。没加！！当然我也没有去掉jquery的支持。没准未来会更多的使用[tailwindcss](https://github.com/tailwindlabs/tailwindcss) 

如果想要支持boostrap 需要在加上boostrap 和 Popover.js的支持。

使用webpack 5.22.0。在Dev中没有使用多线程打包。在build中将使用terser-webpack-plugin。

