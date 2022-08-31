import React from 'react'
import './Flag.css'

const Flag = ({ image, isSelected, ...props }) => (
    <img alt="flag" src={image} className={`flag ${isSelected ? 'selected' : ''}`} {...props} />
)

export default Flag
