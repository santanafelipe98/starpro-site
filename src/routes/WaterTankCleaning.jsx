import React from 'react'

import CallToActionBanner from '../common/CallToActionBanner/CallToActionBanner'
import ContactUs from '../common/ContactUs/ContactUs'
import InternationalCertification from '../common/InternationalCertification/InternationalCertification'
import PageHeader from '../common/PageHeader/PageHeader'
import LicenseBanner from '../common/LicenseBanner/LicenseBanner'
import HalfImageSection from '../common/HalfImageSection/HalfImageSection'
import Carousel from '../common/Carousel/Carousel'
import GoToTop from '../common/GoToTop/GoToTop'
import TalkWithUsButton from '../common/TalkWithUsButton/TalkWithUsButton'
import '../styles/WaterTankCleaning.css'

const WaterTankCleaning = props => (
    <main className="WaterTankCleaning">
        <PageHeader
            navbarFixed
            padding={{
                top: '120px'
            }}>
            <div className="pageHeaderContent">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <h1 className="pageHeaderTitle mb-5">Limpeza e Desinfecção de Caixa D'água</h1>
                            <p className="pageHeaderText mt-5 mb-5">
                                Especialista em higienização dos reservatórios de água potável.
                            </p>

                            <div className="buttonWrapper">
                                <TalkWithUsButton className="pageHeaderButton mt-4">Fale com nossos especialistas</TalkWithUsButton>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 d-flex justify-content-end carouselWrapper">
                            <Carousel
                                className="pageHeaderCarousel"
                                images={[
                                    {
                                        src: `${process.env.PUBLIC_URL}/images/caixa-dagua2.jpeg`,
                                        alt: 'Slide 01'
                                    },
                                    {
                                        src: `${process.env.PUBLIC_URL}/images/limpeza de caixa dagua.jpeg`,
                                        alt: 'Slide 02'
                                    },
                                    {
                                        src: `${process.env.PUBLIC_URL}/images/4.jpeg`,
                                        alt: 'Slide 03'
                                    },
                                    {
                                        src: `${process.env.PUBLIC_URL}/images/11.jpeg`,
                                        alt: 'Slide 04'
                                    }
                                ]} />
                        </div>
                    </div>
                </div>
            </div>
        </PageHeader>
        <HalfImageSection
            img={`${process.env.PUBLIC_URL}/images/Imagem 41.png`}
            imgAlt="Colaborador"
            imgStyle={{
                width: 'auto',
                height: '95%',
                bottom: '0'
            }}>
            <div className="halfSectionHeader mt-5 mb-5">
                <h2 className="headingLg text-weight-semibold">Controle de vegetação através de técnicas eficientes e produtos de alta qualidade</h2>
            </div>
            <div className="defaultLeftContentHorizontalPadding pb-5">
                <h2 className="headingLg c-primary text-uppercase mb-4">O Tratamento</h2>
                <p className="textLg mb-5 c-text">
                    A higienização dos reservatórios de água potável, segundo a ANVISA, deve ser higienizada a cada 06 meses para evitar a proliferação de microrganismos que comprometem a potabilidade da água. Este procedimento consiste na limpeza mecânica e na desinfecção química das paredes internas do reservatório atendendo as legislações vigentes.
                </p>

                <div className="btnDiv">
                    <TalkWithUsButton>Fale com nossos especialistas</TalkWithUsButton>
                </div>
            </div>
        </HalfImageSection>
        <LicenseBanner />
        <HalfImageSection
            img={`${process.env.PUBLIC_URL}/images/caixa-dagua1.jpeg`}
            imgAlt="Caixa d'água em uma laje"
            backgroundColor="var(--primary-color)"
            centerContent
            imgGrayscale>
                <div className="defaultLeftContentHorizontalPadding">
                    <h2 className="headingLg c-white text-weight-semibold mb-5">Como a Starpro deixa seu ambiente mais seguro através da Limpeza e Desinfecção?</h2>
                    <div className="mt-3 c-white">
                        <p className="textXl">
                            Depois de uma análise realizada pelos especialistas da Starpro, os profissionais dão início ao procedimento através de técnicas e produtos especializados.
                        </p>
                    </div>
                </div>
        </HalfImageSection>
        <div className="d-flex justify-content-center py-5">
            <TalkWithUsButton className="my-5">Fale com nossos especialistas</TalkWithUsButton>
        </div>
        <InternationalCertification />
        <ContactUs />
        <CallToActionBanner>
            <h1 className="headingLg text-uppercase text-weight-light mb-3">
                Limpeza e Desinfecção de Caixa D'água é com a Starpro
            </h1>
            <h2 className="headingMd">Estamos prontos para lhe atender</h2>
        </CallToActionBanner>
        <GoToTop />
    </main>
)



export default WaterTankCleaning