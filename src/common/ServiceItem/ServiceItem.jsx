import React from 'react'
import PropTypes from 'prop-types'
import './ServiceItem.css'

import ButtonLink from '../ButtonLink/ButtonLink'
import Translator from '../I18n/Translator'

const ServiceItem = props => (
    <div className={ `${props.className || ''} ServiceItem`}>
        <div className="icon">
            <img src={ props.iconURL } alt={ `Ícone ${props.title}` } />
        </div>
        <div className="textContent">
            <h3 className="serviceTitle">{ props.title }</h3>
            <p className="serviceText">{ props.text }</p>
            <ButtonLink className="serviceButton" to={props.buttonLink}>
                <Translator path="buttons.learn_more" />
            </ButtonLink>
        </div>
    </div>
)

ServiceItem.propTypes = {
    title: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]),
    text: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]),
    iconURL: PropTypes.string,
    buttonLink: PropTypes.string
}

export default ServiceItem