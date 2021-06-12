import { createApp } from 'vue'
import App from './App.vue'

// import 'ant-design-vue/dist/antd.less'
import 'ant-design-vue/dist/antd.dark.less'
import './assets/less/golbal.less'

import {boostrap} from './bootstrap';
const app = createApp(App);

boostrap(app);
// app.use(Antd);
app.mount('#app');
