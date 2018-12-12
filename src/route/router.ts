import Vue from "vue"
import Router from "vue-router"
import generalRouter from "./general"
import mgrRouter from "./mgr"

Vue.use(Router)

const routes = [
    mgrRouter,
    generalRouter,
]

export default new Router({ routes })
