import React from 'react'
import './LicenseBanner.css'

import PropTypes from 'prop-types'

import Divider from '../Divider/Divider'
import ButtonLink from '../ButtonLink/ButtonLink'

const LicenseBanner = props => (
    <section {...props} className={`${props.className || ''} LicenseBanner`}>
        <div className="container d-flex flex-col">
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
                        <ButtonLink>Fale com nossos especialistas</ButtonLink>
                    </div>
                )
            }

        </div>
    </section>
)

LicenseBanner.propTypes = {
    showButton: PropTypes.bool,
    titleColor: PropTypes.string,
    subtitleColor: PropTypes.string
}

export default LicenseBanner