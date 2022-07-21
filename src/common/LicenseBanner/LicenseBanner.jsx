import React from 'react'
import './LicenseBanner.css'

import PropTypes from 'prop-types'

import Divider from '../Divider/Divider'
import TalkWithUsButton from '../TalkWithUsButton/TalkWithUsButton'

const LicenseBanner = props => (
    <section {...props} className={`${props.className || ''} LicenseBanner`}>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col col-sm-12 col-md-12 col-lg-9">
                    <h1 style={{ color: props.titleColor || '#4B4B4B' }} className="headingXl text-uppercase mb-5 text-center">
                        A Starpro é licenciada pela vigilância sanitária e tem o certificado AFE, da Anvisa.
                    </h1>
                    <h2 style={{ color: props.subtitleColor || '#4B4B4B' }}  className="headingMd text-uppercase text-weight-semibold text-center mb-5">
                        Estamos prontos para garantir a segurança dos seus ambientes.
                    </h2>

                    <Divider className={ `${props.showButton ? 'mb-5' : ''}`} />

                    {
                        props.showButton && (
                            <div className="d-flex justify-content-center mt-4">
                                <TalkWithUsButton>Fale com nossos especialistas</TalkWithUsButton>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    </section>
)

LicenseBanner.propTypes = {
    showButton: PropTypes.bool,
    titleColor: PropTypes.string,
    subtitleColor: PropTypes.string
}

export default LicenseBanner