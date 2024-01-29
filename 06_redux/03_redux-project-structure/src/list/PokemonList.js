import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { callGetPokeminsAPI } from "../api/PokemonAPICalls";
import PokemonCard from "../items/PokemonCard";

const PokemonList =() =>{
    const result = useSelector(state => state.pokemonRender);

    console.log("pokemon : " + result);

    const pokemon = result.results;
    console.log("pokemons result : "+pokemon);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(callGetPokeminsAPI())
    }, []);

    return(
        pokemon &&(
            <>
            <h3>총 포켓몬 수 : {result.count} </h3>
            <button onClick={() => dispatch(callGetPokeminsAPI(result.prev))}>이전</button>
            <button onClick={() => dispatch(callGetPokeminsAPI(result.next))}>다음</button>
            {pokemon.map(pokemon => <PokemonCard key = {pokemon.url} pokemon={pokemon}/>)}
            </>
        )
    );
}
export default PokemonList;