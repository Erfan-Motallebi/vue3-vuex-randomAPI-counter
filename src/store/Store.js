import { createStore } from "vuex";
import axios from 'axios';

const Store = createStore({
    state: {
        counter: 0,
        colorCode: 'purple',
    },
    mutations: {
        increaseCounter(state, randomAPI) {
            state.counter += randomAPI
        },
        decreaseCounter(state, randomAPI) {
            state.counter -= randomAPI
        },
        setColorCode(state, newValue) {
            state.colorCode = newValue;
        }
    },
    actions: {
        increaseCounter({ commit }) {
            axios('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(response => {
                commit('increaseCounter', response.data)
            })
        },
        decreaseCounter({ commit }) {
            axios('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(res => {
                commit('decreaseCounter', res.data)
            })
        },
        setColorCode({ commit }, newValue) {
            commit('setColorCode', newValue)
        }
    },
    getters: {
        counterSquared(state) {
            return state.counter * state.counter
        }
    },
    modules: {}

})

export default Store;