import React from "react";

const { useState } = React;

const Form = ({ addWord, entries}) => {
  const [newWord, setNewWard] = useState();
  const [newDefinition, setNewDefinition] = useState();

  const addWordForm = (input) => {
    if (input.word.length === 0) {
      return;
    }
    // for (let i = 0; i < entries.length; i++) {
    //   let currWord = entries[i].word;
    //   if (currWord)
    // }
    addWord(input);
  }

  return (
    <form onSubmit={(e) => {
      // e.preventDefault()
      let wordDef = {
        word: e.target[0].value,
        definition: e.target[1].value
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
      <input type ='button' value="update" onClick={(e) => {console.log(e)}}/>
    </form>
  )
}

export default Form;