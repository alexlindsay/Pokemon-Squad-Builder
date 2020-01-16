import React, { Component } from 'react';
import './App.css';
import Question from './components/Question';
import Pokemon from "./components/Pokemon";
import {pokemonApi, pokemonApiJsonConverter} from './helpers/apiHelper';
import {stringHasher} from './helpers/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      questionIndex: 0
    }
  }

  questionAnsweredHandler = (input) => {
    // when user clicks submit, use there answer to generate a random number, pass that to pokemon API, update pokemon and question index
    console.log("SUBMIT CLICKED with state - ", this.state);
    console.log("SUBMIT - user input is ", input)
    const pokeNum = stringHasher(input);
    console.log("SUBMIT - user input hashed ", pokeNum)

      pokemonApi(pokeNum)
        .then(res => {
            const newPoke = pokemonApiJsonConverter(res.data)
            console.log("New poke is ", newPoke)
            this.setState({pokemons: [...this.state.pokemons, newPoke], questionIndex: this.state.questionIndex + 1}, () => {
                console.log('set state finished w/ state : ', this.state);
            });
        })
        .catch(error => {
            console.log("ERROR getting pokemon - ", error);
        });
  };

  resetHandler = () => {
      console.log("Reset hit");
      this.setState({pokemons: [], questionIndex: 0});
  };

  render() {
    /* Use the pokemon list to create array of pokemon components */
    let pokemonList = this.state.pokemons.map(pokemon => {
        return <Pokemon id={pokemon.id} img={pokemon.img} name={pokemon.name} key={pokemon.id}/>
    });
    console.log("this state pokemons is ", this.state.pokemons)
    console.log("Pokemon list - ", pokemonList)

    return (
        <div className="App">
          <h1>
            Welcome to the World Class Pokémon Builder!
          </h1>
          {this.state.questionIndex > 0 ? <button onClick={this.resetHandler}>RESET</button> : null}
          {/* this will be a component for holding questions and user input */}
          <Question submit={this.questionAnsweredHandler} index={this.state.questionIndex}/>
          <p>User's pokemon will show up below vvv</p>
          {/* Each pokemon container will be a separate pokemon component */}
          {pokemonList}
        </div>
    );
  }
}

export default App;
