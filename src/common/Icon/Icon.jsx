import React from 'react'
import PropTypes from 'prop-types'

import './Icon.css'

const Icon = props => (
    <div className="Icon">
        <img className="iconImage" src={props.img} alt={props.description} />
        <span className="iconDescripti">{props.description}</span>
    </div>
)

Icon.propTypes = {
    img: PropTypes.string,
    description: PropTypes.string
}

export default Icon