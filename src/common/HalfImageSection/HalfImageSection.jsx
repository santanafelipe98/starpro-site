import React from "react"
import PropTypes from 'prop-types'

import './HalfImageSection.css'

const HalfImageSection = props => (
    <section
        style={{
            backgroundColor: props.backgroundColor || '#F4F4F4'
        }}
        className="HalfImageSection">
        <div className={`${props.centerContent ? 'd-flex flex-col justify-content-center' : '' } textContent`}>
            { props.children }
        </div>
        <div className={`${props.imgGrayscale ? 'blackWhite' : ''} image`}>
            <img style={props.imgStyle} src={`${props.img}`} alt={props.imgAlt} srcset="" />
        </div>
    </section>
)

HalfImageSection.propTypes = {
    img: PropTypes.string,
    imgAlt: PropTypes.string,
    imgStyle: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string
    }),
    imgGrayscale: PropTypes.bool,
    backgroundColor: PropTypes.string
}

export default HalfImageSection