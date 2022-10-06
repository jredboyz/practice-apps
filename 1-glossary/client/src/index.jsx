import React from "react";
import { render } from "react-dom";

const {useState, useEffect} = React;

const sample = [{
  word: 'Sorin',
  definition: 'planeswalker from Innistrad'
},
{
  word: 'Avacyn',
  definition: 'created and painfully killed by sorin'
}]

const App = () => {
  const [entries, setEntries] = useState(sample)
  return (
    <div>
      hello World
      <Form />
      <EntriesList entries={entries}/>
    </div>
  )
}

const Form = () => {
  const [newWord, setNewWard] = useState();
  const [newDefinition, setNewDefinition] = useState();

  const addWordForm = (input) => {
    console.log(input)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      let wordDef = {
        word: e.target[0].value,
        defintion: e.target[1].value
      }
      addWordForm(wordDef)}}>
      <input type='text' placeholder='Add to glossary' value={newWord}
      onChange={(e) => {
        console.log(e.target.value)
      }}/>
        <p/>
      <input type='text' placeholder='Add definition' value={newDefinition}
      onChange={(e) => {
        console.log(e.target.value)
      }}/>
        <p/>
      <input type ='submit' value='Submit' />
    </form>
  )
}

const EntriesList = ({ entries }) => {
  return (
    entries.map((entry) => {
      return <EntryView entry={entry}/>
    })
  )
}

const EntryView = ({ entry }) => {
  return (
    <div>{entry.word}: {entry.definition}</div>
  )
}

render(<App />, document.getElementById('root'))