import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'

import './CustomSelect.css'
import { useEffect } from 'react'
import { useRef } from 'react'

const CustomSelect = props => {
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const [ value, setValue ] = useState('')
    const [ open, setOpen ] = useState(false)
    const ref = useRef(null)

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

    useEffect(() => {
        setValue(options[currentIndex].value || '')
    }, [setValue, currentIndex, options])

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
        let newValue = e.target.value
        setValue(newValue)
        if (props.change)
            props.change(props.input.name, newValue)
    }, [props.change, props.input, setValue])

    return (
        <div ref={ref} className="CustomSelect">
            { props.label && <label htmlFor={props.name}>{props.label}</label>}
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
                value={value}
                onChange={handleChange}
                className="hidden">
                { options.map(renderOption) }
            </select>
        </div>
    )
}

CustomSelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        title: PropTypes.string
    }))
}

export default CustomSelect