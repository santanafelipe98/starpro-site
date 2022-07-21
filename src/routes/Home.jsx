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
                        A Starpro realiza o Tratamento Fitossanitário,
                        Controle de Pragas, Sanitização de Ambientes,
                        <span className="c-primary"> com excelência e profissionalismo.</span>
                    </h2>
                </Container>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <Card
                                className="mr-4"
                                title="A StarPro está presente em toda a Bahia…"
                                buttonLink="a-starpro">
                                <article>
                                    <p className="textLg">
                                        Uma empresa <span className="c-primary">líder de mercado, reconhecida pelo seu alto padrão de qualidade</span>. Estamos presentes em mais de 7 cidades e em toda Região Metropolitana de Salvador fornecendo serviço de qualidade e responsabilidade para todos.
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
                                        Certificado dos<br />
                                        <strong>
                                            Conselhos Regionais<br />
                                            de Química e Biologia
                                        </strong>
                                    </p>
                                </div>
                                <p className="textLg">
                                    Tudo dentro dos padrões para melhor lhe atender. A StarPro tem como propósito prestar um serviço de qualidade e segurança, proporcionando satisfação dos nossos clientes e o desenvolvimento sustentável.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            <Section
                id="nossos_servicos"
                title="Nossos serviços">
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
                        <p className="headingSm">A StarPro é uma empresa de Saúde Ambiental que atua com especialização na prestação de serviços em Controle de Pragas Urbanas, Higienização de Caixa D’Água, Tratamento Fitossanitário e entre outros.</p>
                    </div>
                    <div className="aboutUsBody">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 brandQuality">
                                <h4 className="brandQualityTitle">Público</h4>
                                <div className="brandQualityInfo">
                                    <h3>
                                        <span className="bigNumber">8</span> mil<br />
                                        <small>serviços prestados</small>
                                    </h3>
                                </div>
                                <p className="brandQualityDescription">
                                    Nós alcançamos e geramos seguranças a milhares de pessoas na Bahia
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 brandQuality">
                                <h4 className="brandQualityTitle">Onde atuamos?</h4>
                                <div className="brandQualityInfo">
                                    <h3>
                                        Toda<br />
                                        a Bahia
                                    </h3>
                                </div>
                                <p className="brandQualityDescription">
                                    Estamos presentes em Empresas, Faculdades, Lojas, Mercados em todo o Estado da Bahia
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 brandQuality">
                                <h4 className="brandQualityTitle">Serviços</h4>
                                <div className="brandQualityInfo">
                                    <h3>
                                        <span className="bigNumber">6</span> Serviços
                                    </h3>
                                </div>
                                <p className="brandQualityDescription">
                                    Atuamos nos mais diversos segmentos, uma estrutura completa para melhor atender.
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3 brandQuality">
                                <h4 className="brandQualityTitle">Avaliação</h4>
                                <div className="brandQualityInfo">
                                    <h3>
                                        Nota <span className="bigNumber">5</span>
                                    </h3>
                                    <img src={`${process.env.PUBLIC_URL}/images/estrelas.png`} alt="Estrelas" className="rating" />
                                </div>
                                <p className="brandQualityDescription">
                                    Nota máxima em avaliação no Google.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <InternationalCertification id="certificados" />
            <ServiceQuality />
            <OurCustomers />
            <ContactUs />
            <CallToActionBanner>
                <div>
                    <h2 className="headingLg text-center c-primary">Fale com um especialista da Starpro</h2>
                    <h2 className="headingLg text-center">Estamos prontos para lhe atender</h2>
                </div>
            </CallToActionBanner>

            {/* <Container className="callToAction">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div>
                            <h2 className="headingLg text-center c-primary">Fale com um especialista da Starpro</h2>
                            <h2 className="headingLg text-center">Estamos prontos para lhe atender</h2>
                        </div>
                        <TalkWithUsButton size="lg">Fale com nossos especialistas</TalkWithUsButton>
                    </div>
                    
                </div>
            </Container> */}
            <GoToTop />
        </main>
    )
}

export default Home