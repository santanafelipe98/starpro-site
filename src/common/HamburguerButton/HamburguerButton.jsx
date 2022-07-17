import React from 'react'
import './HamburguerButton.css'

import PropTypes from 'prop-types'

const HamburguerButton = props => {
    return (
        <button
            className={`${props.className || ''} HamburguerButton ${props.open ? 'change' : ''}`}
            onClick={props.onClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </button>
    )
}

HamburguerButton.propTypes = {
    onClick: PropTypes.func,
    open: PropTypes.bool
}

export default HamburguerButton