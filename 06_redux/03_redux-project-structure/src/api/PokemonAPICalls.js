export function callGetPokeminsAPI(url, params){
    const requestURL = url || "https://pokeapi.co/api/v2/pokemon";

    return async function getPokemons(dispatch, getState){
        const result = await fetch(requestURL).then(res => res.json());
        console.log("result : " + result);

        dispatch({type:GET_POKEMONS}.then)
    }
}