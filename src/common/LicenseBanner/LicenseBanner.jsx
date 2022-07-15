import React from 'react'
import './LicenseBanner.css'

import PropTypes from 'prop-types'

import Divider from '../Divider/Divider'
import ButtonLink from '../ButtonLink/ButtonLink'

const LicenseBanner = props => (
    <section className="LicenseBanner">
        <div className="container d-flex flex-col">
            <h1 className="headingXl text-uppercase mb-5 text-center">
                A Starpro é licenciada pela vigilância sanitária e tem o certificado AFE, da Anvisa.
            </h1>
            <h2 className="headingMd text-uppercase text-weight-semibold text-center mb-5">
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
    showButton: PropTypes.bool
}

export default LicenseBanner