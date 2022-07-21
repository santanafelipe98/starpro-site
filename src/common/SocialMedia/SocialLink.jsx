import React from 'react'
import PropTypes from 'prop-types'
import './SocialLink.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialLink = props => (
    <a href={props.href} className="SocialLink" target="_blank">
        <FontAwesomeIcon icon={['fab', props.icon]} size="lg" color="#fff" />
    </a>
)

SocialLink.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired
}

export default SocialLink