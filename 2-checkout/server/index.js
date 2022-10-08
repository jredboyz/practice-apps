require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();


// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json())


app.get('/checkout', (req, res) => {
  db.queryAsync(`SELECT * FROM responses`)
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => console.log(err))
  // (err, results) => {
    // if (err) {console.log(err, 'ERROR - get request')}
    // res.status(200).send(results)
  // })
})

app.post('/checkout', (req, res) => {
  const { name, email, password, address, city, state, zipCode, phoneNumber, creditCard, ExpDate, cvv, billingZip } = req.body;
  console.log(name, "NAMEEEEEE")
  const values = [name, email, password, address, city, state, zipCode, phoneNumber, creditCard, ExpDate, cvv, billingZip]
  //bookmark for the TA
  db.query(`INSERT INTO responses (name, email, password, address, city, state, zipCode, phoneNumber, creditCard, ExpDate, cvv, billingZip)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, values, (err, results) => {
    if (err) {
      console.log('ERROR - post request', err )
      res.send(404)
    } else {
      res.status(201).send('Added to database')
    }
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
