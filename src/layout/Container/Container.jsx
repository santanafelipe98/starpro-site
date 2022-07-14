import React from 'react'
import '../../styles/Container.css'

const Container = props => (
    <div className={ `${props.className || ''} Container` }>
        { props.children }
    </div>
)

export default Container