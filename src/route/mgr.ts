import MgrView from "@/views/mgr/MgrView.vue"
import NewContestMgrView from "@/views/mgr/NewContestMgrView.vue"

export default {
    path: "/mgr",
    component: MgrView,
    children: [
        { path: "new-contest", meta: { title: "今週の問題 | 管理ページ" }, component: NewContestMgrView },
    ],
}

