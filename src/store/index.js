import createPersistedState from 'vuex-persistedstate'
import Vuex from 'vuex';
import productList from './modules/productList'

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    
    modules: {
        productList
    },
    plugins: [createPersistedState]
});