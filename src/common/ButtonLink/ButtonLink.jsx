import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import './ButtonLink.css'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const ButtonLink = props => {
    const className = useMemo(() => {
        let classes = `${props.className || ''} ButtonLink`

        switch (props.variant) {
            case 'primary':
                classes += ' btnPrimary'
                break
            case 'secondary':
                classes += ' btnSecondary'
                break
            case 'light':
                classes += ' btnLight'
                break
        }

        switch (props.size) {
            case 'xs':
                classes += ' btnXs'
                break
            case 'lg':
                classes += ' btnLg'
                break
            case 'xl':
                classes += ' btnXl'
                break
            default:
                classes += ' btnMd'
        }

        return classes
    }, [props.variant, props.className, props.size])

    if (props.hash) {
        return (
            <HashLink to={props.to} className={className} smooth>{ props.children }</HashLink>
        )
    } else {
        return (
            <Link to={props.to} className={className}>{ props.children }</Link>
        )
    }
}

ButtonLink.propTypes = {
    to: PropTypes.string.isRequired,
    variant: PropTypes.oneOf([ 'primary', 'secondary', 'light' ]),
    hash: PropTypes.bool
}

ButtonLink.defaultProps = {
    variant: 'primary',
    to: '#'
}


export default ButtonLink