#! coding: utf-8
import json

def create_divide(ncol):
    space = {"ct": 0}
    hide = {"ct": 5}
    divide = {"ct": 4}
    bar = {"ct": 7}
    zero = {"ct": 1, "v": 0}

    row1 = [space, space] + [hide for x in range(ncol - 2)]
    row2 = [space, space] + [bar for x in range(ncol - 2)]
    row3 = [hide, divide] + [hide for x in range(ncol - 2)]
    row4 = [space, space] + [hide for x in range(ncol - 2)]
    row5 = [space, space] + [hide for x in range(ncol - 2)]
    row6 = [space for x in range(ncol - 1)] + [zero]
    hissan = [row1, row2, row3, row4, row5, row6]
    return json.dumps(hissan)

def create_multiple(ncol):
    space = {"ct": 0}
    hide = {"ct": 5}
    multiple = {"ct": 3}
    bar = {"ct": 7}

    row1 = [space] + [hide for x in range(ncol - 1)]
    row2 = [multiple] + [hide for x in range(ncol - 1)]
    row3 = [bar for x in range(ncol)]
    row4 = [hide for x in range(ncol)]
    hissan = [row1, row2, row3, row4]

    return json.dumps(hissan)

def create_insert(icol, id_start, mark, mark_fn):
    sql = ""

    id = id_start + icol
    level = 1
    comment = "col: " + str(icol)
    formula = '{"lefts":{1, 1}, "right":1}'
    hissan_question = mark_fn(icol)
    hissan_answer = mark_fn(icol)
    nrow = 4
    ncol = icol

    li = [str(id), str(level), comment, mark, formula, hissan_question, hissan_answer, str(nrow), str(ncol)]
    li = ["'{x}'".format(x = x) for x in li]
    join = ", ".join(li)
    sql += "  ({join})".format(join = join)

    return sql

def create_sql() :
    sql = "INSERT INTO musikui\n"
    sql += "  (id, level, comment, mark, formula, hissan_question, hissan_answer, nrow, ncol)\n"
    sql += "VALUES\n"

    # 掛け算
    for icol in range(2, 51):
        insert_row = create_insert(icol, 10000, "multiple", create_multiple)
        sql += insert_row
        sql += ",\n"

    # 割り算
    for icol in range(4, 51):
        insert_row = create_insert(icol, 10050, "divide", create_divide)
        sql += insert_row
        if icol <= 49:
            sql += ",\n"
        else:
            sql += "\n"

    return sql


if __name__ == "__main__":
    sample_path = "sample/insert.sql"
    sql = create_sql()
    open(sample_path, "w").write(sql)
