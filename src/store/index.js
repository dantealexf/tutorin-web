import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000/";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        auth: false
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            state.auth = Boolean(user);
        }
    },
    actions: {
        async login({ dispatch },credentials) {
            await axios.get('sanctum/csrf-cookie');
            await axios.post('api/login', credentials);
            return dispatch("getUser");
        },
        async logout({ dispatch }) {
            await axios.post('api/logout');
            return dispatch("getUser");
        },
        getUser({commit}) {
            axios.get("api/user").then(res => {
                commit("SET_USER", res.data);
            })
                .catch(() => {
                    commit("SET_USER", null);
                });
        },
    },
    modules: {}
});
