import { currentUser } from "../../helpers/auth";
const user = currentUser();

export default {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        authError: null,
        rememberMe: false
    },
    getters: {
        IS_LOADING: state => {
            return state.loading;
        },
        IS_LOGGEND_IN: state => {
            return state.isLoggedIn;
        },
        CURRENT_USER: state => {
            return state.currentUser;
        },
        AUTH_ERROR: state => {
            return state.authError;
        },
        REMEMBER_ME: state => {
            return state.rememberMe;
        }
    },
    mutations: {
        REMEMBER_ME (state, param){
            state.rememberMe = param;
        },
        LOGIN: state => {
            state.loading = true;
            state.authError = null;
        },
        LOGIN_SUCCESS: (state, payload) => {
            state.authError = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
            state.rememberMe ? localStorage.setItem('user', JSON.stringify(state.currentUser)) : sessionStorage.setItem('user', JSON.stringify(state.currentUser));
        },
        LOGIN_FAILED: (state, payload) => {
            state.authError = payload.err;
            state.loading = false;
        },
        LOGOUT: (state) => {
            localStorage.removeItem('user');
            sessionStorage.removeItem('user');
            state.isLoggedIn = false;
            state.currentUser = null;
        },
    },
    actions: {
        LOGIN: (context) => {
            context.commit('LOGIN');
        },
    }
}
