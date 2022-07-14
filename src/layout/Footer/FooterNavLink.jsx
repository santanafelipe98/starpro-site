import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/FooterNavLink.css'

const FooterNavLink = props => (
    <a href={props.href} className={ `FooterNavLink ${props.active ? 'active' : ''}` }>
        {props.title}
    </a>
)

FooterNavLink.propTypes = {
    active: PropTypes.bool,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default FooterNavLink