const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1/glossaryApp')
.catch((error => console.log('error connecting to database')))

const glossarySchema = new mongoose.Schema({
  word: String,
  defintion: String
})

const Glossary = mongoose.model('Glossary', glossarySchema)

const getWords = (cb) => {
  Glossary.find({}).exec((err, results) => {
    if (err) {
      console.log(err, 'ERROR in getWords')
    }
    cb(null, results)})
}

module.exports = {
  getWords
}


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
