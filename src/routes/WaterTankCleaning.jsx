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
import Translator from '../common/I18n/Translator'

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
                            <h1 className="pageHeaderTitle mb-5">
                                <Translator path="cleaning_and_disinfection_of_water_tanks.header_title" />
                            </h1>
                            <p className="pageHeaderText mt-5 mb-5">
                                <Translator path="cleaning_and_disinfection_of_water_tanks.header_text" />
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
                <h2 className="headingLg text-weight-semibold">
                    <Translator path="cleaning_and_disinfection_of_water_tanks.first_section_header_title" />
                </h2>
            </div>
            <div className="defaultLeftContentHorizontalPadding pb-5">
                <h2 className="headingLg c-primary text-uppercase mb-4">
                    <Translator path="cleaning_and_disinfection_of_water_tanks.first_section_first_article_header" />
                </h2>
                <p className="textLg mb-5 c-text">
                    <Translator path="cleaning_and_disinfection_of_water_tanks.first_section_first_article_paragraph" />
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
                    <h2 className="headingLg c-white text-weight-semibold mb-5">
                        <Translator path="cleaning_and_disinfection_of_water_tanks.second_section_header_title" />
                    </h2>
                    <div className="mt-3 c-white">
                        <p className="textXl">
                            <Translator path="cleaning_and_disinfection_of_water_tanks.second_section_text" />
                        </p>
                    </div>
                </div>
        </HalfImageSection>
        <div className="d-flex justify-content-center py-5">
            <TalkWithUsButton className="my-5" />
        </div>
        <InternationalCertification />
        <ContactUs />
        <CallToActionBanner>
            <h1 className="headingLg text-uppercase text-weight-light mb-3">
                <Translator path="cleaning_and_disinfection_of_water_tanks.banner_bottom_title" />
            </h1>
            <h2 className="headingMd">
                <Translator path="cleaning_and_disinfection_of_water_tanks.banner_bottom_subtitle" />
            </h2>
        </CallToActionBanner>
        <GoToTop />
    </main>
)



export default WaterTankCleaning