/*
 * @Author: ext.qiubo
 * @Date: 2021-02-18 16:31:53
 * @LastEditTime: 2021-02-19 18:02:15
 * @LastEditors: ext.qiubo
 * @FilePath: \3C-Admin-Template\src\app_index.js
 * @version: 
 */
  
import { createApp } from 'vue'
import router from './router'
import { store } from './vuex/index';
import App from './pages/App.vue'

createApp(App).use(router).use(store).mount('#app');