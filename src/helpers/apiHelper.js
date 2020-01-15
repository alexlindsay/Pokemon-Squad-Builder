import axios from 'axios';
const pokeBaseUrl = 'https://pokeapi.co/api/v2/pokemon';

export const pokemonApiJsonConverter = (json) => {
    // return cleaned up Pokemone JSON object
    // {id: int, img: url_str, name: str}
    return {}
};

/*
    calls pokemon api and returns promise with data
 */
export const pokemonApi = (id) => {
    return axios.get(`${pokeBaseUrl}/${id}`)
};

