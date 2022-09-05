import React, {
    useCallback,
    useState,
    useMemo
} from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'

import './CustomSelect.css'

import { change } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useEffect } from 'react'
import { useRef } from 'react'
import Translator from '../I18n/Translator'

let CustomSelect = props => {
    const {
        meta: { touched, error, form },
        className,
        input, 
        label,
        change
    } = props

    const [ currentIndex, setCurrentIndex ] = useState(0)
    
    const [ open, setOpen ] = useState(false)
    const ref               = useRef(null)

    useEffect(() => {
        const handler = e => {
            const { target } = e
            
            if (ref && ref.current) {
                if (!ref.current.contains(target))
                    setOpen(false)
            }
        }
    
        document.addEventListener('click', handler)

        return () => document.removeEventListener('click', handler)
    }, [ref, setOpen])

    const options = props.options || []
    const value   = useMemo(() => options[currentIndex] ? options[currentIndex].value || "" : "", [ currentIndex, options ])

    useEffect(() => {
        if (change)
            change(form, input.name, value)
    }, [ value, change, input, form ])

    const _classes = useMemo(() => {
        let classes = `${props.className || ''} CustomSelect ${touched && error ? 'isInvalid' : ''}`
        
        return classes
    }, [ className, error, touched ])

    const renderItem = useCallback((o, i) => {
        if (currentIndex === i)
            return null
        
        return (
            <li
                key={`selectItem${i}`}
                className="option"
                onClick={ () => setCurrentIndex(i) }>{o.title}</li>
        )
    }, [currentIndex, setCurrentIndex])

    const renderOption = useCallback((o, i) => (
        <option key={`o${i}`} value={o.value}>{ o.title }</option>
    ), [currentIndex])

    const handleChange = useCallback(e => {
        if (input.onChange)
            input.onChange(e)

            
    }, [props.change, input ])

    return (
        <div ref={ref} className={ _classes }>
            { props.label && <label htmlFor={props.name}>{label}</label>}
            <div className="select" onClick={() => setOpen(val => !val)}>
                <span className="current">{ options[currentIndex].title || '' }</span>
                <FontAwesomeIcon
                    className="caret"
                    icon={ open ? faCaretDown : faCaretRight }
                    size="1x"
                    color="var(--primary-color)" />
                <ul className={ `options ${open ? 'open' : ''}` }>
                    { options.map(renderItem) }
                </ul>
            </div>
            <select
                { ...input }
                onChange={handleChange}
                value={value}
                className="hidden"
                >
                { options.map(renderOption) }
            </select>
            {touched && error
                && <div className="invalidFeedback"><Translator path={ error } /></div>}
        </div>
    )
}

CustomSelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        title: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
    }))
}

const mapDispatchToProps = dispatch => bindActionCreators({
    change
}, dispatch)

export default connect(null, mapDispatchToProps)(CustomSelect)