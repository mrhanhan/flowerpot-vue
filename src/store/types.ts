import {Locale} from "ant-design-vue/es/locale-provider";

/**
 * 跟类型
 */
export interface RootStateType {
    version: string
}

/**
 * Vuex 所有子模块的集成配置
 */
export interface AllModelTypes extends RootStateType {

    /**
     * 配置状态
     */
    config: ConfigStateType;
    /**
     * 登录状态
     */
    login: LoginStateType;
}

/**
 * 配置State
 */
export interface ConfigStateType {
    locale: Locale
}

/**
 * 登录状态
 */
export interface LoginStateType {
    /**
     * 是否登录了
     */
    loggedIn: boolean;
}
