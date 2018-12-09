import GeneralView from "../views/general/GeneralView.vue"
import NewContestView from "../views/general/NewContestView.vue"

export default {
    path: "/",
    component: GeneralView,
    children: [
        { path: "/", meta: { title: "今週の問題 | 虫食い算管理ページ" }, component: NewContestView },
    ],
}
