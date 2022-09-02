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
import Translator from '../common/I18n/Translator'

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
                            <h1 className="pageHeaderTitle mb-5">
                                <Translator path="sanitization_of_environments.header_title" />
                            </h1>
                            <p className="pageHeaderText mt-5 mb-5">
                                <Translator path="sanitization_of_environments.header_text" />
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
                    <h2 className="headingXl text-uppercase c-white text-weight-semibold">
                        <Translator path="sanitization_of_environments.first_section_header_title" />
                    </h2>
                </div>
                <div className="defaultLeftContentHorizontalPadding pb-5">
                    <p className="textLg mb-5 c-text">
                        <Translator path="sanitization_of_environments.first_section_text" />
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
                        <Translator path="sanitization_of_environments.second_section_header_title" />
                    </h2>

                    <p className="textLg mb-5">
                        <Translator path="sanitization_of_environments.second_section_first_paragraph" />
                    </p>

                    <p className="textLg mb-5">
                        <Translator path="sanitization_of_environments.second_section_second_paragraph" />
                    </p>

                    <p className="textXl mb-3">
                        <strong><Translator path="sanitization_of_environments.second_section_third_paragraph" /></strong>
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
                        <TalkWithUsButton className="mt-4" variant="light" />
                    </div>
                </div>
            </HalfImageSection>
            <ContactUs />
            <CallToActionBanner>
                <h1 className="headingLg text-uppercase text-weight-light mb-3">
                    <Translator path="sanitization_of_environments.banner_bottom_title" />
                </h1>
                <h2 className="headingMd">
                    <Translator path="sanitization_of_environments.banner_bottom_subtitle" />
                </h2>
            </CallToActionBanner>
            <GoToTop />
        </main>
    )
}

export default SanitizationOfEnviroments