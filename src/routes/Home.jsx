import React, { useCallback } from 'react'
import Container from '../layout/Container/Container'
import Jumbotron from '../layout/Jumbotron/Jumbotron'
import '../styles/Home.css'
import Card from '../common/Card/Card'
import Section from '../layout/Section/Section'
import OurCustomers from '../common/OurCustomers'

import services from '../data/services'
import ServiceItem from '../common/ServiceItem/ServiceItem'
import Slider from 'react-slick'
import InternationalCertification from '../common/InternationalCertification/InternationalCertification'
import ServiceQuality from '../common/ServiceQuality'
import ContactUs from '../common/ContactUs/ContactUs'
import GoToTop from '../common/GoToTop/GoToTop'
import CallToActionBanner from '../common/CallToActionBanner/CallToActionBanner'
import { useRef } from 'react'
import Translator from '../common/I18n/Translator'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const NextButton = props => (
    <button
        {...props}
        className={`${props.className || ''} nextButton`}>
        { '>' }
    </button>
)

const PrevButton = props => (
    <button
        {...props}
        className={`${props.className || ''} prevButton`}>
        { '<' }
    </button>
)

const Home = props => {
    const renderService = useCallback(service => (
        <ServiceItem
            className="mr-5"
            key={service._id}
            { ...service } />
    ), [])

    const { i18n: { language } } = useTranslation()

    const slider = useRef(null)

    const handleNext= useCallback(() => {
        if (slider) {
            slider.current.slickNext()
        }
    }, [ slider ])

    const handlePrev = useCallback(() => {
        if (slider) {
            slider.current.slickPrev()
        }
    }, [ slider ])

    const serviceSliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 8000,
        slidesToScroll: 2,
        slidesToShow: 2,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }],
    }

    return (
        <main className="Home">
            <Jumbotron />
            <section className="theCompany">
                <Container className="popup d-flex flex-row jusitfy-content-center align-items-center">
                    <h2 className="text-center">
                        <Translator path="home.floating_container_text_black" />
                        <span className="c-primary"><Translator path="home.floating_container_text_green" /></span>
                    </h2>
                </Container>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <Card
                                className="mr-4"
                                title={ <Translator path="home.first_card_title" /> }
                                buttonLink="a-starpro">
                                <article>
                                    <p className="textLg">
                                        <Translator path="home.first_card_text_black_slice_1" /> <span className="c-primary"><Translator path="home.first_card_text_green" /></span><Translator path="home.first_card_text_black_slice_2" />
                                    </p>
                                </article>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <Card
                                className="ml-4 bg-dark"
                                buttonLink="#certificados"
                                hashLink
                                textStyle={{
                                    color: '#fff'
                                }}>
                                <div className="d-flex align-items-start cardHeader">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/qualidade.png`}
                                        alt="Ícone de medalha"
                                        className="cardHeaderIcon" />
                                    <p className="cardHeaderTitle">
                                        <Translator path="home.second_card_title_first_line" /><br />
                                        <strong>
                                        <Translator path="home.second_card_title_second_line" /><br />
                                         <Translator path="home.second_card_title_third_line" />
                                        </strong>
                                    </p>
                                </div>
                                <p className="textLg">
                                <Translator path="home.second_card_text" />
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            <Section
                id="nossos_servicos"
                title={ <Translator path="services.heading" /> }>
                <Slider
                    ref={slider}
                    className="mt-5"
                    { ...serviceSliderSettings }>
                    { services.map(renderService) }
                </Slider>
                <NextButton onClick={handleNext} />
                <PrevButton onClick={handlePrev} />
            </Section>
            <Section
                className="aboutUs"
                title="Quem somos"
                divider>
                <Container className="mt-5 aboutUsContainer">
                    <div className="aboutUsHeader">
                        <p className="headingSm">
                            <Translator path="about_starpro.card_title" />
                        </p>
                    </div>
                    <div className="aboutUsBody">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 brandQuality">
                                <h4 className="brandQualityTitle"><Translator path="about_starpro.public_quality_item_title" /></h4>
                                <div className="brandQualityInfo">
                                    <h3>
                                        <span className="bigNumber"><Translator path="about_starpro.public_quality_item_subtitle_first_line_number" /></span> <Translator path="about_starpro.public_quality_item_subtitle_first_line_text" /><br />
                                        <small><Translator path="about_starpro.public_quality_item_subtitle_second_line" /></small>
                                    </h3>
                                </div>
                                <p className="brandQualityDescription">
                                    <Translator path="about_starpro.public_quality_item_text" />
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 brandQuality">
                                <h4 className="brandQualityTitle"><Translator path="about_starpro.where_do_we_worl_quality_item_title" /></h4>
                                <div className="brandQualityInfo">
                                    <h3>
                                        <Translator path="about_starpro.where_do_we_worl_quality_item_subtitle_first_line" /><br />
                                        <Translator path="about_starpro.where_do_we_worl_quality_item_subtitle_second_line" />
                                    </h3>
                                </div>
                                <p className="brandQualityDescription">
                                    <Translator path="about_starpro.where_do_we_worl_quality_item_text" />
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 brandQuality">
                                <h4 className="brandQualityTitle"><Translator path="about_starpro.services_quality_item_title" /></h4>
                                <div className="brandQualityInfo">
                                    <h3>
                                        <span className="bigNumber"><Translator path="about_starpro.services_quality_item_subtitle_first_line_number" /></span> <Translator path="about_starpro.services_quality_item_subtitle_second_line_text" />
                                    </h3>
                                </div>
                                <p className="brandQualityDescription">
                                    <Translator path="about_starpro.services_quality_item_text" />
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 brandQuality">
                                <h4 className="brandQualityTitle"><Translator path="about_starpro.rating_quality_item_title" /></h4>
                                <div className="brandQualityInfo">
                                    <h3>
                                        {
                                            language === "en-US"
                                                ?   <><span className="bigNumber"><Translator path="about_starpro.rating_quality_items_subtitle_number" /></span> <Translator path="about_starpro.rating_quality_items_subtitle_text" /></>
                                                : <><Translator path="about_starpro.rating_quality_items_subtitle_text" /> <span className="bigNumber"><Translator path="about_starpro.rating_quality_items_subtitle_number" /></span></>
                                        }
                                    </h3>
                                    <img src={`${process.env.PUBLIC_URL}/images/estrelas.png`} alt="Estrelas" className="rating" />
                                </div>
                                <p className="brandQualityDescription">
                                    <Translator path="about_starpro.rating_quality_item_text" />
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <ServiceQuality />
            <OurCustomers />
            <ContactUs />
            <CallToActionBanner>
                <div>
                    <h2 className="headingLg text-center c-primary">
                        <Translator path="home.banner_bottom_text_green" />
                    </h2>
                    <h2 className="headingLg text-center">
                        <Translator path="home.banner_bottom_text_black" />
                    </h2>
                </div>
            </CallToActionBanner>
            <GoToTop />
        </main>
    )
}

export default Home