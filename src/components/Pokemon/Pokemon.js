import React from 'react'
import { ReactComponent as PokeballMainLogo } from '../../img/pokeball__main.svg'
import { Button } from '@material-ui/core'
import './Pokemon.css'

import Stat from '../Stat/Stat'

export default function Pokemon({ pokemon }) {
    return (
        <div className="pokemon__container">

            <div className="pokemon__header">
                <b className="pokemon__id">{pokemon.id}</b>

                <div className="pokemon__types-container">
                    {pokemon.types.map(type => (
                     
                        <div className="pokemon__type"
                        style={{background: `var(--${type.type.name})`}}>
                            {type.type.name}
                        </div>
                        )
                    )}
                </div>
            </div>

            <div className="pokemon__body">

                <div className="pokemon__info-container">
                    <img src={pokemon.sprites.front_default} className="pokemon__img" alt="pokemon-sprite"/>
                    <h2 className="pokemon__name">{pokemon.name}</h2>
                </div>

                <div className="pokemon__stats-container">
                    {pokemon.stats.map(stat => (
                        ['hp','attack','defense','speed'].includes(stat.stat.name) && 
                        <Stat 
                        name={stat.stat.name}
                        value={stat.base_stat}/>
                        )
                    )}
                </div>
            </div>

            <Button className="catch-pokemon__button">
                <PokeballMainLogo className="main__pokeball-svg"/>
            </Button>
        </div>
    )
}