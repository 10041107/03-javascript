const PokemonCard = ({pokemon}) =>{
    return(
        <>
        <h3>포켓몬 이름 : {pokemon.name}</h3>
        <p> <a href={pokemon.url}>상세보기 url : {pokemon.url}</a></p>
        </>
    );
}
export default PokemonCard;