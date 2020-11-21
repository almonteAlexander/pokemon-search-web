import React from 'react'
import { getPokemonsOfType } from '../../services/pokemon__services'
import './Type.css'

export default function Type({ 
name, 
color, 
setModal,
setPokemonList,
setIsLoading }) {

    let handleTypeClick = async () => {
        setIsLoading(true);
        setModal({visible: false, Component: <></>, items: {}});
        await getPokemonsOfType(name, setPokemonList);
        setIsLoading(false);
    }

    return (
        <li className="type-list__element"
        style={{background: color}}
        onClick={e => handleTypeClick()}>
            <h3>{name}</h3>
        </li>
    )
}