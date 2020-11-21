import React from 'react'
import './Stat.css'

export default function Stat({ name, value }) {
    return (
        <div className="stat__container">
            <div className="stat__name">{name}</div>

            <div className="stat__value-container" style={{width: `${value}%`}}>
                <b className="stat__value">{value}</b>
            </div>
        </div>
    )
}