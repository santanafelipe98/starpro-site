import React, {
    useCallback,
    useMemo,
    useState
} from 'react'

import PropTypes from 'prop-types'
import './Alert.css'

import { faCheck, faExclamation, faInfo, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Alert = props => {
    const { className, variant, children } = props
    const [ show, setShow ]                = useState(true)

    const classes = useMemo(() => {
        let c = `${className || ''} Alert`

        switch (variant) {
            case 'danger':
                c += ' alertDanger'
                break
            case 'warning':
                c += ' alertWarning'
                break
            case 'success':
                c += ' alertSuccess'
                break
            default:
                c += ' alertInfo'
        }

        return c
    }, [ className, variant ])

    const getIcon = useCallback(() => {
        let icon = null

        switch (variant) {
            case 'danger':
                icon = faXmark
                break
            case 'warning':
                icon = faExclamation
                break
            case 'success':
                icon = faCheck
                break
            default:
                icon = faInfo
        }

        return <FontAwesomeIcon icon={icon} size="3x" color={`var(--${variant}-color)`}/>
    }, [ variant ])

    return show ?
        (
            <div className={classes}>
                <div className="alertIcon">
                    { getIcon() }
                </div>
                <div className="alertBody">
                    { children }
                </div>
                <div className="closeButton">
                    <button
                        type="submit"
                        onClick={ () => setShow(false) }>
                        <FontAwesomeIcon icon={faXmark} color={`var(--${variant}-color)`} size="2x" />
                    </button>
                </div>
            </div>
        )
        : null
}

Alert.propTypes = {
    variant: PropTypes.oneOf([
        'danger',
        'warning',
        'success',
        'info'
    ])
}

export default Alert