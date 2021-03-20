import {createStore, Store, useStore as useBaseStore} from 'vuex'
import {config} from './modules/config'
import {AllModelTypes, RootStateType} from "@/store/types";
import {InjectionKey} from 'vue'

export default createStore<RootStateType>({
    state: {
        version: '1,2,3'
    },
    modules: {
      config: config
    }
});

export const key: InjectionKey<Store<RootStateType>> = Symbol('vuex-store');
export const useStore = <T = AllModelTypes>(): Store<T>=> {
    return useBaseStore<T>(key);
}
