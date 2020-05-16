import React from 'react'
import duck from '../assets/images/welcome.gif'

export default function DuckImage() {
    return (
        <div style = {duckStyle}>
            <img src={duck} alt="welcome!"></img>
            <p>Currently under construction...</p>
        </div>
    )
}

const duckStyle = {
    width: "15%",
    margin: "0 auto",
    textAlign: "center"
}

