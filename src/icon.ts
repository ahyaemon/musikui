import Vue from "vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faDove } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

export default (): void => {
    library.add(faDove)
    Vue.component("fas", FontAwesomeIcon as any)
}

