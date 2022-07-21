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
                        <h1 className="pageHeaderTitle text-uppercase mb-5">Tratamento Fitossanitário Starpro</h1>
                        <p className="pageHeaderText mt-5 mb-5">
                            Especialista em controle de pragas para garantir que suas cargas fiquem seguras.
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
                <h2 className="headingLg text-weight-semibold">Controle de pragas através de técnicas eficientes e produtos de alta qualidade</h2>
            </div>
            <div className="defaultLeftContentHorizontalPadding pb-5">
                <h2 className="headingLg c-primary text-uppercase mb-4">Tratamento Térmico</h2>

                <p className="textLg mb-3 c-text">
                    <strong>Os tratamentos térmicos são uma ótima opção pois não agridem a natureza.</strong>
                </p>
                <p className="textLg mb-5 c-text">
                    A temperatura atua de maneira direta na fisiologia de um inseto. Ao alterar a temperatura, você pode alterar o metabolismo, a respiração e o movimento de um inseto. Por isso os tratamentos térmicos funcionam muito bem para realizar o controle de pragas em cargas.
                </p>

                <h2 className="headingLg c-primary text-uppercase mb-4">Fumigação</h2>
                <p className="textLg mb-3 c-text">
                    A fumigação com Fosfina (PH3) é muito eficaz e amplamente utilizado para fumigação de grãos armazenadas. Ela é aprovada para aplicação em produtos agrícolas crus, alimentos processados, ração animal e seus ingredientes, tabaco e outros itens não alimentares.
                </p>
                <p className="textLg mb-4 c-text">
                    A fumigação com Brometo de Metila é de extrema eficiência e importantíssimo para os países que prezam por sua diversidade natural. Ele é um produto com amplo espectro de ação e com uma operacionalidade para cargas em contêiner extremamente eficiente.
                </p>
                
                <Divider className="leftSideDivider" />
            </div>
        </HalfImageSection>
        <BusinessSecurity />
        <InternationalCertification />
        <ContactUs />
        <CallToActionBanner>
            <h1 className="headingLg text-uppercase text-weight-light mb-3">
                Tratamento térmico é com a Starpro
            </h1>
            <h2 className="headingMd">Estamos prontos para lhe atender</h2>
        </CallToActionBanner>
        <GoToTop />
    </section>
)

export default PhytossanitaryTreatment