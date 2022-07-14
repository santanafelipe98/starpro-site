import React from 'react'
import './Thumbnail.css'

import PropTypes from 'prop-types'
import { useMemo } from 'react'

const Thumbnail = props => {
    const styles = useMemo(() => ({
        width: props.width || '200px',
        height: props.height || '200px'
    }), [ props.width, props.height ])
    
    return (
        <div style={styles} className="Thumbnail">
            <img src={props.img} alt={props.alt} />
        </div>
    )
}

Thumbnail.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}

export default Thumbnail