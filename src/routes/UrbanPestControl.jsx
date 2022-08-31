import React, { useCallback, useMemo } from 'react'
import '../styles/UrbanPestControl.css'

import PageHeader from '../common/PageHeader/PageHeader'
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

import enviroments from '../data/enviroments'
import Translator from '../common/I18n/Translator'

const UrbanPestControl = props => {
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
        <main className="UrbanPestControl">
            <PageHeader
                navbarFixed
                padding={{
                    top: '120px'
                }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <h1 className="pageHeaderTitle mb-5">
                                <Translator path="urban_pest_control.header_title" />
                            </h1>
                            <p className="pageHeaderText mt-5 mb-5">
                                <Translator path="urban_pest_control.header_text" />
                            </p>

                            <div className="buttonWrapper">
                                <TalkWithUsButton className="pageHeaderButton">Fale com nossos especialistas</TalkWithUsButton>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 d-flex justify-content-end carouselWrapper">
                            <Carousel
                                className="pageHeaderCarousel"
                                images={[
                                    {
                                        src: `${process.env.PUBLIC_URL}/images/8a879182-1fc7-4e43-8676-19d804034feb.jpeg`,
                                        alt: 'Slide 01'
                                    },
                                    {
                                        src: `${process.env.PUBLIC_URL}/images/4756f2a2-783a-41f0-a8fa-640703839336.jpeg`,
                                        alt: 'Slide 02'
                                    },
                                    {
                                        src: `${process.env.PUBLIC_URL}/images/2357cbac-f38f-4d2a-b280-79c9e8adf9ad.jpeg`,
                                        alt: 'Slide 03'
                                    },
                                    {
                                        src: `${process.env.PUBLIC_URL}/images/0763bca4-6572-4bcf-81ba-655c238c8e03.jpeg`,
                                        alt: 'Slide 04'
                                    },
                                    {
                                        src: `${process.env.PUBLIC_URL}/images/45f54bec-4a2f-4a98-bd72-752bffce1b81.jpeg`,
                                        alt: 'Slide 05'
                                    },
                                    {
                                        src: `${process.env.PUBLIC_URL}/images/[Downloader.la]-62d73dd36c757.jpg`,
                                        alt: 'Slide 06'
                                    },
                                ]} />
                        </div>
                    </div>
                </div>
            </PageHeader>
            <HalfImageSection
                img={`${process.env.PUBLIC_URL}/images/controle-de-pragas-01.png`}
                imgStyle={{ width: '100%', height:'auto', right: '0', bottom: '0' }}>
                <div className="halfSectionHeader mt-5 mb-5">
                    <h2 className="headingLg text-weight-semibold text-uppercase">
                        <Translator path="urban_pest_control.first_section_header_title" />
                    </h2>
                </div>
                
                <div className="defaultLeftContentHorizontalPadding">
                    <h3 className="headingMd mb-4 c-primary">
                        <Translator path="urban_pest_control.first_section_first_paragraph" />
                    </h3>

                    <p className="textLg text-weight-semibold mb-3 c-text">
                        <strong>
                            <Translator path="urban_pest_control.first_section_second_paragraph" />
                        </strong>
                    </p>

                    <p className="textLg c-text mb-4">
                        <Translator path="urban_pest_control.first_section_third_paragraph" />
                    </p>

                    <div className="btnDiv d-flex flex-row align-items-center mb-5">
                        <Divider style={{ width: '140px', marginLeft: '-120px' }} />
                        <div className="buttonWrapper">
                            <TalkWithUsButton className="ml-4">Fale com nossos especialistas</TalkWithUsButton>
                        </div>
                    </div>
                </div>
            </HalfImageSection>
            <HalfImageSection
                id="ambiente_mais_seguro"
                backgroundColor="var(--primary-color)"
                img={`${process.env.PUBLIC_URL}/images/[Downloader.la]-62a7a6b5c62b8.jpg`}
                imgStyle={imageStyle}
                imgGrayscale
                imgFlipX>
                <div className="defaultLeftContentHorizontalPadding c-white py-5">
                    <h2 className="headingLg mb-5">
                        <Translator path="urban_pest_control.second_section_title" />
                    </h2>

                    <p className="textLg paragraph mb-5">
                        <Translator path="urban_pest_control.second_section_first_paragraph" />
                    </p>

                    <p className="textLg paragraph mb-5">
                        <Translator path="urban_pest_control.second_section_second_paragraph" />
                    </p>

                    <p className="textLg paragraph mb-5">
                        <Translator path="urban_pest_control.second_section_third_paragraph" />
                    </p>

                    <div className="enviromentIcons row">
                        {
                            enviroments.map(renderEnviroment)
                        }
                    </div>
                    
                    <div className="buttonWrapper">
                        <TalkWithUsButton variant="light">Fale com nossos especialistas!</TalkWithUsButton>
                    </div>
                </div>
            </HalfImageSection>
            <div id="dividerWrapper" className="d-flex justify-content-center py-5">
                <Divider style={{ width: '70%' }} className="my-5" />
            </div>
            <InternationalCertification />
            <ContactUs />
            <CallToActionBanner>
                <h1 className="headingLg text-uppercase text-weight-light mb-3">
                    <Translator path="urban_pest_control.banner_bottom_title" />
                </h1>
                <h2 className="headingMd">
                    <Translator path="urban_pest_control.banner_bottom_subtitle" />
                </h2>
            </CallToActionBanner>
            <GoToTop />
        </main>
    )
}

export default UrbanPestControl