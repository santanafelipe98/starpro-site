import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import '../../styles/FooterNav.css'

import FooterNavLink from './FooterNavLink'

const FooterNav = props => {
    const renderItem = useCallback((item, i) => (
        <FooterNavLink
            active={ props.activeIndex === i }
            key={`FooterNavLink${i}`}
            {...item} />
    ), [props.activeIndex])
    
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
    activeIndex: PropTypes.number
}

export default FooterNav