/*
 * @Author: ext.qiubo
 * @Date: 2021-02-19 23:24:56
 * @LastEditTime: 2021-02-20 18:39:24
 * @LastEditors: ext.qiubo
 * @FilePath: \3C-VAdmin\src\shims.d.ts
 * @version: 
 */
declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module "vue/types/vue" {
    interface Vue {
        $http: any;
        $Message: any;
        $Modal: any;
    }
}

declare module '*.module.css' {
    const classes: { readonly [key: string]: string }
    export default classes
}
  
declare module '*.module.less' {
    const classes: { readonly [key: string]: string }
    export default classes
}
  
declare module '*.module.scss' {
    const classes: { readonly [key: string]: string }
    export default classes
}