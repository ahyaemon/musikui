import Musikui from "@/domain/Musikui"
import Paging from "@/value_object/Paging"

export interface MusikuiMgrState {
    files?: FileList
    musikuis: Musikui[]
    paging: Paging
}
