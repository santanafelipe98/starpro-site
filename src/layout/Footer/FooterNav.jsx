import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import '../../styles/FooterNav.css'

import FooterNavLink from './FooterNavLink'
import { sanitizeUrl } from '../../utils/UrlUtils'
import { useLocation } from 'react-router-dom'

const FooterNav = props => {
    const location = useLocation()

    const renderItem = useCallback((item, i) => {
        const sanitizedUrl     = sanitizeUrl(item.href)
        const sanitizedLocation = sanitizeUrl(location.pathname)

        return (
            <FooterNavLink
                active={ sanitizedUrl === sanitizedLocation }
                key={`FooterNavLink${i}`}
                {...item} />
        )
    }, [location.pathname])
    
    const items = props.items || []
    
    return (
        <nav className="FooterNav">
            { items.map(renderItem) }
        </nav>
    )
}

FooterNav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
        {
            href: PropTypes.string,
            title: PropTypes.string
        }
    )),
}

export default FooterNav