import React from 'react'

import './BusinessSecurity.css'
import Divider from '../Divider/Divider'
import ButtonLink from '../ButtonLink/ButtonLink'

import places from '../../data/places'
import { useCallback } from 'react'
import TextIcon from '../TextIcon/TextIcon'

const BusinessSecurity = props => {

    const renderPlace = useCallback((place, i) => (
        <TextIcon key={`place${i}`} {...place} />
    ), [])

    return (
        <section className="BusinessSecurity d-flex flex-col align-items-center">
            <h1 className="headingXl c-dark text-center mb-5">
                Segurança para o comércio internacional:<br /> sua madeira livre de pragas
            </h1>
            <Divider className="mb-5 bg-primary" style={ { width: '250px', height: '5px' } } />

            <div className="places mb-5">
                { places.map(renderPlace) }
            </div>

            <ButtonLink className="mt-5 mb-5" to="#contate_nos" hash>Fale com nossos especialistas</ButtonLink>

            <Divider className="mt-5 px-5" style={{ width: '70%' }} />
        </section>
    )
}

export default BusinessSecurity