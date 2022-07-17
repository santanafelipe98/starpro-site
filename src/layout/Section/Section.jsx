import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/Section.css'

const Section = props => (
    <section
        {...props}
        className={ `${props.className || ''} Section` }>
        <div className="sectionHeader d-flex flex-column align-items-center">
            <h2 className="sectionTitle mb-4">{props.title}</h2>
            { props.divider && <div className="divider"></div> } 
        </div>
        
        <div className={ props.fluid ? 'container-fluid' : 'container' }>
            { props.children }
        </div>
    </section>
)

Section.propTypes = {
    title: PropTypes.string,
    divider: PropTypes.bool,
    fluid: PropTypes.bool,
}

export default Section