import React from 'react'
import '../styles/PlantSanitation.css'

import PageHeader from '../common/PageHeader/PageHeader'
import InternationalCertification from '../common/InternationalCertification/InternationalCertification'
import KnowUs from '../common/KnowUs'
import ContactUs from '../common/ContactUs/ContactUs'
import ButtonLink from '../common/ButtonLink/ButtonLink'
import HalfImageSection from '../common/HalfImageSection/HalfImageSection'
import Divider from '../common/Divider/Divider'


const PlantSanitation = props => (
    <main className="PlantSanitation">
        <PageHeader>
            <div className="pageHeaderContent">
                <div className="left">
                    <h1 className="pageHeaderTitle mb-5">Saneamento Vegetal</h1>
                    <p className="pageHeaderText mt-5 mb-5">
                        Especialista em eliminação da vegetação indesejada
                    </p>

                    <ButtonLink className="pageHeaderButton mt-4">Fale com nossos especialistas</ButtonLink>
                </div>
                <div className="right">
                    
                </div>
            </div>
        </PageHeader>
        <HalfImageSection
            img={`${process.env.PUBLIC_URL}/images/detetizador_estufa.jpg`}
            imgAlt="Detetizador em uma estufa"
            imgGrayscale>
            <div className="halfSectionHeader">
                <h2 className="headingLg c-white text-weight-semibold">Controle de pragas através de técnicas eficientes e produtos de alta qualidade</h2>
            </div>
            <div className="textWrapper">
                <p className="textXl mb-5">
                    Eliminação da vegetação indesejada através de poda, capina mecanizada ou química com uso de herbicidas. Indicado para jardins, pátios, pavimentos diversos e qualquer ambiente onde exista necessidade.
                </p>

                <ButtonLink className="mt-4">Fale com nossos especialistas</ ButtonLink>
            </div>
        </HalfImageSection>
        <section className="license">
            <div className="container d-flex flex-col">
                <h1 className="headingXl text-uppercase mb-5 text-center">
                    A Starpro é licenciada pela vigilância sanitária e tem o certificado AFE, da Anvisa.
                </h1>
                <h2 className="headingMd text-uppercase text-weight-semibold text-center mb-5">
                    Estamos prontos para garantir a segurança dos seus ambientes.
                </h2>

                <Divider className="mb-5" />

                <div className="d-flex justify-content-center mt-4">
                    <ButtonLink>Fale com nossos especialistas</ButtonLink>
                </div>

            </div>
        </section>
        <InternationalCertification />
        <KnowUs />
        <ContactUs />
    </main>
)

export default PlantSanitation