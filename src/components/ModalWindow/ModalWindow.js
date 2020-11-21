import React from 'react'
import './ModalWindow.css'

export default function ModalWindow({ Component, items }) {
    return (
        <div className="modal-window">
            <Component items={items} />
        </div>
    )
}