require("dotenv").config();
const express = require("express");
const path = require("path");
const {getWords, addWord, deleteWord, updateWord} = require("./db.js")
const cors = require("cors")
const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.get('/glossary', (req, res) => {
  getWords((err, result) => {
    if (err) {
      console.log(err, 'ERROR getting words')
    }
    res.send(result);
  })
})

app.post('/glossary', (req, res) => {
  addWord(req.body);
  res.status(201).send();
})

app.delete('/glossary', (req, res) => {
  deleteWord(req.body)
  res.status(201).send();
})

app.put('/glossary', (req, res) => {
  console.log(req.body, 'REQ OBJ')
  updateWord(req.body.filter, req.body.update)
  res.status(201).send()
})



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
