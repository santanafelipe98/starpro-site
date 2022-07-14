import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import SocialLink from './SocialLink'
import './SocialMedia.css'

const SocialMedia = props => {
    const items = props.items || []

    const renderItem = useCallback((item, i) => (
        <SocialLink key={`socialLink${i}`} { ...item} />
    ), [])

    return (
        <nav className="SocialMedia">
            { items.map(renderItem) }
        </nav>
    )
}

SocialMedia.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string,
        icon: PropTypes.string
    }))
}

export default SocialMedia