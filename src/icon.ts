import Vue from "vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faDove, faEdit, faCompactDisc } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

export default (): void => {
    library.add(
        faDove,
        faEdit,
        faCompactDisc,
    )
    Vue.component("fas", FontAwesomeIcon as any)
}

