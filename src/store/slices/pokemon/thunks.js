import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        //TODO; REALIZAR HTTP
        //    const resp = fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        //    const data = await (await resp).json();

        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    };
};
