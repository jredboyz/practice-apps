const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: false });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name CHAR(30),
        email CHAR(30),
        password CHAR(30),
        address CHAR(30),
        city CHAR(30),
        state CHAR(30),
        zipCode INT,
        phoneNumber INT,
        creditCard INT,
        ExpDate CHAR(30),
        cvv INT,
        billingZip INT)`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
