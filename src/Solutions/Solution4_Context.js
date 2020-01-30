import React, {useEffect, useContext, useState} from "react";
import Question from "./components/Question2";
import Pokemon from "./components/Pokemon2";
import { pokemonApi, pokemonApiJsonConverter } from "../helpers/apiHelper";
import { stringHasher } from "../helpers/utils";
import Button from '../components/Button';
import CssContext from '../context/CssContext';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [pokeNum, setPokeNum] = useState(null);
  const { styles, darkMode, toggleDarkMode } = useContext(CssContext);

  useEffect(() => {
    if (pokeNum !== null) {
      fetchPokemon(pokeNum);
    }
  }, [pokeNum]);

  const questionAnsweredHandler = input => {
    const hashedPokeNum = stringHasher(input);
    setPokeNum(hashedPokeNum);
  };

  const fetchPokemon = pokeNum => {
    pokemonApi(pokeNum)
        .then(res => {
            const newPoke = pokemonApiJsonConverter(res.data);
            setPokemons([...pokemons, newPoke]);
            setQuestionIndex(questionIndex + 1);
        })
        .catch(error => {
            console.log("ERROR getting pokemon - ", error);
        });
  };

  const resetHandler = () => {
    setPokemons([]);
    setQuestionIndex(0);
  };

  const pokemonList = pokemons.map(pokemon => {
    const { id, img, name } = pokemon;
    return <Pokemon id={id} img={img} name={name} key={id} value={pokemon} />;
  });


    return (
        <div>
            <div className={styles.appStyle}>
                <Button text={darkMode ? "Color Mode" : "Dark Mode"} style={styles.topLeftBtnStyle} clicked={toggleDarkMode}/>
                { questionIndex > 0 && (
                    <Button text="RESET" style={styles.topRightBtnStyle} clicked={resetHandler}/>
                )}
                <h1 className={styles.titleStyle}>
                    Welcome to the World Class Pokémon Builder!
                </h1>

                <div className={styles.columnCenterContainer}>
                    <Question
                        submit={questionAnsweredHandler}
                        index={questionIndex}
                    />
                </div>

                <div className={styles.listContainerStyle}>
                    {pokemonList}
                </div>
            </div>
        </div>
    );
}

export default App;
