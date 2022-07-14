import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

import Container from '../../layout/Container/Container'
import ButtonLink from '../ButtonLink/ButtonLink'

const Card = props => {
    const textStyle = {
        color: '#4E4E4E',
        fontSize: '1.2rem',
        lineHeight: 2,
        textAlign: 'justify',
        ...props.textStyle,
    }

    return (
        <Container style={props.style} className={ `${props.className || ''} Card` }>
            { props.title && <h3 className="cardTitle">{props.title}</h3> }
            <div style={textStyle} className="cardBody mt-3">
                { props.children }
            </div>
            <div className="flex flex-row">
                <ButtonLink className="cardButton">Saiba mais</ButtonLink>
            </div>
        </Container>
    )
}

Card.propTypes = {
    buttonLink: PropTypes.string,
    textStyle: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.string,
        lineHeight: PropTypes.number,
        textAlign: PropTypes.string
    }),
    title: PropTypes.string
}

Card.defaultProps = {
    textStyle: {
        color: '#4E4E4E',
        fontSize: '1.2rem',
        lineHeight: 2,
        textAlign: 'justify',
    }
}

export default Card