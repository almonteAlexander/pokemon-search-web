import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { ReactComponent as PokemonLogo } from '../../img/pokemon__logo.svg'
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <Link to="/">
                <PokemonLogo className="pokemon__logo" />
            </Link>

            <Link to="/">
                <Button className="home__button">
                    Home
                </Button>
            </Link>
        </header>
    )
}