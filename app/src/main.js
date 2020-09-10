import Vue from 'vue'
import App from './App.vue'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from "vue-router";

import VueAxios from 'vue-axios'
import axios from 'axios'
import Posts from "@/components/Posts";
import ViewPost from "@/components/CRUD/EditPost";
import NotFound from "@/components/NotFound";
import IndexPage from "@/components/IndexPage";
import CreatePost from "@/components/CRUD/CreatePost";

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/", component: IndexPage },
        { path: "/posts", component: Posts },
        { path: "/edit/:id", component: ViewPost },
        { path: "/create", component: CreatePost },
        { path: "*", component: NotFound }
    ],
    mode: "history"
})



new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
