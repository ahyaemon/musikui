CREATE TABLE IF NOT EXISTS musikui (
    id INTEGER PRIMARY KEY,
    level INTEGER NOT NULL,
    comment TEXT,
    mark TEXT NOT NULL,
    formula TEXT NOT NULL,
    hissan_question TEXT NOT NULL,
    hissan_answer TEXT NOT NULL,
    nrow INTEGER NOT NULL,
    ncol INTEGER NOT NULL
)
