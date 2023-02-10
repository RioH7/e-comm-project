import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import HomeComp from './components/HomeComp.vue';
import LoginComp from './components/LoginComp.vue';
import RegisterComp from './components/RegisterComp.vue';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {path: '/', component: HomeComp, name: "home"},
        {path: '/login', component: LoginComp, name: 'login'},
        {path: '/register', component: RegisterComp, name: "register"},
    ]
})

createApp(App).use(router).mount('#app')
