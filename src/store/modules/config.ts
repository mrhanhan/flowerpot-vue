
import ZhCN from 'ant-design-vue/es/locale/zh_CN'
import {Module} from "vuex";
import {ConfigStateType, RootStateType} from "@/store/types";

export const config: Module<ConfigStateType, RootStateType> = {
    namespaced: true,
    state: {
        locale: ZhCN
    },
    getters: {
        getLocale: ({locale})=>locale
    },
    mutations: {

    }

}
