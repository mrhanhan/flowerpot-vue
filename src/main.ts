import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import * as Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.dark.less'
import './assets/less/golbal.less'
import store, {key} from './store'
/* Mock */
import './mock';

const app = createApp(App);

app.use(router);
app.use(store, key);
// app.use(Antd);
app.mount('#app');
