import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'
import styled from 'styled-components'


const H1List = styled.h1`
  color: #feda4a;
  font-size: 5em;
  font-family: 'Pathway Gothic One', sans-serif;
  letter-spacing: 4px;
  `

const ListDiv = styled.div`
  
  boder: 5% solid black;
  width: 20%;
  padding: 0.5%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.8;
  
`

const App = () => {
  const [data, setData] = useState({})

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

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
      <H1List className="Header">Characters</H1List>

      {Object.keys(data).map(key => (
        <ListDiv key={key}>{data[key].name}</ListDiv>
      ))
      }

      <Character />


    </div>
  );
}



export default App;
