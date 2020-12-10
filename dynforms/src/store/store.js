import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store ({
    state: {
        TypeSelected: ''
    },
    mutations: {
        change(state, TypeSelected) {
            state.TypeSelected = TypeSelected
        }
    },
    getters: {
        TypeSelected: state => state.TypeSelected
    }
})