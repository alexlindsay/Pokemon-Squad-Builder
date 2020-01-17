import React, { Component } from "react";
import Question from "./components/Question";
import Pokemon from "./components/Pokemon";
import { pokemonApi, pokemonApiJsonConverter } from "./helpers/apiHelper";
import { stringHasher } from "./helpers/utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      questionIndex: 0
    };
  }

  questionAnsweredHandler = input => {
    // when user clicks submit, use there answer to generate a random number, pass that to pokemon API, update pokemon and question index
    console.log("SUBMIT CLICKED with state - ", this.state);
    console.log("SUBMIT - user input is ", input);
    const pokeNum = stringHasher(input);
    console.log("SUBMIT - user input hashed ", pokeNum);

    pokemonApi(pokeNum)
      .then(res => {
        const newPoke = pokemonApiJsonConverter(res.data);
        console.log("New poke is ", newPoke);
        this.setState(
          {
            pokemons: [...this.state.pokemons, newPoke],
            questionIndex: this.state.questionIndex + 1
          },
          () => {
            console.log("set state finished w/ state : ", this.state);
          }
        );
      })
      .catch(error => {
        console.log("ERROR getting pokemon - ", error);
      });
  };

  resetHandler = () => {
    console.log("Reset hit");
    this.setState({ pokemons: [], questionIndex: 0 });
  };

  render() {
    /* Use the pokemon list to create array of pokemon components */

    const pokemonList = this.state.pokemons.map(pokemon => {
      const { id, img, name } = pokemon;
      return <Pokemon id={id} img={img} name={name} key={id} />;
    });
    console.log("this state pokemons is ", this.state.pokemons);
    console.log("Pokemon list - ", pokemonList);

    return (
      <div className="flex flex-col h-screen bg-blue-200">
        {this.state.questionIndex > 0 && (
          <div className="rounded-sm w-24 h-12 bg-red-700 absolute top-0 right-0">
            <button
              className="w-full h-full text-center text-yellow-300"
              onClick={this.resetHandler}
            >
              RESET
            </button>
          </div>
        )}
        <h1 className="py-4 text-3xl text-center">
          Welcome to the World Class Pokémon Builder!
        </h1>

        {/* this will be a component for holding questions and user input */}
        <div className="flex flex-col items-center">
          <Question
            submit={this.questionAnsweredHandler}
            index={this.state.questionIndex}
          />
        </div>
        {/* Each pokemon container will be a separate pokemon component */}
        <div className="w-1/3 flex justify-center flex-wrap mx-auto mt-4">
          {pokemonList}
        </div>
      </div>
    );
  }
}

export default App;
