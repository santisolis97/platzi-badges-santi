import React from 'react'
import './styles/PageError.css'
function PageError(props) {
    return (
        <div className="PageError">
            <h1> <span role="img" aria-label="Primary">🚫</span> {props.error.message}<span role="img" aria-label="Primary">🚫</span></h1>
        </div>
    )
}

export default PageError
