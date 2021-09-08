var mysql = require('mysql');

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

let connect = () => {
    connection.connect((err) => {
        if (err) {
            console.log("database connection failed. exiting now...");
            console.error(err);
            process.exit(1);
        }
        console.log('Successfully connected to database');
    })
};

module.exports = {
    connect,
    connection
}