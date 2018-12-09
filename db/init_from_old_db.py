#! coding: utf-8
import sqlite3
import os
import glob
from collections import OrderedDict
import json
from pyquery import PyQuery as pq
import codecs

# TODO 最新のコンテストをcurrentに設定するように

# Space = 0,
# Number = 1,
# Plus = 2,
# Multiple = 3,
# Divide = 4,
# Hide = 5,
# Hukumen = 6,
# Bar = 7
def to_hissan(table):
    rows = []
    trs = pq(table, parser="html").find("tr")
    for tr in trs:
        cells = []
        tds = pq(tr, parser="html").find("td")
        for td in tds:
            clazz = pq(td).attr("class")
            text = pq(td).text()
            children = pq(td).children()

            if text == "":
                if clazz != None:
                    if "wari" in clazz:
                        cell = { "ct": 4 }
                    elif "bar" in clazz:
                        if "white" in clazz:
                            cell = { "ct": 0 }
                        else:
                            cell = { "ct": 7 }
                elif len(children) > 0:
                    cell = { "ct": 5 }
                else:
                    cell = { "ct": 0 }
            else:
                if text in ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]:
                    cell = { "ct": 1, "v": text }
                elif text == u"＋":
                    cell = { "ct": 2 }
                elif text == u"×":
                    cell = { "ct": 3 }
                else:
                    cell = { "ct": 6, "v": text }
            cells += [cell]
        rows += [cells]
    return json.dumps(rows)


def from_type_to_mark(musikui_type):
    if musikui_type == "tasi":
        return "plus"
    elif musikui_type == "kake":
        return "multiple"
    elif musikui_type == "wari":
        return "divide"
    else:
        return "unknown"


def to_formula(left, right):
    lefts = left.split("\t")
    od = OrderedDict(right = right, lefts = lefts)
    return json.dumps(od)


def first(res):
    return [x[0] for x in res][0]


def get_comment(date):
    top_path =  "musikui_ver5_resource/top/" + date + ".txt"
    if not os.path.exists(top_path):
        return ""

    top = codecs.open(top_path, "r", "utf-8").read().strip()
    comment = top.split("<hr>")[0]
    sp = comment.split("\n")
    comment = "\n".join(sp[1:len(sp)])

    return comment


def to_date(row_date):
    return row_date.replace(" / ", "/").replace(": ", ":").replace("-", "/")


# date: yyyyMMdd
# return: yyyy/MM/dd
def format_date(date):
    return date[0:4] + "/" + date[4:6] + "/" + date[6:8]


# 与えられたcontest_dateを元に、新DBにINSERTしていく
# 1. publish_date
#    ここで、dateとpublish_date_idを紐づける
# 2. musikui
# 3. new_question
#    publish_date_idを使用する
# 4. new_question_musikui
#    new_question_idと、musikui_idを紐づける
# 5. respondent
#    musikui_idと紐づける
def insert_new_db(old_cur, new_cur, contest_date):
    # contest
    comment = get_comment(contest_date)
    formatted_date = format_date(contest_date)
    args = (formatted_date, comment,)
    contest_insert_sql = "INSERT INTO contest (date, comment) VALUES (?, ?)"
    new_cur.execute(contest_insert_sql, args)

    contest_select_sql = new_cur.execute("SELECT id FROM contest WHERE date = ?", (formatted_date,))
    contest_id = first(contest_select_sql)
    print(formatted_date + ": " + str(contest_id))

    # musikui
    musikui_select_sql = "SELECT * FROM musikui WHERE date = " + contest_date + " ORDER BY kind ASC"
    musikui_select_result = old_cur.execute(musikui_select_sql)
    musikui_ids = []
    for record in musikui_select_result:
        level = record[3]
        comment = record[8]
        mark = from_type_to_mark(record[1])
        formula = to_formula(record[6], record[7])
        hissan_question = to_hissan(record[4])
        hissan_answer = to_hissan(record[5])
        nrow = record[9]
        ncol = record[10]

        musikui_insert_sql = "INSERT INTO musikui (level, comment, mark, formula, hissan_question, hissan_answer, nrow, ncol) VALUES (?,?,?,?,?,?,?,?)"
        args = (level, comment, mark, formula, hissan_question, hissan_answer, nrow, ncol)
        new_cur.execute(musikui_insert_sql, args)

        musikui_select_sql = "SELECT id FROM musikui WHERE formula = ?"
        musikui_id = new_cur.execute(musikui_select_sql, (formula,))
        musikui_ids += [first(musikui_id)]

    # contest_musikui
    for (idx, musikui_id) in enumerate(musikui_ids):
        args = (contest_id, musikui_id, str(idx + 1))
        contest_musikui_insert_sql = "INSERT INTO contest_musikui (contest_id, musikui_id, question_number) VALUES (?, ?, ?)"
        new_cur.execute(contest_musikui_insert_sql, args)

    # respondent
    respondent_paths = glob.glob("musikui_ver5_resource/respondent/" + contest_date + "*")
    for respondent_path in respondent_paths:
        respondent = codecs.open(respondent_path, "r", "utf-8").read()

        # BOMの考慮が面倒くさいため適当
        if len(respondent) < 10:
            continue

        question_number = os.path.basename(respondent_path).replace(".txt", "").split("_")[1]
        question_index = int(question_number) - 1
        if len(musikui_ids) <= question_index:
            continue

        musikui_id = musikui_ids[int(question_number) - 1]

        for line in respondent.split("\n"):
            sp = line.split("\t")

            if len(sp) <= 1:
                continue
            if len(sp) <= 2:
                name = u"名無し"
                row_date = sp[0]
                comment = sp[1].strip()
            else:
                name = sp[0]
                row_date = sp[1]
                comment = sp[2].strip()

            date = to_date(row_date)
            args = (musikui_id, name, comment, date,)
            respondent_insert_sql = "INSERT INTO respondent (musikui_id, name, comment, answer_datetime) VALUES (?, ?, ?, ?)"
            new_cur.execute(respondent_insert_sql, args)


def create_new_db(old_cur, new_cur):
    # 過去の開催日付を重複無しで取得する
    contest_dates = old_cur.execute("SELECT DISTINCT DATE FROM  musikui ORDER BY date")
    contest_dates = [x[0] for x in contest_dates] # タプルの展開

    for contest_date in contest_dates:
        insert_new_db(old_cur, new_cur, contest_date)


def create_table(cur):
    sql_paths = glob.glob("sql/*_create_*.sql")
    for sql_path in sql_paths:
        sql = open(sql_path, "r").read()
        cur.execute(sql)


if __name__ == "__main__":
    old_db_path = "musikui_ver5_resource/db/musikui.db"
    new_db_path = "../dest/resources/db/musikui.db"

    # 新DBがすでに存在していたら消す
    if os.path.exists(new_db_path):
        os.remove(new_db_path)

    # 新DBのテーブルを作成
    new_con = sqlite3.connect(new_db_path)
    new_cur = new_con.cursor()
    create_table(new_cur)

    # 旧情報から新DBを構築
    old_con = sqlite3.connect(old_db_path)
    old_cur = old_con.cursor()
    create_new_db(old_cur, new_cur)

    # おわり
    old_con.close()
    new_con.commit()
    new_con.close()