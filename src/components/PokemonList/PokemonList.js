import React, {useState, useEffect} from 'react'
import "./PokemonList.css"

const PokemonList = () => {

    let [pokemonsApi, setPokemonsApi] = useState([]);
    let [pokemon, setPokemon] = useState([]);
    let [estaCargando, setEstaCargando] = useState(true);
    let [actualOffset, setActualOffset] = useState(0);

    const pokeUrlArray = [];


    useEffect(() => {         
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${actualOffset}`)
    .then ((response) => response.json())
    .then((data) => setPokemonsApi(
        data.results.map((item) => {
            fetch(item.url)
            .then((response) => response.json())
            .then((allPokemons) => pokeUrlArray.push(allPokemons))
            return (setPokemon(pokeUrlArray))
            
        }),
        ));
    }, [actualOffset]);

    
    let nextButton = () => {
        if (actualOffset < 1075){
            setActualOffset(actualOffset+43);
            setEstaCargando(true)
        }
    }

    let prevButton = () => {
        if (actualOffset >= 43) {
            setActualOffset(actualOffset-43);
            setEstaCargando(true)
        }

    }

    setTimeout(() => {
        setEstaCargando(false);
        }, 1000);

    return (
        <div className='listPokemon'>
            <h1 className='titleHeader'>POKEMON LIST</h1>
            <button className='pageButton' onClick={prevButton}>Previous</button>
            <button className='pageButton' onClick={nextButton}>Next</button>

            <div className='pokemonGallery'>
                {estaCargando ? (
                    <img className='pokeballImage' src='https://c.tenor.com/Hg2Mb_mQdhYAAAAi/pokemon-pokeball.gif' alt='Loading' />
                ) : (
                    pokemon.map ((pokemon, i) => (
                        <div id={pokemon.id} key={pokemon.id}>

                            <div className='card'>
                                <h5 className='pokemonName'>{pokemon.name}</h5>
                                <img className='pokeImage' src={pokemon.sprites.front_default} alt={pokemon.name} />
                                <h6>Type: {pokemon.types[0].type.name}</h6>  
                            </div>

                        </div>
                    ))
                )}
            </div>
            
                
            
        </div>
    )
};

export default PokemonList;
