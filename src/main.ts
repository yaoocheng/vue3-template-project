import {
    createApp,
} from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { createPinia } from 'pinia';
import router from './router/index';
import App from './App.vue';
import 'element-plus/dist/index.css';
import 'ast/css/index.css';

const app = createApp(App);
app.use(router);
app.use(ElementPlus, {
    locale: zhCn,
});
app.use(createPinia());
app.mount('#app');
