import React, { useEffect, useState, useCallback } from 'react'
import './Carousel.css'

import PropTypes from 'prop-types'

const Carousel = props => {
    const [ currentSlide, setCurrentSlide ] = useState(0)
    const [ mouseOver, setMouseOver ] = useState(false)

    useEffect(() => {
        if (mouseOver)
            return

        const timer = setInterval(() => {
            setCurrentSlide(curr => {
                if (curr >= props.images.length - 1)
                    return 0

                return ++curr
            })
        }, 3000)
        
        return () => clearInterval(timer)
    }, [setCurrentSlide, props.images, mouseOver])

    const renderSlide = useCallback((img, i) => {
        const styles = {
            transform: `translateX(${(i - currentSlide) * 100}%)`
        }

        return (
            <div
                style={styles}
                className="slide"
                onMouseOut={ () => setMouseOver(false) }
                onMouseOver={() => setMouseOver(true)}>
                <img  key={`carouselSlide${i}`} className="slideImage" {...img} />
            </div>
        )
    }, [currentSlide, setMouseOver])

    const renderThumb = useCallback((img, i) => (
        <div className="thumb" onClick={() => setCurrentSlide(i)}>
            <img {...img} />
        </div>
    ), [setCurrentSlide])

    const images = props.images || []

    return (
        <div className="Carousel">
            <div className="display">
                { images.map(renderSlide) }
            </div>
            <div className="thumbs">
                { images.map(renderThumb) }
            </div>
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