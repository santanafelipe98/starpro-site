import React from "react"
import PropTypes from 'prop-types'

import './HalfImageSection.css'

const HalfImageSection = props => {
    const colsSpace = props.colsSpace || ['1']
    
    return (
        <section
            style={{
                backgroundColor: props.backgroundColor || '#F4F4F4'
            }}
            className="HalfImageSection">
            <div
                className={`${props.centerContent ? 'd-flex flex-col justify-content-center' : '' } textContent`}
                style={{ flex: colsSpace[0] }}>
                { props.children }
            </div>
            <div
                className={`${props.imgGrayscale ? 'blackWhite' : ''} image ${props.imgFlipX ? 'flipX' : ''}`}
                style={{ flex: colsSpace.length > 1 ? colsSpace[1] : colsSpace[0] }}>
                <img style={props.imgStyle} src={`${props.img}`} alt={props.imgAlt} srcset="" />
            </div>
        </section>
    )
}

HalfImageSection.propTypes = {
    img: PropTypes.string,
    imgAlt: PropTypes.string,
    imgFlipX: PropTypes.string,
    imgStyle: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string
    }),
    imgGrayscale: PropTypes.bool,
    backgroundColor: PropTypes.string,
    colsSpace: PropTypes.arrayOf(PropTypes.string)
}

export default HalfImageSection