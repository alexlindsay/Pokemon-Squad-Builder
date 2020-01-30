import React, {useEffect, useState} from "react";
import Question from "../Solutions/components/Question2";
import Pokemon from "../Solutions/components/Pokemon2";
import { pokemonApi, pokemonApiJsonConverter } from "../helpers/apiHelper";
import { stringHasher } from "../helpers/utils";
import Button from '../components/Button';

const App = () => {
    const [pokemons, setPokemons] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [pokeNum, setPokeNum] = useState(null);

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
            <div className="flex flex-col h-screen bg-blue-200">
                { questionIndex > 0 && (
                    <div className="rounded-sm w-24 h-12 bg-red-700 absolute top-0 right-0">
                        <Button text="RESET" style={"w-full h-full text-center text-yellow-300"} clicked={resetHandler}/>
                    </div>
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

                <div className="w-1/3 flex justify-center flex-wrap mx-auto mt-4">
                    {pokemonList}
                </div>
            </div>
        </div>
    );
};

export default App;
