import React from 'react'
import '../styles/PlantSanitation.css'

import PageHeader from '../common/PageHeader/PageHeader'
import InternationalCertification from '../common/InternationalCertification/InternationalCertification'
import KnowUs from '../common/KnowUs'
import ContactUs from '../common/ContactUs/ContactUs'
import ButtonLink from '../common/ButtonLink/ButtonLink'
import HalfImageSection from '../common/HalfImageSection/HalfImageSection'
import Divider from '../common/Divider/Divider'
import CallToActionBanner from '../common/CallToActionBanner/CallToActionBanner'

import Carousel from '../common/Carousel/Carousel'


const PlantSanitation = props => (
    <main className="PlantSanitation">
        <PageHeader
            padding={{
                top: '120px'
            }}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="pageHeaderTitle mb-5">Saneamento Vegetal</h1>
                        <p className="pageHeaderText mt-5 mb-5">
                            Especialista em eliminação da vegetação indesejada
                        </p>

                        <ButtonLink hash to="#contate_nos" className="pageHeaderButton mt-4">Fale com nossos especialistas</ButtonLink>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <Carousel
                            images={[
                                {
                                    src: `${process.env.PUBLIC_URL}/images/cortando_grama_cima.jpg`,
                                    alt: 'Slide 01'
                                },
                                {
                                    src: `${process.env.PUBLIC_URL}/images/cortando_grama.jpg`,
                                    alt: 'Slide 02'
                                },
                                {
                                    src: `${process.env.PUBLIC_URL}/images/cortando_grama_close.jpg`,
                                    alt: 'Slide 03'
                                }
                            ]} />
                    </div>
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

                <ButtonLink hash to="#contate_nos" className="mt-4">Fale com nossos especialistas</ ButtonLink>
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
                    <ButtonLink hash to="#contate_nos">Fale com nossos especialistas</ButtonLink>
                </div>

            </div>
        </section>
        <InternationalCertification />
        <KnowUs />
        <ContactUs />
        <CallToActionBanner>
            <h1 className="headingLg text-uppercase text-weight-light mb-3">
                Tratamento térmico é com a Starpro
            </h1>
            <h2 className="headingMd">Estamos prontos para lhe atender</h2>
        </CallToActionBanner>
    </main>
)

export default PlantSanitation