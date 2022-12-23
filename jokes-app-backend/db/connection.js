import mysql from "mysql";

const db_conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "jokes_app",
});

export { db_conn };