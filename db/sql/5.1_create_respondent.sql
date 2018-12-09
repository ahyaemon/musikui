CREATE TABLE IF NOT EXISTS respondent(
    id INTEGER PRIMARY KEY,
    musikui_id INTEGER NOT NULL,
    name TEXT,
    comment TEXT,
    answer_datetime TEXT
)