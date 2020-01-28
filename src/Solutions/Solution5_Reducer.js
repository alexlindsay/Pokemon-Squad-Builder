import React, {useEffect, useContext, useReducer} from "react";
import Question from "./components/Question2";
import Pokemon from "./components/Pokemon2";
import { pokemonApi, pokemonApiJsonConverter } from "../helpers/apiHelper";
import { stringHasher } from "../helpers/utils";
import Button from '../components/Button';
import Loader from "../components/Loader";
import CssContext from '../context/CssContext';

const initialState = {
    pokemons: [],
    questionIndex: 0,
    pokeNum: null,
    loading: false,
    darkMode: false
};

function reducer(state, action) {
    switch (action.type) {
        case 'questionAnswered':
            const hashedPokeNum = stringHasher(action.payload);
            return {...state, pokeNum: hashedPokeNum, loading: true};
        case 'pokemonFetched':
            return {...state, pokemons: [...state.pokemons, action.payload], loading: false, questionIndex: state.questionIndex+1};
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {pokemons, questionIndex, pokeNum, loading} = state;
    const { styles, darkMode, toggleDarkMode } = useContext(CssContext);


    useEffect(() => {
        if (pokeNum !== null) {
            fetchPokemon(pokeNum);
        }
    }, [pokeNum]);

    const questionAnsweredHandler = input => {
        const action = {
            type: 'questionAnswered',
            payload: input
        };
        dispatch(action);
    };

    const fetchPokemon = pokeNum => {
        pokemonApi(pokeNum)
            .then(res => {
                const newPoke = pokemonApiJsonConverter(res.data);
                const action = {
                    type: 'pokemonFetched',
                    payload: newPoke
                };
                dispatch(action);
            })
            .catch(error => {
                console.log("ERROR getting pokemon - ", error);
            });
    };

    const resetHandler = () => {
        dispatch({
            type: 'reset'
        })
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
                    {loading ? <Loader/> : pokemonList}
                </div>
            </div>
        </div>
    );
};

export default App;
