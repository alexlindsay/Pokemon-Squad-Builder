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
      questionIndex: 0,
      pokeNum: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pokeNum !== this.state.pokeNum) {
      this.fetchPokemon(this.state.pokeNum);
    }
  }

  fetchPokemon(pokeNum) {
    pokemonApi(pokeNum)
      .then(res => {
        const newPoke = pokemonApiJsonConverter(res.data);
        this.setState({
          pokemons: [...this.state.pokemons, newPoke],
          questionIndex: this.state.questionIndex + 1
        });
      })
      .catch(error => {
        console.log("ERROR getting pokemon - ", error);
      });
  }

  questionAnsweredHandler = input => {
    const hashedPokeNum = stringHasher(input);
    this.setState({ pokeNum: hashedPokeNum });
  };

  resetHandler = () => {
    this.setState({ pokemons: [], questionIndex: 0 });
  };

  render() {
    const pokemonList = this.state.pokemons.map(pokemon => {
      const { id, img, name } = pokemon;
      return <Pokemon id={id} img={img} name={name} key={id} value={pokemon} />;
    });

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

        <div className="flex flex-col items-center">
          <Question
            submit={this.questionAnsweredHandler}
            index={this.state.questionIndex}
          />
        </div>

        <div className="w-1/3 flex justify-center flex-wrap mx-auto mt-4">
          {pokemonList}
        </div>
      </div>
    );
  }
}

export default App;
