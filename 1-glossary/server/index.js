require("dotenv").config();
const express = require("express");
const path = require("path");
const {getWords, addWord} = require("./db.js")
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
let test = {word: 'car', defintion: 'my whip'}
app.post('/glossary', (req, res) => {
  addWord(test);
  res.status(201).send();
})



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
