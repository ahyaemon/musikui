import Vue from "vue"
import Router from "vue-router"
import generalRouter from "./general"
import mgrRouter from "./mgr"
import LoginView from "@/views/mgr/LoginView.vue"

Vue.use(Router)

const routes = [
    { path: "/mgr-login", meta: { title: "ログイン | 虫食い算やろうぜ！！" }, component: LoginView },
    mgrRouter,
    generalRouter,
]

export default new Router({ routes })
