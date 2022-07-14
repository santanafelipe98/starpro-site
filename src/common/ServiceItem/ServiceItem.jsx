import React from 'react'
import PropTypes from 'prop-types'
import './ServiceItem.css'

import ButtonLink from '../ButtonLink/ButtonLink'

const ServiceItem = props => (
    <div className={ `${props.className || ''} ServiceItem`}>
        <div className="icon">
            <img src={ props.iconURL } alt={ `Ícone ${props.title}` } />
        </div>
        <div className="textContent">
            <h3 className="serviceTitle">{ props.title }</h3>
            <p className="serviceText">{ props.text }</p>
            <ButtonLink className="serviceButton" to={props.buttonLink}>Saiba mais</ButtonLink>
        </div>
    </div>
)

ServiceItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    iconURL: PropTypes.string,
    buttonLink: PropTypes.string
}

export default ServiceItem