import Vue from "vue"
import Router from "vue-router"
import Main from "./Main.vue"
import MainChildIndex from "./MainChildIndex.vue"
import MainChildSecond from "./MainChildSecond.vue"
import Mgr from "./Mgr.vue"
import MgrChildIndex from "./MgrChildIndex.vue"
import MgrChildSecond from "./MgrChildSecond.vue"
import TopLevel from "./TopLevel.vue"
Vue.use(Router)

const routes = [
    { path: "/", component: Main, children: [
        { path: "/", name: "main1", component: MainChildIndex},
        { path: "/second", name: "main2", component: MainChildSecond },

    ]},
    { path: "/mgr", component: Mgr, children: [
        { path: "", name: "mgr1", component: MgrChildIndex},
        { path: "second", name: "mgr2", component: MgrChildSecond },

    ]},
]

export default new Router({ routes })
