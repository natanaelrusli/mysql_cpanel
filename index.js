const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "natanaelrusli.com:3306",
  user: "	natanae1_mysql_admin",
  password: "Jicax-63",
  database: "natanae1_mysql_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to the database as ID " + connection.threadId);
});
