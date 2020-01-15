import React, { Component } from 'react';
import './App.css';
import Question from './components/Question';
import Pokemon from "./components/Pokemon";
import {pokemonApi, pokemonApiJsonConverter} from './helpers/apiHelper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      questionIndex: 0
    }
  }

  questionAnsweredHandler = (input) => {
    // when user clicks submit, use there answer to generate a random number, pass that to pokemon API, update pokemon and question index
    console.log("SUBMIT CLICKED");
    const poke = {id: 4, name: 'Charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'};
    // const pokeList = [...this.state.pokemon];
    // pokeList.push(poke);
    this.setState({pokemon: [...this.state.pokemon, poke]})
  };

  randomNumberGenerator(input) {
    // randomly generate a number using this input somehow
  }

  render() {
    /* Use the pokemon list to create array of pokemon components */
    let pokemonList = this.state.pokemon.map(pokemon => {
        return <Pokemon id={pokemon.id} img={pokemon.img} name={pokemon.name}/>
    });
    console.log("Pokemon list - ", pokemonList)

    return (
        <div className="App">
          <h1>
            Welcome to the World Class Pokémon Builder!
          </h1>
          {/* this will be a component for holding questions and user input */}
          <Question submit={this.questionAnsweredHandler}/>
          <p>User's pokemon will show up below vvv</p>
          {/* Each pokemon container will be a separate pokemon component */}
          {pokemonList}
        </div>
    );
  }
}

export default App;
