import React from 'react'

const ContentButton = ({ text }) => {
    return (
        <div style={{display: 'flex', gap: "2rem", minWidth: "20rem"}}><button style={{fontSize: "1.5rem"}}><b>{text}</b></button></div>
    )
}

export default ContentButton