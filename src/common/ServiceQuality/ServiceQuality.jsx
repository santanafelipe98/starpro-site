import React from 'react'
import Slider from 'react-slick'
import './ServiceQuality.css'
import ButtonLink from '../ButtonLink/ButtonLink'

const ServiceQuality = props => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 5000,
        slidesToScroll: 1,
        slidesToShow: 1,
    }

    return (
        <section className="ServiceQuality">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 bg-primary left">
                        <h2 className="headingLg mb-5 c-white">
                            Qualidade de atendimento e experiência que ganharam a confiança de nossos clientes
                        </h2>
                        <p className="c-white">
                            Um pouco de quem tem contratado a Starpro e o que elas acham do nosso serviço.
                        </p>
                    </div>
                    <div className="col-md-6 right">
                        <Slider
                            {...settings}>
                            <div className="testimonial">
                                <p className="text">
                                    “Depois de 3 experiências frustadas com outras empresas, finalmente encontrei uma empresa séria e profissional.”
                                </p>
                                <p className="author">
                                    - Sócio Diretor Ultra Officies -
                                </p>
                            </div>
                            <div className="testimonial">
                                <p className="text">
                                    “Depois de 3 experiências frustadas com outras empresas, finalmente encontrei uma empresa séria e profissional.”
                                </p>
                                <p className="author">
                                    - Sócio Diretor Ultra Officies -
                                </p>
                            </div>
                            <div className="testimonial">
                                <p className="text">
                                    “Depois de 3 experiências frustadas com outras empresas, finalmente encontrei uma empresa séria e profissional.”
                                </p>
                                <p className="author">
                                    - Sócio Diretor Ultra Officies -
                                </p>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="row">
                    <div className="container d-flex justify-content-center">
                        <ButtonLink to="#contate_nos" hash className="btnLink" size="lg">
                            Fale com nossos especialistas
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceQuality