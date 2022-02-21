import React from 'react';
import './SearchResults.css';
import { useState } from "react";
import Axios from "axios";
import { useContext } from 'react';
import { SearchContext } from '../SearchContext/SearchContext';
import { useEffect } from 'react';


const SearchResults = () => {

    const { searchInput, enterPressed, setEnterPressed } = useContext(SearchContext)
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonChosen, setPokemonChosen] = useState(false);
    const [pokemon, setPokemon] = useState(
      {  
          name: "",
          number: "",
          species: "",
          image: "",
          hp: "",
          attack: "",
          defense: "",
          speed: "",
          type: "",
        }
    );
  
useEffect(() => {
  setPokemonName(searchInput) 
},[searchInput])

useEffect(() => {
  if (enterPressed === true){
    searchPokemon()
    setEnterPressed(false) 
  }
},[enterPressed])
  
    const searchPokemon = () => {
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        setPokemon({
          name: pokemonName,
          number: res.data.id,
          species: res.data.species.name,
          image: res.data.sprites.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
          type: res.data.types[0].type.name
        });
        setPokemonChosen(true)
      })
    }
  
    return (
      <div className="searchResults">
      
        <div className="TitleSection">
        <h1 className='titleHeader'>POKEDEX</h1>
          <input className='searchInput' type="text"
          onChange={(event) => {
            setPokemonName(event.target.value || {searchInput})
          }}
          value={pokemonName.toLowerCase()} />
          <div>
            {pokemonName && <button className='searchButton' onClick={searchPokemon}>Search Pokemon</button>}
          </div>

          <div className="DisplaySection">
          {!pokemonChosen ? (
            <h2> Please choose a Pokemon </h2>
          ) : (
            <div className='searchCard'>
              <div>
                <h2 className='pokemonName'>{pokemon.name}</h2>
                <img src={pokemon.image} alt={pokemon.name} />
              </div>
              <div className='dataPokemon'>
                <h4>Number: #{pokemon.number}</h4>
                <h4>Species: {pokemon.species}</h4>
                <h4>Type: {pokemon.type}</h4>
                <h4>Hp: {pokemon.hp}</h4>
                <h4>Attack: {pokemon.attack}</h4>
                <h4>Defense: {pokemon.defense}</h4>
                <h4>Speed: {pokemon.speed}</h4>
              </div>

            </div>
            
          )}
        </div>

        </div>
  

        
      </div>
    );
  };

export default SearchResults;

