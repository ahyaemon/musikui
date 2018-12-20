import MgrView from "@/views/mgr/MgrView.vue"
import NewContestMgrView from "@/views/mgr/NewContestMgrView.vue"
import DevelopMgrView from "@/views/mgr/DevelopMgrView.vue"
import MusikuiMgrView from "@/views/mgr/MusikuiMgrView.vue"

export default {
    path: "/mgr",
    component: MgrView,
    children: [
        { path: "new-contest", meta: { title: "今週の問題 | 管理ページ" }, component: NewContestMgrView },
        { path: "musikui", meta: { title: "Musikui | 管理ページ" }, component: MusikuiMgrView },
        { path: "develop", meta: { title: "開発 | 管理ページ" }, component: DevelopMgrView },
    ],
}
