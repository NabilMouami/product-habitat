import mysql from "mysql"

export const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    password: "123456789",
    database: "habitathg"
})