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

    config: ConfigStateType
}

/**
 * 配置State
 */
export interface ConfigStateType {
    locale: Locale
}
