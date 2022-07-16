import React from 'react'
import './Divider.css'

const Divider = props => (
    <div {...props} className={`${props.className || ''}  Divider`}></div>
)

export default Divider