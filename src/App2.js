import React, {useContext, useState} from "react";
import Question from "./components/Question2";
import Pokemon from "./components/Pokemon2";
import { pokemonApi, pokemonApiJsonConverter } from "./helpers/apiHelper";
import { stringHasher } from "./helpers/utils";
import Button from './components/Button';
import Layout from "./containers/Layout";
import CssContext from './context/CssContext';

const App2 = () => {
  const [pokemons, setPokemons] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [pokeNum, setPokeNum] = useState(null);
  const { styles } = useContext(CssContext);

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
        <Layout>
            <div className={styles.appStyle}>
                { questionIndex > 0 && (
                    <Button text="RESET" style={styles.topRightBtnStyle} clicked={resetHandler}/>
                )}
                <h1 className="py-4 text-3xl text-center">
                    Welcome to the World Class Pokémon Builder!
                </h1>

                <div className="flex flex-col items-center">
                    <Question
                        submit={questionAnsweredHandler}
                        index={questionIndex}
                    />
                </div>

                <div className={styles.listContainerStyle}>
                    {pokemonList}
                </div>
            </div>
        </Layout>
    );
}

export default App2;
