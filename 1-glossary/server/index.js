require("dotenv").config();
const express = require("express");
const path = require("path");
const {getWords} = require("./db.js")
const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get('/glossary', (req, res) => {
  getWords((err, result) => {
    if (err) {
      console.log(err, 'ERROR getting words')
    }
    res.send(result);
  })
})

app.post('/glossary', (req, res) => {
  // addWord()
  res.status(201).send('POST')
})



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
