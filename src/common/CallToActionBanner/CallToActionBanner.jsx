import React from 'react'
import './CallToActionBanner.css'
import PropTypes from 'prop-types'

import Container from '../../layout/Container/Container'
import TalkWithUsButton from '../TalkWithUsButton/TalkWithUsButton'

const CallToActionBanner = props => {
    const cols = props.cols || [ 'col-md-12 col-lg-6', 'col-md-12 col-lg-6' ]

    return (
        <Container className="CallToActionBanner">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className={`textContent`}>
                        { props.children }
                    </div>
                    <div className="buttonWrapper ml-5">
                        <TalkWithUsButton  size="xl">Fale com nossos especialistas</TalkWithUsButton>
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