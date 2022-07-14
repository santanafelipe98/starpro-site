import React from 'react'
import './Carousel.css'

import Slider from 'react-slick'

import PropTypes from 'prop-types'

const Carousel = props => {
    const images = props.images || []
    
    const settings = {
        customPaging: i => (
            <a>
                <img src={images[i].src} alt={images[i].alt} />
            </a>
        ),
        dots: false,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="Carousel">
            <Slider { ...settings }>
                { images.map((img, i) => <img key={`carousel-image${i}`} {...img} />) }
            </Slider>
        </div>
    )
}

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }))
}

export default Carousel