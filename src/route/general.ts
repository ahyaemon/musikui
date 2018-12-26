import GeneralView from "@/views/general/GeneralView.vue"
import NewContestView from "@/views/general/NewContestView.vue"
import OldContestView from "@/views/general/OldContestView.vue"
import HowView from "@/views/general/HowView.vue"
import WhatView from "@/views/general/how/WhatView.vue"
import DansaMagicView from "@/views/general/how/DansaMagicView.vue"
import SearchQuestionView from "@/views/general/SearchQuestionView.vue"
import SearchResultView from "@/views/general/SearchResultView.vue"
import ColumnView from "@/views/general/ColumnView.vue"
import AboutView from "@/views/general/AboutView.vue"
import ErrorView from "@/views/general/ErrorView.vue"

import mgr_route from "./mgr"

export default {
    path: "/",
    component: GeneralView,
    children: [
        { path: "", meta: { title: "今週の問題 | 虫食い算やろうぜ！！" }, component: NewContestView },
        { path: "how", meta: { title: "解き方 | 虫食い算やろうぜ！！" }, component: HowView },
        { path: "how/what", meta: { title: "虫食い算とは | 虫食い算やろうぜ！！" }, component: WhatView },
        { path: "how/dansa-magic", meta: { title: "桁数の段差マジック | 虫食い算やろうぜ！！" }, component: DansaMagicView },
        { path: "search-question", meta: { title: "検索 | 虫食い算やろうぜ！！" }, component: SearchQuestionView },
        { path: "search-result/:min_level/:max_level/:plus_selected/:multiple_selected/:divide_selected/:min_col/:max_col",
            meta: { title: "検索結果 | 虫食い算やろうぜ！！" }, component: SearchResultView },
        { path: "old-contest/:contest_id", meta: { title: "過去の問題 | 虫食い算やろうぜ！！" }, component: OldContestView },
        { path: "column", meta: { title: "コラム | 虫食い算やろうぜ！！" }, component: ColumnView },
        { path: "about", meta: { title: "About | 虫食い算やろうぜ！！" }, component: AboutView },
        { path: "error", meta: { title: "Error | 虫食い算やろうぜ！！" }, component: ErrorView },
    ],
}
