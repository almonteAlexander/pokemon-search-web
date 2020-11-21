import React from 'react'
import { Button } from '@material-ui/core'
import { ReactComponent as CloseSvg } from '../../img/close.svg'
import './PokemonTypes.css'

import Type from '../Type/Type'

export default function PokemonTypes({ items }) {
    const { TypesList, setModal, setPokemonList, setIsLoading } = items;
    return (
        <div className="types-list__container">

            <div className="types-list__header">
                <Button className="types__close-button"
                onClick={e => setModal({
                    visible: false,
                    Component: <></>,
                    items: {}
                })}>
                    <CloseSvg />
                </Button>
            </div>

            <ul className="types-list__ul">
                {TypesList.map(type => (
                    <Type 
                    key={type.name}
                    name={type.name}
                    color={`var(--${type.name})`}
                    setModal={setModal}
                    setPokemonList={setPokemonList}
                    setIsLoading={setIsLoading}
                    />
                ))
                }
            </ul>
        </div>
        
    )
}