import React from 'react'
import Slider from 'react-slick'
import './ServiceQuality.css'
import TalkWithUsButton from '../TalkWithUsButton/TalkWithUsButton'
import { useCallback } from 'react'
import Translator from '../I18n/Translator'

const testimonials = [
    {
        text: <Translator path="testimonials.testimonial_text_1" />,
        author: <Translator path="testimonials.testimonial_author_1" />,
        role: <Translator path="testimonials.testimonial_author_role_1" />
    },
    {
        text: <Translator path="testimonials.testimonial_text_2" />,
        author: <Translator path="testimonials.testimonial_author_2" />,
    },
    {
        text: <Translator path="testimonials.testimonial_text_3" />,
        author: <Translator path="testimonials.testimonial_author_3" />,
    },
    {
        text: <Translator path="testimonials.testimonial_text_4" />,
        author: <Translator path="testimonials.testimonial_author_4" />,
        role: <Translator path="testimonials.testimonial_author_role_4" />
    },
    {
        text: <Translator path="testimonials.testimonial_text_5" />,
        author: <Translator path="testimonials.testimonial_author_5" />,
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
                            <Translator path="quality_of_service.title" />
                        </h2>
                        <p className="textLg c-white">
                            <Translator path="quality_of_service.text" />
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