import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import styled from "styled-components";
import DataContainer from "./DataContainer.js";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [rickAndMorty, setRickAndMorty] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response.data.results);
      setRickAndMorty(response.data.results);
    })
    .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {rickAndMorty.map(myDataObj => {
        return <DataContainer key={myDataObj.name} myData={myDataObj} />
      })}
    </div>
  );
}

export default App;
