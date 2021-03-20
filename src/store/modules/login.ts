import {ActionContext, Module} from "vuex";
import {LoginStateType, RootStateType} from "@/store/types";


export const login: Module<LoginStateType, RootStateType> = {
    namespaced: true,
    state: {
        loggedIn: false
    },
    actions: {
      doLogin(context: ActionContext<LoginStateType, RootStateType>, payload: boolean) {
          context.commit("login", payload);
      }
    },
    mutations: {

        login(state: LoginStateType, payload: boolean) {
            state.loggedIn = payload;
        }
    }
}
