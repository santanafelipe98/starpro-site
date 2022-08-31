import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/FooterNavLink.css'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

const FooterNavLink = props => {
    
    if (props.hash) {
        return (
            <HashLink to={props.href} className={ `FooterNavLink ${props.active ? 'active' : ''}` }>{props.title}</HashLink>
        )
    } else {
        return (
            <Link to={props.href} className={ `FooterNavLink ${props.active ? 'active' : ''}` }>{props.title}</Link>
        )
    }
}

FooterNavLink.propTypes = {
    active: PropTypes.bool,
    href: PropTypes.string.isRequired,
    title: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]).isRequired
}

export default FooterNavLink