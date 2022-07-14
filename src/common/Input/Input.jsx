import React from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import './Input.css'

const Input = props => {
    const [ isFocused, setIsFocused ] = useState(false)

    const className = useMemo(() => {
        let classes = `${props.className || ''} Input`

        if (isFocused)
            classes += ' focused'
        
        return classes
    }, [isFocused, props.className])

    const handleFocus = useCallback(() => setIsFocused(true), [setIsFocused])
    const handleBlur  = useCallback((e) => {
        if (e.target.value.length === 0)
            setIsFocused(false)
    }, [setIsFocused])

    return (
        <div className={className}>
            <label htmlFor={(props.input && props.input.name) ? props.input.name : props.name}>{props.label}</label>
            <input
                onFocus={handleFocus} onBlur={handleBlur}
                { ...props.input } />
        </div>
    )
}

export default Input