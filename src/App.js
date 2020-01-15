import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>
          Welcome to the World Class Pokémon Builder!
        </h1>
        {/* this will be a component for holding questions and user input */}
        <h3 style={{'alignContent' : 'center'}}>Questions for user to answer HERE</h3>
        <p>User's pokemon will show up below vvv</p>
        {/* Each pokemon container will be a separate pokemon component */}
        <p>Pikachu        Blastoise        Charizard        Mewtwo</p>
    </div>
  );
}

export default App;
