const mysql = require("mysql");

const default_config = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db",
}

const connection = mysql.createConnection(process.env.JAWSDB_URL || default_config);

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
