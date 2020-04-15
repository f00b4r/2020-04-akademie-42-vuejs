import './front/styles.scss';

import Vue from 'vue';
import App from './front/App.vue';

const router = new VueRouter({
    routes: [
        { path: '/foo', component:  () => import('./Foo.vue') },
        { path: '/bar', component:  () => import('./Bar.vue') },
        { path: '/bar', component:  {
            sidebar: S,
            content: C
        } }
    ]
})

// <router-view></router-view>

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});