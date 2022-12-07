import React from 'react'
import '../styles/PlantSanitation.css'

import PageHeader from '../common/PageHeader/PageHeader'
import InternationalCertification from '../common/InternationalCertification/InternationalCertification'
import ContactUs from '../common/ContactUs/ContactUs'
import HalfImageSection from '../common/HalfImageSection/HalfImageSection'
import CallToActionBanner from '../common/CallToActionBanner/CallToActionBanner'
import GoToTop from '../common/GoToTop/GoToTop'
import TalkWithUsButton from '../common/TalkWithUsButton/TalkWithUsButton'

import Carousel from '../common/Carousel/Carousel'
import Translator from '../common/I18n/Translator'
import LicenseBanner from '../common/LicenseBanner/LicenseBanner'


const PlantSanitation = props => (
    <main className="PlantSanitation">
        <PageHeader
            navbarFixed
            padding={{
                top: '120px'
            }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <h1 className="pageHeaderTitle mb-5">
                            <Translator path="plant_sanitation.header_title" />
                        </h1>
                        <p className="pageHeaderText mt-5 mb-5">
                            <Translator path="plant_sanitation.header_text" />
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
                                    src: `${process.env.PUBLIC_URL}/images/5.jpeg`,
                                    alt: 'Slide 01'
                                },
                                {
                                    src: `${process.env.PUBLIC_URL}/images/34.jpg`,
                                    alt: 'Slide 02'
                                },
                                {
                                    src: `${process.env.PUBLIC_URL}/images/35.jpg`,
                                    alt: 'Slide 04'
                                },
                                {
                                    src: `${process.env.PUBLIC_URL}/images/cortando_grama_cima.jpg`,
                                    alt: 'Slide 05'
                                },
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
                <h2 className="headingLg c-white text-weight-semibold">
                    <Translator path="plant_sanitation.first_section_header_title" />
                </h2>
            </div>
            <div className="defaultLeftContentHorizontalPadding">
                <p className="textXl mt-5 mb-5 c-text">
                    <Translator path="plant_sanitation.first_section_first_paragraph" />
                </p>
                
                <div className="btnDiv">
                    <TalkWithUsButton className="mt-4 mb-5" />
                </div>     
            </div>
        </HalfImageSection>
        <LicenseBanner />
        <ContactUs />
        <CallToActionBanner>
            <h1 className="headingLg text-uppercase text-weight-light mb-3">
                <Translator path="plant_sanitation.banner_bottom_title" />
            </h1>
            <h2 className="headingMd">
                <Translator path="plant_sanitation.banner_bottom_subtitle" />
            </h2>
        </CallToActionBanner>
        <GoToTop />
    </main>
)

export default PlantSanitation