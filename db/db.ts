import mysql from 'mysql2/promise';

//export SQL with mysqldump -u root -p cp --single-transaction > db/sql/cp.sql
//import SQL with mysql -u root -p cp < db/sql/cp.sql
//or, in mysql, USE cp; SOURCE db/sql/cp.sql

export const pool = mysql.createPool({
    host: process.env.DB_Host,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    multipleStatements: true,
});
