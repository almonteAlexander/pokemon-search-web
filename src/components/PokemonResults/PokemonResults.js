import React from 'react'
import ReactLoading from 'react-loading'
import { Button } from '@material-ui/core'
import { prevPokemons, nextPokemons } from '../../services/pokemon__services'
import './PokemonResults.css'

import Pokemon from '../Pokemon/Pokemon'

export default function PokemonResults({ 
    setPokemonList,
    PokemonList, 
    Prev,
    Next,
    IsLoading,
    setIsLoading}) {
    
    const { PrevUrl, setPrevUrl } = Prev;
    const { NextUrl, setNextUrl } = Next;

    let handlePrevResults = async () => {
        if(!PrevUrl) return;
        setIsLoading(true);
        await prevPokemons(PrevUrl, setPokemonList, setPrevUrl, setNextUrl);
        setIsLoading(false);
    }

    let handleNextResults = async () => {
        if(!NextUrl) return;
        setIsLoading(true);
        await nextPokemons(NextUrl, setPokemonList, setPrevUrl, setNextUrl);
        setIsLoading(false);
    }

    return (
        <div className="results__container">

            {!IsLoading &&
            <div className="results__controller">
                <Button className="results__prev-button"
                onClick={e => handlePrevResults()}>
                    PREV
                </Button>

                <Button className="results__next-button"
                onClick={e => handleNextResults()}>
                    NEXT
                </Button>
            </div>
            }

            {IsLoading ? 
            <ReactLoading type={"bars"} color={"white"} />
            :
            PokemonList.map(pokemon => (
                <Pokemon 
                key={pokemon.id}
                pokemon={pokemon}
                />
                )
            )}

            {!IsLoading &&
            <div className="results__controller">
                <Button className="results__prev-button"
                onClick={e => handlePrevResults()}>
                    PREV
                </Button>

                <Button className="results__next-button"
                onClick={e => handleNextResults()}>
                    NEXT
                </Button>
            </div>
            }
        </div>
    )
}