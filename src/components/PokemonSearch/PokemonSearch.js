import React from 'react'
import ReactLoading from 'react-loading'
import './PokemonSearch.css'

import Pokemon from '../Pokemon/Pokemon'

export default function PokemonSearch({ pokemon, IsLoading }) {
    return (
        <div className="pokemon__search-container">
            {IsLoading ?
            <ReactLoading type={"bars"} color={"white"} />
            :
            <Pokemon 
                key={pokemon.id}
                pokemon={pokemon}
            />
            }
        </div>
    )
}