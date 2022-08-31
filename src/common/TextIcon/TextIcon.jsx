import React from 'react'
import PropTypes from 'prop-types'

import './TextIcon.css'

const TextIcon = props => (
    <div className="TextIcon">
        <div className="square">
            <img src={props.icon} alt={props.iconAlt} className="squareIcon" />
        </div>

        <span className="description">{props.description}</span>
    </div>
)

TextIcon.propTypes = {
    description: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]).isRequired,
    icon: PropTypes.string.isRequired,
    iconAlt: PropTypes.string.isRequired
}

export default TextIcon