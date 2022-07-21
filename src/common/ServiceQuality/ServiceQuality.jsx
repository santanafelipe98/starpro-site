import React from 'react'
import Slider from 'react-slick'
import './ServiceQuality.css'
import TalkWithUsButton from '../TalkWithUsButton/TalkWithUsButton'
import { useCallback } from 'react'

const testimonials = [
    {
        text: 'Desde o atendimento até a conclusão do serviço foram extremamente profissionais!',
        author: 'Tiago Botelho',
        role: 'Sócio Diretor Saneando Engenharia'
    },
    {
        text: 'Empresa excelente no serviço, com conduta, procedimento e profissionalismo de qualidade e com aplicação dos produtos de forma técnica, segura e dinâmica.',
        author: 'Madisom Xavier'
    },
    {
        text: 'Excelente serviço! Equipe comprometida em levar o bem-estar e segurança através do controle de pragas. Recomendo!',
        author: 'Evelin Lisboa'
    },
    {
        text: 'Equipe profissional e atenciosa!',
        author: 'Fábio Müller',
        role: 'Gerente de operações da VBR Logística'
    },
    {
        text: 'Experiência maravilhosa. Empresa muito profissional e correta. Parabéns.',
        author: 'Rosana Fialho'
    }
]

const ServiceQuality = props => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        slidesToShow: 1,
    }

    const renderTestimonial = useCallback((t, i) => (
        <div key={`testimonial${i}`} className="testimonial">
            <p className="textXX">
                { t.text }
            </p>
            <p className="textXX author">
                { t.author }<br/>
                { t.role }
            </p>
        </div>
    ))

    return (
        <section className="ServiceQuality">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6 bg-primary left">
                        <h2 className="headingXl mb-5 c-white">
                            Qualidade de atendimento e experiência que ganharam a confiança de nossos clientes
                        </h2>
                        <p className="textLg c-white">
                            Um pouco de quem tem contratado a Starpro e o que elas acham do nosso serviço.
                        </p>
                    </div>
                    <div className="col-md-12 col-lg-6 right">
                        <Slider
                            className="testimonialSlider"
                            {...settings}>
                            { testimonials.map(renderTestimonial) }
                        </Slider>
                    </div>
                </div>
                <div className="row">
                    <div className="container d-flex justify-content-center">
                        <TalkWithUsButton className="btnLink" size="lg">
                            Fale com nossos especialistas
                        </TalkWithUsButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceQuality