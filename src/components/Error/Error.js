import React from 'react'
import { ReactComponent as WarningLogo } from '../../img/warning.svg'
import {Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import './Error.css'

export default function Error() {
    return (
        <div className="error__container">
            <WarningLogo classNAme="error__warning-logo" />
            <h2 className="error__message">That Pokemon Doesn't Exist!</h2>

            <Link to="/">
                <Button className="error__back-button">
                    Back To Home
                </Button>
            </Link>
            
        </div>
    )
}