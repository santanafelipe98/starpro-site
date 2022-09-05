import React from 'react'

import Translator from '../I18n/Translator'

import { useCallback } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import './Input.css'

const Input = props => {
    const [ isFocused, setIsFocused ] = useState(false)
    const { meta: { touched, error }, className, input, label } = props

    const _classes = useMemo(() => {
        let classes = `${props.className || ''} Input ${touched && error ? 'isInvalid' : ''}`

        if (isFocused)
            classes += ' focused'
        
        return classes
    }, [isFocused, className, error, touched])

    const handleFocus = useCallback(e => {
        setIsFocused(true)

        if (input.onFocus)
            input.onFocus(e)
    }, [ input.onFocus ])
    const handleBlur  = useCallback((e) => {
        if (e.target.value.length === 0) 
            setIsFocused(false)

        if (input.onBlur)
            input.onBlur(e)
    }, [ input.onBlur ])

    return (
        <div className={_classes}>
            <label htmlFor={input && input.name ? input.name : props.name}>{label}</label>
            <input
                { ...input }
                onFocus={handleFocus} onBlur={handleBlur}
                 />
            {touched && error
                && <div className="invalidFeedback"><Translator path={ error } /></div>}
        </div>
    )
}

export default Input