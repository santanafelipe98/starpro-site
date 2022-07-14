import React from "react"
import PropTypes from 'prop-types'

import './HalfImageSection.css'

const HalfImageSection = props => (
    <section className="HalfImageSection">
        <div className="textContent">
            { props.children }
        </div>
        <div className={`${props.imgGrayscale ? 'blackWhite' : ''} image`}>
            <img src={`${props.img}`} alt={props.imgAlt} srcset="" />
        </div>
    </section>
)

HalfImageSection.propTypes = {
    img: PropTypes.string,
    imgAlt: PropTypes.string,
    imgGrayscale: PropTypes.bool
}

export default HalfImageSection