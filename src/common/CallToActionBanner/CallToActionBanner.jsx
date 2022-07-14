import React from 'react'
import './CallToActionBanner.css'
import PropTypes from 'prop-types'

import Container from '../../layout/Container/Container'
import ButtonLink from '../ButtonLink/ButtonLink'

const CallToActionBanner = props => {
    const cols = props.cols || [ 'col-md-6', 'col-md-6' ]

    return (
        <Container className="CallToActionBanner">
            <div className="container">
                <div className="row">
                    <div className={`${cols[0]} textContent`}>
                        { props.children }
                    </div>
                    <div className={`${cols[1]} d-flex align-items-center`}>
                        <ButtonLink size="xl">Fale com nossos especialistas</ButtonLink>
                    </div>
                </div>
            </div>
        </Container>
    )
}

CallToActionBanner.propTypes = {
    cols: PropTypes.arrayOf(PropTypes.string)
}

export default CallToActionBanner