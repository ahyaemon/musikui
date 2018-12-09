#! coding: utf-8

import glob
import sqlite3
import os
import codecs

if __name__=="__main__":
    db_path = "../../dest/resources/db/musikui.db"

    # DBがすでに存在していたら消す
    if os.path.exists(db_path):
        os.remove(db_path)

    con = sqlite3.connect(db_path)
    cur = con.cursor()

    paths_sql = glob.glob("./sql/*")
    for path_sql in paths_sql:
        print(path_sql)
        sql = codecs.open(path_sql, "r", encoding="utf-8").read()
        cur.execute(sql)

    con.commit()
    con.close()