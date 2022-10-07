import React from "react";
import { render } from "react-dom";
import axios from "axios";
import Form from './components/form.jsx';

const {useState, useEffect} = React;

const sample = [{
  word: 'Sorin',
  definition: 'planeswalker from Innistrad'
},
{
  word: 'Avacyn',
  definition: 'created and painfully killed by sorin'
}]


const App = (props) => {

  const [entries, setEntries] = useState([])

  const getData = () => {
    axios.get('http://localhost:3000/glossary')
    .then((res) => {
      console.log(res.data)
      setEntries(res.data)
    })
    .catch((err) => console.log('ERROR with get requeset', err))
  }

  const addWord = (input) => {
    axios.post('http://localhost:3000/glossary', input)
    .then()
    .catch((err) => {console.log('ERROR with post request')})
    getData();
  }

  const deleteWord = (input) => {
    axios.delete('http://localhost:3000/glossary', {
      data: input
    })
    .then(() => getData())
    .catch((err) => {console.log('ERROR with delete request')})
  }

  const updateWord = (input) => {
    axios.put('http://localhost:3000/glossary', input)
    .then()
    .catch((err) => {console.log('ERROR with put request')})
  }

  useEffect(() => {
    getData();
  }, [])

  const deleteEntry = (entry) => {
    deleteWord(entry)
    console.log(`deleted ${entry}`)
  }

  return (
    <div>
      Glossary
      <Form addWord={addWord} entries={entries}/>
      <EntriesList entries={entries} deleteEntry={deleteEntry} />
    </div>
  )
}


const EntriesList = ({entries, deleteEntry}) => {

  return (
    entries.map((entry) => {
      return <EntryView entry={entry} deleteEntry={deleteEntry} key={entry._id}/>
    })
  )
}

const EntryView = ({ entry, deleteEntry }) => {

const [word, setWord] = useState(entry.word)
const [definition, setDefinition] = useState(entry.definition)

  function deleteWord(e) {
    e.preventDefault()
    let temp = {
      _id: entry._id
    };
    deleteEntry(temp);
  }

  return (
    <div >
      {word}: {definition}
      <button onClick={(e) => {deleteWord(e)}}>DELETE</button>
    </div>
  )
}

render(<App />, document.getElementById('root'))