import React from 'react'
import '../styles/UrbanPestControl.css'

import PageHeader from '../common/PageHeader/PageHeader'
import ButtonLink from '../common/ButtonLink/ButtonLink'
import Carousel from '../common/Carousel/Carousel'
import InternationalCertification from '../common/InternationalCertification/InternationalCertification'
import KnowUs from '../common/KnowUs'
import ContactUs from '../common/ContactUs/ContactUs'
import CallToActionBanner from '../common/CallToActionBanner/CallToActionBanner'
import HalfImageSection from '../common/HalfImageSection/HalfImageSection'
import Divider from '../common/Divider/Divider'

const UrbanPestControl = props => (
    <main className="UrbanPestControl">
        <PageHeader
            padding={{
                top: '120px'
            }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <h1 className="pageHeaderTitle mb-5">Controle de Pragas Urbanas</h1>
                        <p className="pageHeaderText mt-5 mb-5">
                            Especialista em controle de pragas para garantir sua segurança e conforto.
                        </p>

                        <ButtonLink hash to="#contate_nos" className="pageHeaderButton">Fale com nossos especialistas</ButtonLink>
                    </div>
                    <div className="col-md-12 col-lg-6 d-flex justify-content-end">
                        <Carousel
                            images={[
                                {
                                    src: `${process.env.PUBLIC_URL}/images/[Downloader.la]-62a7a6b5c62b8.jpg`,
                                    alt: 'Slide 01'
                                },
                                {
                                    src: `${process.env.PUBLIC_URL}/images/Beschermende-kleding-1368430103-scaled.webp`,
                                    alt: 'Slide 02'
                                },
                                {
                                    src: `${process.env.PUBLIC_URL}/images/[Downloader.la]-62a7a707589db.jpg`,
                                    alt: 'Slide 03'
                                }
                            ]} />
                    </div>
                </div>
            </div>
        </PageHeader>
        <HalfImageSection
            img={`${process.env.PUBLIC_URL}/images/controle-de-pragas-01.png`}
            imgStyle={{ width: '100%', height:'auto', right: '0', bottom: '0' }}>
            <div className="halfSectionHeader mt-5 mb-5">
                <h2 className="headingLg text-weight-semibold text-uppercase">Controle de Pragas é com Starpro!</h2>
            </div>
            
            <div className="defaultLeftContentHorizontalPadding">
                <h3 className="headingMd mb-4 c-primary">O controle de pragas e vetores no meio urbano é uma questão de saúde ambiental.</h3>

                <p className="textMd text-weight-semibold mb-3 c-text">
                    <strong>Para cada tipo de praga, um tratamento específico e eficaz realizado por um time de especialistas do segmento. Tenha controle de pragas a longo prazo com resultados reais.</strong>
                </p>

                <p className="textLg c-text mb-4">
                    Mosquitos, moscas, formigas, ratos, cupins e baratas, além de serem desagradáveis, podem transmitir inúmeras doenças com consequências desastrosas para o ser humano. E isso pode acontecer em qualquer tipo de ambiente, como sua casa ou local de trabalho.
                </p>

                <div className="d-flex flex-row align-items-center mb-5">
                    <Divider style={{ width: '140px', marginLeft: '-120px' }} />
                    <ButtonLink className="ml-4" to="#contate_nos" hash>Fale com nossos especialistas</ButtonLink>
                </div>
            </div>
        </HalfImageSection>
        <HalfImageSection
            backgroundColor="var(--primary-color)"
            img={`${process.env.PUBLIC_URL}/images/[Downloader.la]-62a7a6b5c62b8.jpg`}
            colsSpace={[ '1.5', '1' ]}
            imgStyle={{
                height: '110%',
                bottom: '-10%',
                left: '-10%',
                width: 'auto'
            }}
            imgGrayscale
            imgFlipX>
            <div className="defaultLeftContentHorizontalPadding c-white py-5">
                <h2 className="headingLg mb-5">
                    Como a Starpro controladora de pragas pode ajudar a manter seu ambiente mais seguro?
                </h2>

                <p className="textLg mb-5">
                    Utilizamos técnicas de aplicação de gel, produtos microencapsulados e serviço de controle integrado para garantir eficiência no trabalho.
                </p>

                <p className="textLg mb-5">
                    Nossa equipe de especialistas resolve o problema. Não importa o tamanho do ambiente que se encontra. Conte com o expertise da nossa controladora de pragas!
                </p>

                <p className="textLg mb-5">
                    Seu ambiente limpo e seguro por mais tempo, é a nossa meta.
                </p>
                
                <ButtonLink variant="light" to="#contate_nos" hash>Fale com nossos especialistas!</ButtonLink>
            </div>
        </HalfImageSection>
        <div className="d-flex justify-content-center py-5">
            <Divider style={{ width: '70%' }} className="my-5" />
        </div>
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

export default UrbanPestControl