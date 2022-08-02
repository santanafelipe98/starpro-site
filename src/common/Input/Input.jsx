import React from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import './Input.css'

const Input = props => {
    const [ isFocused, setIsFocused ] = useState(false)
    const { meta: { touched, error } } = props

    const className = useMemo(() => {
        let classes = `${props.className || ''} Input ${touched && error ? 'isInvalid' : ''}`

        if (isFocused)
            classes += ' focused'
        
        return classes
    }, [isFocused, props.className, error])

    const handleFocus = useCallback(() => setIsFocused(true), [setIsFocused])
    const handleBlur  = useCallback((e) => {
        if (e.target.value.length === 0)
            setIsFocused(false)
    }, [setIsFocused])

    return (
        <div className={className}>
            <label htmlFor={(props.input && props.input.name) ? props.input.name : props.name}>{props.label}</label>
            <input
                { ...props.input }
                onFocus={handleFocus} onBlur={handleBlur}
                 />
            { 
            touched &&
                (error
                    && <div className="invalidFeedback">{ error }</div>
            ) }
        </div>
    )
}

export default Input