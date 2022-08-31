import React from 'react'
import PageHeader from '../common/PageHeader/PageHeader'
import ButtonLink from '../common/ButtonLink/ButtonLink'
import Carousel from '../common/Carousel/Carousel'
import InternationalCertification from '../common/InternationalCertification/InternationalCertification'
import KnowUs from '../common/KnowUs'
import ContactUs from '../common/ContactUs/ContactUs'
import CallToActionBanner from '../common/CallToActionBanner/CallToActionBanner'
import HalfImageSection from '../common/HalfImageSection/HalfImageSection'
import Divider from '../common/Divider/Divider'
import BusinessSecurity from '../common/BusinessSecurity/BusinessSecurity'
import '../styles/PhytossanitaryTreatment.css'
import GoToTop from '../common/GoToTop/GoToTop'
import TalkWithUsButton from '../common/TalkWithUsButton/TalkWithUsButton'
import Translator from '../common/I18n/Translator'

const PhytossanitaryTreatment = props => (
    <section className="PhytossanitaryTreatment">
        <PageHeader
            navbarFixed
            padding={{
                top: '120px'
            }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <h1 className="pageHeaderTitle text-uppercase mb-5">
                            <Translator path="starpro_phytosanitary_treatment.header_title" />
                        </h1>
                        <p className="pageHeaderText mt-5 mb-5">
                            <Translator path="starpro_phytosanitary_treatment.header_text" />
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
                                    src: `${process.env.PUBLIC_URL}/images/plataformas.jpg`,
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
            img={`${process.env.PUBLIC_URL}/images/Imagem 34.png`}
            imgStyle={{
                width: 'auto',
                height: '90%',
                bottom: '0'
            }}>
            <div className="halfSectionHeader mt-5 mb-5">
                <h2 className="headingLg text-weight-semibold">
                    <Translator path="starpro_phytosanitary_treatment.first_section_header_title" />
                </h2>
            </div>
            <div className="defaultLeftContentHorizontalPadding pb-5">
                <h2 className="headingLg c-primary text-uppercase mb-4">
                    <Translator path="starpro_phytosanitary_treatment.first_section_first_article_header" />
                </h2>

                <p className="textLg mb-3 c-text">
                    <strong><Translator path="starpro_phytosanitary_treatment.first_section_first_article_first_paragraph" /></strong>
                </p>
                <p className="textLg mb-5 c-text">
                <Translator path="starpro_phytosanitary_treatment.first_section_first_article_second_paragraph" />
                </p>

                <h2 className="headingLg c-primary text-uppercase mb-4">
                    <Translator path="starpro_phytosanitary_treatment.first_section_second_article_header" />
                </h2>
                <p className="textLg mb-3 c-text">
                    <Translator path="starpro_phytosanitary_treatment.first_section_second_article_first_paragraph" />
                </p>
                <p className="textLg mb-4 c-text">
                    <Translator path="starpro_phytosanitary_treatment.first_section_second_article_second_paragraph" />
                </p>
                
                <Divider className="leftSideDivider" />
            </div>
        </HalfImageSection>
        <BusinessSecurity />
        <InternationalCertification />
        <ContactUs />
        <CallToActionBanner>
            <h1 className="headingLg text-uppercase text-weight-light mb-3">
                <Translator path="starpro_phytosanitary_treatment.banner_bottom_title" />
            </h1>
            <h2 className="headingMd">
                <Translator path="starpro_phytosanitary_treatment.banner_bottom_subtitle" />
            </h2>
        </CallToActionBanner>
        <GoToTop />
    </section>
)

export default PhytossanitaryTreatment