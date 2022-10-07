const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1/glossaryApp')
.catch((error => console.log('error connecting to database')))

const glossarySchema = new mongoose.Schema({
  word: {
    unique: true,
    type: String
  },
  definition: String
})

const Glossary = mongoose.model('Glossary', glossarySchema)

const getWords = (cb) => {
  Glossary.find({}).sort({word: 1}).exec((err, results) => {
    if (err) {
      console.log(err, 'ERROR in getWords')
    }
    cb(null, results)})
}

const addWord = (input) => {
  Glossary.create(input)
  .catch((err) => console.log(err, 'UNIQUE VALUE'))
}

const deleteWord = (input) => {
  Glossary.deleteOne(input)
  .catch((err) => console.log(err, 'DID NOT DELETE'))
}

const updateWord = (filterObj, updateObj) => {
  Glossary.update(filterObj, {$set: updateObj})
  .catch((err) => console.log(err, 'DID NOT UPDATE'))
}

module.exports = {
  getWords,
  addWord,
  deleteWord,
  updateWord
}


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
