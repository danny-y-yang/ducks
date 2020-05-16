import React from 'react'

export default function Header() {
    return (
        <div style={headerStyle}>
            what the duck?
        </div>
    )
}

const headerStyle = {
    fontFamily : 'Nanum Myeongjo,Arial',
    fontWeight : '400',
    fontSize: 72,
    textAlign: 'center',
    marginTop: '5%',
    paddingBottom: '50px',
    width: "50%",
    margin: "0 auto"
}
