import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'
import styled from 'styled-components'

const App = () => {
  const [data, setData] = useState({})
  const [currentCharacterId, setCurrentCharacterId] = useState(null)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const openDetails = name => {
    setCurrentCharacterId(name)
  }

  const closeDetails = () => {
    setCurrentCharacterId(null)
  }

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then((res) => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

      {Object.keys(data).map(char => (
        <div
          key={char.name}
          info={char}>
          {data[char].name}
        </div>
      ))
      }


      {
        <Character
          charactersId={currentCharacterId}
          close={closeDetails} />
      }
    </div>
  );
}

export default App;
