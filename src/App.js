import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokedex from "./Pokedex.js";
import "./Pokecard.css";


/**
 * Renders a single Pokedex
 */
function App() {
  return (
    <div className="App">
      <Pokedex/>
    </div>
  );
}

export default App;
