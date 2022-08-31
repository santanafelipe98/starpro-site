import React from 'react'
import { useCallback } from 'react'
import Slider from 'react-slick'
import Translator from '../I18n/Translator'

import './OurCustomers.css'

const customers = [
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-14-300x300.jpeg`,
        title: 'Amoedo'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente_Prancheta-1-300x300.jpeg`,
        title: 'Câmara Municipal de Salvador'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-02-300x300.jpeg`,
        title: 'Câmara Municipal de Camaçari'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-03-300x300.jpeg`,
        title: 'Escola Concept'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-04-300x300.jpeg`,
        title: 'Mundo Plaza'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-05-300x300.jpeg`,
        title: 'Copagaz'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-06-300x300.jpeg`,
        title: 'IPERBA'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-07-300x300.jpeg`,
        title: 'Narciso Enxovais'
    },
    
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-08-300x300.jpeg`,
        title: 'SEMO'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-09-300x300.jpeg`,
        title: 'Sempre Odonto'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-10-300x300.jpeg`,
        title: 'Logic'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-11-300x300.jpeg`,
        title: 'Clube Espanhol'
    },


    {
        img: `${process.env.PUBLIC_URL}/images/cliente-12-300x300.jpeg`,
        title: 'Faculdade Dom Pedro II'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-13-300x300.jpeg`,
        title: 'EVO'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-15-300x300.jpeg`,
        title: 'Mar Azul Hotel'
    },

]

const OurCustomers = props => {
    const renderCustomer = useCallback((c, i) => (
        <img key={`brand${i}`} src={c.img} alt={c.title} />
    ), [])

    const settings = {
        arrows: false,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    }

    return (
        <section className="OurCustomers">
            <div className="container">
                <div className="row">
                    <div className="heading col-md-12  col-lg-4 d-flex flex-row align-items-center">
                        <h1 className="headingXl c-primary">
                            <Translator path="our_customers.heading" />
                        </h1>
                    </div>
                    <div className="col-md-12 col-lg-8">
                        <Slider
                            { ... settings }>
                            { customers.map(renderCustomer) }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurCustomers