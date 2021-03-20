import {createStore, Store, useStore as useBaseStore} from 'vuex'
import {config} from './modules/config'
import {AllModelTypes, RootStateType} from "@/store/types";
import {InjectionKey} from 'vue'
import {login} from "@/store/modules/login";

export default createStore<RootStateType>({
    state: {
        version: '1,2,3'
    },
    modules: {
      config: config,
      login: login,
    }
});

/* Store 存储的Key */
export const key: InjectionKey<Store<RootStateType>> = Symbol('vuex-store');
/**
 * Value
 */
export const useStore = <T = AllModelTypes>(): Store<T>=> {
    return useBaseStore<T>(key);
}
