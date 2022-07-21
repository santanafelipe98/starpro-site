import React, { useCallback, useMemo } from 'react'

import PageHeader from '../common/PageHeader/PageHeader'
import LicenseBanner from '../common/LicenseBanner/LicenseBanner'
import ButtonLink from '../common/ButtonLink/ButtonLink'
import Carousel from '../common/Carousel/Carousel'
import InternationalCertification from '../common/InternationalCertification/InternationalCertification'
import ContactUs from '../common/ContactUs/ContactUs'
import CallToActionBanner from '../common/CallToActionBanner/CallToActionBanner'
import HalfImageSection from '../common/HalfImageSection/HalfImageSection'
import Divider from '../common/Divider/Divider'
import Icon from '../common/Icon/Icon'
import GoToTop from '../common/GoToTop/GoToTop'
import TalkWithUsButton from '../common/TalkWithUsButton/TalkWithUsButton'

import { useResize } from '../hooks/useResize'

import '../styles/SanitizationOfEnviroment.css'

import enviroments from '../data/enviroments'

const SanitizationOfEnviroments = props => {
    const { width:innerWidth } = useResize()

    const renderEnviroment = useCallback((enviroment, i) => (
        <div className="col-6 col-sm-4 col-md-4 col-lg-6 col-xl-4 mb-5">
            <Icon key={`enviroment${i}`} { ...enviroment } />
        </div>
    ), [])

    const imageStyle = useMemo(() => {
        const BREAKPOINT = 991.8

        if (innerWidth <= BREAKPOINT) {
            return null
        } else {
            return {
                height: '110%',
                bottom: '-10%',
                left: '-50%',
                width: 'auto'
            }
        }
    }, [innerWidth])

    return (
        <main className="SanitizationOfEnviroments">
            <PageHeader
                navbarFixed
                padding={{
                    top: '120px'
                }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <h1 className="pageHeaderTitle mb-5">Sanitização de Ambientes</h1>
                            <p className="pageHeaderText mt-5 mb-5">
                                Especialista em serviço de desinfecção contra vírus, bactérias e fungos.
                            </p>

                            <div className="buttonWrapper">
                                <ButtonLink to="https://api.whatsapp.com/send/?phone=557183531931&text=Preciso+de+um+atendimento.&type=phone_number&app_absent=0" className="pageHeaderButton mt-4">Fale com nossos especialistas</ButtonLink>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 d-flex justify-content-end carouselWrapper">
                            <Carousel
                                className="pageHeaderCarousel"
                                images={[
                                    {
                                        src: `${process.env.PUBLIC_URL}/images/9.jpeg`,
                                        alt: 'Slide 01'
                                    },
                                    {
                                        src: `${process.env.PUBLIC_URL}/images/10.jpeg`,
                                        alt: 'Slide 02'
                                    },
                                    {
                                        src: `${process.env.PUBLIC_URL}/images/22.jpeg`,
                                        alt: 'Slide 03'
                                    },
                                    {
                                        src: `${process.env.PUBLIC_URL}/images/23.jpeg`,
                                        alt: 'Slide 04'
                                    },
                                    {
                                        src: `${process.env.PUBLIC_URL}/images/24.jpeg`,
                                        alt: 'Slide 05'
                                    }
                                ]} />
                        </div>
                    </div>
                    <LicenseBanner titleColor="var(--primary-color)" className="mt-5" />
                </div>
            </PageHeader>
            <HalfImageSection
                id="o_tratamento"
                img={`${process.env.PUBLIC_URL}/images/Imagem 43.png`}
                imgStyle={{ height: '90%', width: 'auto', bottom: '0' }}>
                <div className="halfSectionHeader mt-5 mb-5">
                    <h2 className="headingXl text-uppercase c-white text-weight-semibold">O Tratamento</h2>
                </div>
                <div className="defaultLeftContentHorizontalPadding pb-5">
                    <p className="textLg mb-5 c-text">
                        A sanitização de ambientes impede a dispersão de bactérias e o vírus causador da COVID-19, garantindo a segurança biológica através da aplicação de um produto sanitizante por técnicos especialistas dotados de equipamentos de alta tecnologia, formando uma película protetora em todas as superfícies como pisos, paredes, janelas, mobílias e estruturas de alto contato (corrimão, maçanetas, puxadores de gavetas e armários).
                    </p>
                    
                    <div className="btnDiv">
                        <TalkWithUsButton>Fale com nossos especialistas</TalkWithUsButton>
                    </div>
                </div>
            </HalfImageSection>
            <HalfImageSection
                id="controladora_de_pragas"
                backgroundColor="var(--primary-color)"
                img={`${process.env.PUBLIC_URL}/images/[Downloader.la]-62a7a6b5c62b8.jpg`}
                imgStyle={imageStyle}
                imgGrayscale
                imgFlipX>
                <div className="defaultLeftContentHorizontalPadding c-white py-5">
                    <h2 className="headingLg mb-5">
                        Como a Starpro deixa seu ambiente mais seguro através da sanitização e desinfecção?
                    </h2>

                    <p className="textLg mb-5">
                        Depois de uma análise realizada pelos especialistas da Starpro, os profissionais dão início ao procedimento através de técnicas e produtos especializados.
                    </p>

                    <p className="textLg mb-5">
                        Nossa equipe de especialistas resolve o problema. Não importa o tamanho do ambiente que se encontra. Conte com o expertise da nossa em sanitização e desinfecção. Seu ambiente limpo e seguro por mais tempo, é a nossa meta.
                    </p>

                    <p className="textXl mb-3">
                        <strong>Seu ambiente limpo e seguro.</strong>
                    </p>
                    
                    <div className="wrapper">
                        <Divider className="bg-white mb-5" style={{ width: '140px', marginLeft: '-120px' }} />

                        <div className="row environmentIcons">
                            {
                                enviroments.map(renderEnviroment)
                            }
                        </div>
                    </div>
                    
                    <div className="btnDiv">
                        <TalkWithUsButton className="mt-4" variant="light" >Fale com nossos especialistas!</TalkWithUsButton>
                    </div>
                </div>
            </HalfImageSection>
            <InternationalCertification className="mt-5" />
            <ContactUs />
            <CallToActionBanner>
                <h1 className="headingLg text-uppercase text-weight-light mb-3">
                    Sanitização de Ambientes é com a Starpro
                </h1>
                <h2 className="headingMd">Estamos prontos para lhe atender</h2>
            </CallToActionBanner>
            <GoToTop />
        </main>
    )
}

export default SanitizationOfEnviroments