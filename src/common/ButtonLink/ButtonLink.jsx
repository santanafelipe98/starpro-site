import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import './ButtonLink.css'

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

    return (
        <a href={props.to} className={className}>
            { props.children }
        </a>
    )
}

ButtonLink.propTypes = {
    to: PropTypes.string.isRequired,
    variant: PropTypes.oneOf([ 'primary', 'secondary' ])
}

ButtonLink.defaultProps = {
    variant: 'primary',
    to: '#'
}


export default ButtonLink