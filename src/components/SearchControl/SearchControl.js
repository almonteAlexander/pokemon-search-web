import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { ReactComponent as LoupeLogo } from '../../img/loupe__logo.svg'
import { Button } from '@material-ui/core'
import { 
getAllPokemon, 
loadingPokemon, 
getPokemon,
getPokemonTypes } from '../../services/pokemon__services'
import './SearchControl.css'

import PokemonTypes from '../PokemonTypes/PokemonTypes'

export default function SearchControl({ 
    Query,
    setQuery,
    setPokemon,
    setPokemonList,
    setPrevUrl,
    setNextUrl,
    setModal,
    setIsLoading, }) {
    
    const [TypesList, setTypesList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchPokemonData = async () => {
            setIsLoading(true);
            let allPokemon = await getAllPokemon('https://pokeapi.co/api/v2/pokemon/');
            setPrevUrl(allPokemon.data.previous);
            setNextUrl(allPokemon.data.next);
            await loadingPokemon(allPokemon.data.results, setPokemonList, false);
            await getPokemonTypes(setTypesList);
            setIsLoading(false);
        }
        fetchPokemonData();
    }, [])

    let handleSearch = async () => {
        if(Query){
            setIsLoading(true);
            history.push(`/search?${Query.toLowerCase()}`)
            let pokemon = await getPokemon(`https://pokeapi.co/api/v2/pokemon/${Query.toLowerCase()}`);
            if(pokemon){
                setPokemon(pokemon);
                setIsLoading(false);
                return;
            }
            history.push(`/error?${Query.toLowerCase()}`);
            setIsLoading(false);  
        }
    }

    return (
        <div className="search__control">
            <h1 className="search__title">Find Your Favorite Pokemon!</h1>
            <LoupeLogo className="loupe__logo"/>

            <input className="search__input" type="text" placeholder="Search Pokemon..." 
            onChange={e => setQuery(e.target.value)}/>

            <Button className="search__button"
            onClick={e => handleSearch()}>
                SEARCH
            </Button>

            <Button className="search__button filter__types-button"
            onClick={e => setModal({
                visible: true,
                Component: PokemonTypes,
                items: {TypesList, setModal, setPokemonList, setIsLoading}
            })}>
                FILTER 30 BY TYPE
            </Button>
        </div>
    )
}