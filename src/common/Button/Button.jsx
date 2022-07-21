import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = props => {
    const className = useMemo(() => {
        let classes = `${props.className || ''} Button ${props.rounded ? 'rounded' : ''}`

        switch (props.variant) {
            case 'primary':
                classes += ' btnPrimary'
                break
            case 'secondary':
                classes += ' btnSecondary'
                break
            default:
                classes += ' btnMaterial'
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
    }, [props.variant, props.size, props.className])

    return (
        <button { ...props } className={className}>
            { props.children }
        </button>
    )
}

Button.propTypes = {
    variant: PropTypes.oneOf([ 'primary', 'secondary', 'material' ]),
    size: PropTypes.oneOf([ 'xs', 'sm', 'md', 'lg', 'xl' ]),
    rounded: PropTypes.bool
}

Button.defaultProps = {
    variant: 'primary',
    size: 'md'
}


export default Button