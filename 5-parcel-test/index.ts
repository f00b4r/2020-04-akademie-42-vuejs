import Vue from 'vue';
import Vuex from "vuex";
import App from './App.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        clicks: 0
    },
    mutations: {
        plus(state, { clicks }) {
            state.clicks += clicks;
        },
        plus2(state, payload) {
            state.clicks += payload.clicks;
        },
        minus(state) {
            state.clicks -= 1;
        }
    },
    actions: {
        increase({ commit }) {
            fetch('https://www.mocky.io/v2/5e96fb483000007500b6d9e8')
                .then(r => r.json())
                .then(data => {
                    if (data.clicks % 2 === 0) {
                        commit('plus', { clicks: 1 });
                    } else {
                        commit('minus', 1);
                    }
                });
        },
        // SSR({commit}, {ssr}) {
        //     if (ssr.address) {
        //         commit('SET_ADDRESS', {address: ssr.address});
        //     }
        // }
    }
});

// if (window.__NUXT__) {
//     store.dispatch('SSR', {ssr: window.__NUXT__})
// }

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
//    .$mount('#app');