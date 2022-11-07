import mysql from "mysql"

export const db = mysql.createConnection({
    user: "habitate_admin",
    host: "127.0.0.1",
    password: "Habitat@dmin22",
    database: "habitathg"
})
