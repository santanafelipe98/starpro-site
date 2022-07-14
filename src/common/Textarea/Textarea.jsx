import React, { useState, useCallback, useMemo } from 'react'
import './Textarea.css'

const Textarea = props => {
    const [ isFocused, setIsFocused ] = useState(false)
    
    const className = useMemo(() => {
        let classes = `${props.className || ''} Textarea`

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
            <label htmlFor={(props.input && props.input.name) ? props.input.name : props.name}>{ props.label }</label>
            <textarea onFocus={handleFocus} onBlur={handleBlur}
                { ...props.input }></textarea>
        </div>
    )
}

export default Textarea