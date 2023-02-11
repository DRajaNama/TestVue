import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {  // define variables
        counter: 0
    },
    mutations: {
        increment(state, data) {
            // state.counter = data;
            state.counter++;
        },
        decrement(state, data) {
            // state.counter = data;
            state.counter--;
        }
    },
    actions: {
        increment: (context, data) => {
            context.commit('increment', data)
        },
        decrement: (context, data) => {
            context.commit('decrement', data)
        }
    },
    getters: {
        counter(state) {
            return state.counter;
        }
    }
})

