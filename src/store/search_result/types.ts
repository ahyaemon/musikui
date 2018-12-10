import SearchCondition from "@/domain/SearchCondition"
import MusikuiArticle from "@/domain/MusikuiArticle"

export interface SearchResultState {
    searched_condition: SearchCondition
    musikui_articles: MusikuiArticle[]
}
