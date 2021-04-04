import {App, Ref, ref} from 'vue';
import store, {key} from '../store'
import router from '../router'
/* Mock */
import '../mock';
import directives from './directive';
/**
 * 全局App
 */
const APP: Ref<App|null> = ref(null);
/**
 * 启动
 * @param app
 */
export function boostrap(app: App): void {
    APP.value = app;
    // 初始化 路由
    initRouter(app);
    // 初始化 store
    initStore(app);
    // 初始化自定义指令
    initDirective(app);
}

/**
 * 获取UseApp
 */
export function useApp(): Promise<App>{
    return new Promise<App>((resolve, reject)=> {
        if (APP.value !== null) {
            resolve(APP.value);
        } else {
            reject('App为空');
        }
    });
}


/**
 * 初始化路由
 * @param app
 */
function initRouter(app: App) {
    app.use(router);
}

/**
 * 初始化Vuex Store
 * @param app
 */
function initStore(app: App) {
    app.use(store, key);
}


export type DirectiveInstall = (app: App)=> void;

/**
 * 初始化指令
 * @param app
 */
function initDirective(app: App) {
    if (directives && directives.length) {
        directives.forEach(value => value(app));
    }
}
